import { Form, Field } from 'react-final-form';

export default function DocumentCreation(props) {

  const onSubmit = values => {
    console.log('values', values)
    const myHeaders = new Headers({ 
      'content-type': 'application/json',
      'content-length': JSON.stringify(values).length.toString(), 
    })
    fetch(
      `http://localhost:4200/api/region`, 
      {
        method: "POST",
        headers: myHeaders, 
        body: JSON.stringify(values)
      }
    )
    .then(r => r.json())
    .then(body => {
      console.log('body', body)
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  return (
    <div className="_c-document-creation">
      <h3>Ajouter: {props.admin_id.toUpperCase()}</h3>

      <Form
        onSubmit={onSubmit}
        initialValues={null}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder={props.admin_id}
            />
            <button type="submit" disabled={submitting}>
              Ajouter
            </button>
          </form>
        )}
      />
    </div>
  );
}