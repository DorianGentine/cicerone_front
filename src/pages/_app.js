import '../styles/global.scss'
import Navbar from "../components/navbar"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  )
}