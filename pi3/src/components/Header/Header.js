import React from 'react'
import './styles.css'
function Header() {
  return (
    <header>
      <img className="logo" src="/img/logo.png" alt="logo"></img>
      <h1 className='titulo'>Reels+</h1>
      <nav className="naaaaaavbar">
        <div className="linkContainer">
          <a href="/">Home</a>
          <a href="/populares">Ver todas populares</a>
          <a href="/cartel">Ver todas en cartel</a>
          <a href="/favoritos">Favoritos</a>
        </div>
      </nav>
    </header>
  )
}

export default Header