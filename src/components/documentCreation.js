import { Form, Field } from 'react-final-form';
import myFetch from '../actions/myFetch'

import SelectField from "./selectField"
import beerTypeGrid from "../styles/components/_c-beer-type-grid.module.scss"

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
    <div>
      <h3>Ajouter: {props.admin_id.toUpperCase()}</h3>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{}}
        render={({ handleSubmit, form, submitting }) => (
          <form onSubmit={event => {
              const promise = handleSubmit(event)
              promise && promise.then(form.reset)
          }} className={beerTypeGrid.beer_type_grid}>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder={props.admin_id}
              className="span_2"
              />
            {props.admin_id === "beer_color" &&
              <Field
                name="color"
                component="input"
                type="text"
                placeholder="color"
                className="span_2"
              />
            }
            {props.admin_id === "beer_type" ?
              <>
              {/* <div className={beerTypeGrid.beer_type_grid}> */}
                <SelectField url="region" name="country" placeholder="Pays" />
                <SelectField url="beer_category" name="category" placeholder="Catégorie" />
                <SelectField url="bitterness" name="bitterness[min]" placeholder="Amertume min" />
                <SelectField url="bitterness" name="bitterness[max]" placeholder="Amertume max" />
                <SelectField url="alcohol_title" name="alcoholTitle[min]" placeholder="Taux alcool min" />
                <SelectField url="alcohol_title" name="alcoholTitle[max]" placeholder="Taux alcool max" />
                <SelectField url="beer_color" name="color[min]" placeholder="Couleur min" />
                <SelectField url="beer_color" name="color[max]" placeholder="Couleur max" />
              {/* </div> */}
              </>
            : null}
            <button type="submit" className="span_2" disabled={submitting}>
              Ajouter
            </button>
          </form>
        )}
      />
    </div>
  );
}