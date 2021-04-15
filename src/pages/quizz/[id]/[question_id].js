import Link from 'next/link'
import Layout from '../../../components/layout'
import { Form, Field } from 'react-final-form';

import quizzStyle from "../../../styles/pages/_p-quizz.module.scss"
import checkStyle from "../../../styles/components/_c-checkbox.module.scss"

export async function getStaticProps({ params }) {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT_URL}api/quizz`)
  let body
  if(response.ok){
    body = await response.json()
  } else {
    console.error(response.error)
  }
  return {
    props: {
      body: body,
      params: params
    }
  }
}

export async function getStaticPaths() {
  const adminPaths = [
    {quizz_id: "beer_types", question_id: "1"},
  ]
  const paths = adminPaths.map(path =>{
    return {
      params: {
        id: path.quizz_id,
        question_id: path.question_id
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

function QuizzQuestion(props) {

  const onSubmit = async values => {
    console.log(`values`, values)
    // await myFetch(
    //   `${process.env.NEXT_PUBLIC_API_ROOT_URL}api/${props.admin_id}`, 
    //   values,
    //   "POST",
    //   props.loadData
    // )
  }

  const validate = values => {
    // console.log('values', values)
  }

  const renderOptions = () => props.body.options.map((option, index) => {
    return( 
      <label className={checkStyle.checkbox_form} key={index}>
        <Field
          component="input"
          type="radio"
          name={`question_${props.params.question_id}`}
          value={option._id}
        />
        <div className={checkStyle.check_form}>
          {option.name}
        </div>
      </label>
    )
  })

  return (
    <Layout>
      <h1>{`Quizz ${props.params.id}, question ${props.params.question_id}:`}</h1>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{}}
        render={({ form, submitting }) => (
          <form className={quizzStyle.question}>
            <h2>{props.body.content}</h2>
            <div className={quizzStyle.option_grid}>
              {renderOptions()}
            </div>
            <div className={quizzStyle.navigation_grid}>
              <button>Précédent</button>
              <button>Vérifier</button>
              <div>Réponse</div>
              <button>Suivant</button>
            </div>
          </form>
        )}
      />
    </Layout>
  )
}

export default QuizzQuestion