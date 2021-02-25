import { Form, Field } from 'react-final-form';
import myFetch from '../actions/myFetch'

import SelectField from "./selectField"

export default function DocumentCreation(props) {

  const onSubmit = async values => {
    await myFetch(
      `${process.env.NEXT_PUBLIC_API_ROOT_URL}api/${props.admin_id}`, 
      values,
      "POST",
      props.loadData
    )
  }

  const validate = values => {
    // console.log('values', values)
  }

  return (
    <div className="_c-document-creation">
      <h3>Ajouter: {props.admin_id.toUpperCase()}</h3>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{}}
        render={({ handleSubmit, form, submitting }) => (
          <form onSubmit={event => {
              const promise = handleSubmit(event)
              promise && promise.then(form.reset)
          }}>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder={props.admin_id}
            />
            {props.admin_id === "beer_color" &&
              <Field
                name="color"
                component="input"
                type="text"
                placeholder="color"
              />
            }
            {props.admin_id === "beer_type" ?
              <div className="_c-beer-type-grid">
                <SelectField url="region" name="country" placeholder="Pays" />
                <SelectField url="beer_category" name="category" placeholder="Catégorie" />
                <SelectField url="bitterness" name="bitterness[min]" placeholder="min" />
                <SelectField url="bitterness" name="bitterness[max]" placeholder="max" />
                <SelectField url="alcohol_title" name="alcoholTitle[min]" placeholder="min" />
                <SelectField url="alcohol_title" name="alcoholTitle[max]" placeholder="max" />
                <SelectField url="beer_color" name="color[min]" placeholder="min" />
                <SelectField url="beer_color" name="color[max]" placeholder="max" />
              </div>
            : null}
            <button type="submit" disabled={submitting}>
              Ajouter
            </button>
          </form>
        )}
      />
    </div>
  );
}