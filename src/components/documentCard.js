import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import card from "../styles/components/_c-document-display.module.scss"
import myFetch from '../actions/myFetch'

import SelectField from "./selectField"
import editFormStyle from "../styles/elements/_e-edit-form.module.scss"

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

    if(this.props.rootURL.includes("beer_type")){
      if(this.state.edit){
        return(
          <div className={card.document_card}>
            <Form
              onSubmit={onSubmit}
              initialValues={data}
              render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit} className={card.card_grid}>
                  <label>Name</label>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    className="span_2"
                  />
                  <label>Country</label>
                  <SelectField url="region" name="country" placeholder="Pays" className="span_2" />
                  <label>Alcohol title</label>
                  <SelectField url="alcohol_title" name="alcoholTitle[min]" placeholder="Taux alcool min" />
                  <SelectField url="alcohol_title" name="alcoholTitle[max]" placeholder="Taux alcool max" />
                  <label>Category</label>
                  <SelectField url="beer_category" name="category" placeholder="Catégorie" className="span_2" />
                  <label>Color</label>
                  <SelectField url="beer_color" name="color[min]" placeholder="Couleur min" />
                  <SelectField url="beer_color" name="color[max]" placeholder="Couleur max" />
                  <label>Bitterness</label>
                  <SelectField url="bitterness" name="bitterness[min]" placeholder="Amertume min" />
                  <SelectField url="bitterness" name="bitterness[max]" placeholder="Amertume max" />
                  <button className="span_3" type="submit" disabled={submitting}>
                    Éditer
                  </button>
                  <button onClick={handleEdit} className="span_3 red">Annuler</button>
                </form>
              )}
            />
          </div>
        )
      }else{
        return(
          <div className={`${card.card_grid} ${card.document_card}`}>
            <label>Name</label>
            <p className="span_2">{data.name}</p>
            <label>Country</label>
            <p className="span_2">{data.country.name}</p>
            <label>Alcohol title</label>
            <p>{data.alcoholTitle.min.name}</p>
            <p>{data.alcoholTitle.max.name}</p>
            <label>Category</label>
            <p className="span_2">{data.category.name}</p>
            <label>Color</label>
            <p>{data.color.min.name}</p>
            <p>{data.color.max.name}</p>
            <label>Bitterness</label>
            <p>{data.bitterness.min.name}</p>
            <p>{data.bitterness.max.name}</p>
            <button onClick={handleEdit} className="span_3">Editer</button>
            <button onClick={handleDelete} className="span_3 red">Supprimer</button>
          </div>
        )
      }
    }else{
      if(this.state.edit){
        return (
          <div className={card.document_card}>
            <Form
              onSubmit={onSubmit}
              initialValues={data}
              render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit} className={editFormStyle.edit_form}>
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
                  <button onClick={handleEdit} className="red">Annuler</button>
                </form>
              )}
            />
          </div>
        )
      }else{
        return (
          <div className={card.document_card}>
            <p>{data.name}</p>
            {this.props.rootURL.includes("beer_color") && <p>{data.color}</p> }
            <button onClick={handleEdit} style={{marginBottom: "5px"}}>Editer</button>
            <button onClick={handleDelete} className="red">Supprimer</button>
          </div>
        )
      }
    }
 
  }
}

export default DocumentCard