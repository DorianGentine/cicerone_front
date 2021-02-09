import React, { Component } from 'react';

import DocumentCard from "./documentCard"

class DocumentDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:4200/api/region`)
    .then(r => r.json())
    .then(body => {
      this.setState({data: body})
    })
    .catch(error => {
      console.log('error', error)
    })
  }

  render(){

    const renderDataCards = datas => datas.map((data, index) => <DocumentCard data={data} key={index}></DocumentCard>)

    return (
      <div className="_c-document-display">
        {renderDataCards(this.state.data)}
      </div>
    );
  }
}

export default DocumentDisplay