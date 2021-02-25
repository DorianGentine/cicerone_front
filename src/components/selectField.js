import { Component } from 'react'
import { Field } from 'react-final-form';
import Select from 'react-select'

import myFetch from "../actions/myFetch";

class SelectField extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: []
    }
  }

  loadData = () => {
    myFetch(
      `${process.env.NEXT_PUBLIC_API_ROOT_URL}api/${this.props.url}`,
      undefined,
      "GET",
      (body) => this.setState({options: body})
    )
  } 

  componentDidMount() {
    this.loadData()
  }
  

  render(){
    const options = this.state.options

    const ReactSelectAdapter = ({ input, ...rest }) => {
      return(
        <Select 
          {...input} 
          {...rest}
          getOptionLabel={option => option.name}
          getOptionValue={option => option._id}
          placeholder={this.props.placeholder}
          className="select-field"
        />
      )
    }

    return (
      <Field
        name={this.props.name}
        component={ReactSelectAdapter}
        options={options}
      />
    )
  }
}

export default SelectField