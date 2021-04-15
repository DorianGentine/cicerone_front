import { useRouter } from 'next/router'
import Layout from '../../components/layout'

export async function getStaticProps({ params }) {
  // let response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT_URL}api/${params.admin_id}`)
  // let body
  // if(response.ok){
  //   body = await response.json()
  // } else {
  //   console.error(response.error)
  // }
  return {
    props: {
      body: {},
      id: params.id
    }
  }
}

export async function getStaticPaths() {
  const adminPaths = [
    "beer_types",
  ]
  const paths = adminPaths.map(path =>{
    return {
      params: {
        id: path
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

function Quizz(props) {
  const router = useRouter()
  const query = router.query

  return (
    <Layout>
      <h1>{`This is the question ${props.id}`}</h1>
    </Layout>
  )
}

export default Quizz