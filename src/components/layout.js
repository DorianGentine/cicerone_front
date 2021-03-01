import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/layout.module.scss'

export const siteTitle = 'Cicerone Trainer'

export default function Layout({ children, admin }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Study for the cicerone exam with Cicerone Trainer"
        />
        <title>{siteTitle}</title>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={admin ? styles.admin_container : styles.container}>{children}</main>
    </>
  )
}
