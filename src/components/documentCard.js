import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class DocumentCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      edit: false,
      name: props.name,
    }
  }
    
  render() {
    const handleEdit = () => {
      this.setState(prevState => ({
        edit: !prevState.edit
      }))
    }

    const myFetch = (url, data, method, callback = ()=>{}) => {
      const myHeaders = new Headers({ 
        'content-type': 'application/json',
        'content-length': JSON.stringify(data).length.toString(), 
      })
      fetch(
        url, 
        {
          method: method,
          headers: myHeaders, 
          body: JSON.stringify(data)
        }
      )
      .then(r => r.json())
      .then(body => {
        console.log('body', body)
        callback()
      })
      .catch(error => {
        console.error('error', error)
      })
    }

    const handleDelete = () => {
      console.log("Deleted", this.props.data)
      myFetch(
        `http://localhost:4200/api/region/${this.props.data._id}`, 
        this.props.data,
        "DELETE"
      )
    }

    const validate = (values) => {
      console.log('values', values)
    }

    const onSubmit = values => {
      console.log('values', values)
      myFetch(
        `http://localhost:4200/api/region/${values._id}`, 
        values,
        "PUT", 
        () => this.setState(prevState => ({
          edit: !prevState.edit,
          name: values.name,
        }))
      )
    }

    if(this.state.edit){
      return (
        <div className="document-card">
          <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={this.props.data}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  component="input"
                  type="text"
                />
                <button type="submit" disabled={submitting}>
                  Éditer
                </button>
              </form>
            )}
          />
          <button onClick={handleEdit} className="red">Annuler</button>
        </div>
      )
    }else{
      return (
        <div className="document-card">
          <p>{this.props.data.name}</p>
          <button onClick={handleEdit}>Editer</button>
          <button onClick={handleDelete} className="red">Supprimer</button>
        </div>
      )
    }
  }
}

export default DocumentCard