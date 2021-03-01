import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import admin from '../../styles/pages/_p-admin.module.scss'
import { useRouter } from 'next/router';
import myFetch from "../../actions/myFetch"

import DocumentCreation from '../../components/documentCreation'
import DocumentDisplay from '../../components/documentDisplay'

export async function getStaticProps({ params }) {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT_URL}api/${params.admin_id}`)
  let body
  if(response.ok){
    body = await response.json()
  } else {
    console.error(response.error)
  }
  return {
    props: {
      body: body,
      admin_id: params.admin_id
    }
  }
}

export async function getStaticPaths() {
  const adminPaths = [
    "region",
    "alcohol_title",
    "beer_category",
    "beer_color",
    "bitterness",
    "beer_type",
  ]
  const paths = adminPaths.map(path =>{
    return {
      params: {
        admin_id: path
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export default function Post(props) {
  const root = "/admin"

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }

  return (
    <Layout admin>
      <Head>
        <title>{props.admin_id}</title>
      </Head>
      <div className={admin.admin_menu}>
        <Link href={`${root}/region`}>Régions</Link>
        <Link href={`${root}/alcohol_title`}>Alcohol titles</Link>
        <Link href={`${root}/beer_category`}>Beer categories</Link>
        <Link href={`${root}/beer_color`}>Beer colors</Link>
        <Link href={`${root}/bitterness`}>Bitterness</Link>
        <Link href={`${root}/beer_type`}>Beer types</Link>
      </div>

      <div className={admin.admin_body}>
        <DocumentCreation loadData={refreshData} admin_id={props.admin_id} />
        <DocumentDisplay loadData={refreshData} admin_id={props.admin_id} data={props.body} />
      </div>
    </Layout>
  )
}