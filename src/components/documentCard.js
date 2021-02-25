import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import card from "../styles/components/_c-document-display.module.scss"
import myFetch from '../actions/myFetch'

class DocumentCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      edit: false,
    }
  }
    
  render() {
    const data = this.props.data

    const handleEdit = () => {
      this.setState(prevState => ({
        edit: !prevState.edit
      }))
    }

    const handleDelete = () => {
      myFetch(
        `${this.props.rootURL}/${data._id}`, 
        data,
        "DELETE",
        this.props.loadData
      )
    }

    const onSubmit = values => {
      myFetch(
        `${this.props.rootURL}/${values._id}`, 
        values,
        "PUT", 
        () => {
          this.setState(prevState => ({ edit: !prevState.edit}))
          this.props.loadData()
        }
      )
    }
    
    const dataToRender = JSON.parse(JSON.stringify(data))
    delete dataToRender._id
    delete dataToRender.__v
    const valuesToRender = []
    for (const property in dataToRender) {
      console.log(`${property}: ${dataToRender[property]}`)
      // valuesToRender.push(dataToRender[property])
    }
    
    const renderInfos = () => valuesToRender.map(
      (value, index) => {
        return <p key={index} >{value}</p>
      }
    )

    if(this.state.edit){
      return (
        <div className={card.document_card}>
          <Form
            onSubmit={onSubmit}
            initialValues={data}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className="_e-edit-form">
                <Field
                  name="name"
                  component="input"
                  type="text"
                />
                {this.props.rootURL.includes("beer_color") &&
                  <Field
                    name="color"
                    component="input"
                    type="text"
                  />
                }
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
        <div className={card.document_card}>
          <p>{data.name}</p>
          {renderInfos()}
          <button onClick={handleEdit}>Editer</button>
          <button onClick={handleDelete} className="red">Supprimer</button>
        </div>
      )
    }
  }
}

export default DocumentCard