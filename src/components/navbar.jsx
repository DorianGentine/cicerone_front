import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {test: true};
  }

  render () {

    return(
      <div className="_c-navbar">
        <Link to="/accueil">Accueil</Link>
        <Link to="/quizz">Quizz</Link>
        <Link to="/admin">Admin</Link>
      </div>
    );
  }
};

export default Navbar;
