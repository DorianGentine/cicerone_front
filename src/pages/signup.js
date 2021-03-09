import Link from 'next/link'
import Layout from '../components/layout'
import { Form, Field } from 'react-final-form';

import myFetch from '../actions/myFetch'
import authForm from '../styles/components/_c-auth-form.module.scss'
import authService from '../services/auth.service';

function SignUp() {
  const onSubmit = values => {
    authService.register(values)
      .then(response => {
        console.log('response', response)
      })
    // myFetch(
    //   `${process.env.NEXT_PUBLIC_API_ROOT_URL}api/auth/signup`, 
    //   values,
    //   "POST",
    //   body => console.log('body', body)
    // )
  }

  const validate = values => {
    // console.log('values', values)
  }

  return (
    <Layout>
      <h1>Inscrivez-vous:</h1>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{}}
        render={({ handleSubmit, form, submitting }) => (
          <form onSubmit={event => {
              const promise = handleSubmit(event)
              promise && promise.then(form.reset)
          }} className={authForm.grid}>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="Username"
            />
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Email"
            />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
            <button type="submit" disabled={submitting}>
              S'inscrire
            </button>
            <p>Déjà un compte ? <Link href="/login">Connectez-vous</Link></p>
          </form>
        )}
      />


    </Layout>
  )
}

export default SignUp