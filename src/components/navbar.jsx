import { Component } from 'react'
import Link from 'next/link'
import navbar from '../styles/components/_c-navbar.module.scss'
import authService from '../services/auth.service'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: undefined,
      isAdmin: false
    }
  }

  getCurrentUser(){
    const user = authService.getCurrentUser()
    if(user){
      this.setState({
        currentUser: user,
        isAdmin: user.admin
      })
    }
  }
  
  componentDidMount() {
   this.getCurrentUser() 
  }

  componentDidUpdate(){
    if(!this.state.currentUser && localStorage.getItem('user')) {
      this.getCurrentUser()
    }
  }

  logout(){
    authService.logout()
  }
  
  render(){
    const {currentUser, isAdmin} = this.state
    return(
      <>
        <div className={navbar.navbar}>
          <Link href="/">Accueil</Link>
          <Link href="/quizz">Quizz</Link>
          {isAdmin && 
            <Link href="/admin/region">Admin</Link>
          }
          {currentUser ?
            <>
              <Link href="/profil">{currentUser.username}</Link>
              <a href="/login" onClick={this.logout}>Se déconnecter</a>
            </>
          : 
            <>
              <Link href="/signup">S'inscrire</Link>
              <Link href="/login">Se connecter</Link>
            </>
          }
        </div>
        <div className={navbar.navbar_margin}></div>
      </>
    );
  }
};

export default Navbar
