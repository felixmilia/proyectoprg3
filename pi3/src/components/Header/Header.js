import React from 'react'
import './styles.css'
function Header() {
  return (
    <header>
        <img src="/img/logo.png" alt="logo"></img>
        <p>Reels+</p>
        <nav class="naaaaaavbar">
             <a href="/">Home</a>
             <a href="/favoritos">Favoritos</a>
        </nav>
    </header>
  )
}

export default Header