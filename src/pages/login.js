import Link from 'next/link'
import Layout from '../components/layout'
import { Form, Field } from 'react-final-form';

import authForm from '../styles/components/_c-auth-form.module.scss'
import authService from '../services/auth.service';
import { useRouter } from 'next/router';

export default function SignUp(props) {
  const router = useRouter()
  const onSubmit = values => {
    authService.login(values)
      .then(() => {
        router.push("/")
      })
  }

  const validate = values => {
    // console.log('values', values)
  }

  return (
    <Layout>
      <h1>Connectez-vous:</h1>

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
              Se connecter
            </button>
            <p>Vous n'avez pas de compte ? <Link href="/signup">Inscrivez-vous ici</Link></p>
          </form>
        )}
      />


    </Layout>
  )
}