// import { Link } from 'react-router-dom';
import Link from 'next/link'
import navbar from '../styles/components/_c-navbar.module.scss'

export default function Navbar() {
  return(
    <>
      <div className={navbar.navbar}>
        <Link href="/">Accueil</Link>
        <Link href="/quizz">Quizz</Link>
        <Link href="/admin/region">Admin</Link>
      </div>
      <div className={navbar.navbar_margin}></div>
    </>
  );
};
