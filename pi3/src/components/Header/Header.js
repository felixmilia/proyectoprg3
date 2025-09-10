import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Header() {
  return (
    <header>
      <img className="logo" src="/img/logo.png" alt="logo"></img>
      <h1 className='titulo'>Reels+</h1>
      <nav className="naaaaaavbar">
        <div className="linkContainer">
          <Link to="/">Home</Link>
          <Link to="/ver-mas-popular">Ver todas populares</Link>
          <Link to="/ver-mas-cartel">Ver todas en cartel</Link>
          <Link to="/favoritos">Favoritos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header