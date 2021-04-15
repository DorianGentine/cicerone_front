import Link from 'next/link'
import Layout from '../components/layout'

import quizzStyle from "../styles/pages/_p-quizz.module.scss"

function QuizzPage() {
  return (
    <Layout>
      <h1>Choisissez votre test:</h1>

      <div className={quizzStyle.grid}>
        <Link href="/quizz/beer_types">
          <button>Types de bières</button>
        </Link>
      </div>
    </Layout>
  )
}

export default QuizzPage