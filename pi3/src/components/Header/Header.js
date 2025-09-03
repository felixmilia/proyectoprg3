import React from 'react'
import './styles.css'
function Header() {
  return (
    <header>
        <img src="/img/logo.png" alt="logo"></img>
        <h1>Reels+</h1>
        <nav className="naaaaaavbar">
            <div className="linkContainer">
                <a href="/">Home</a>
                <a href="/favoritos">Favoritos</a>
            </div>
             <form className="search-form" action="" method="get">
                <input type="text" className="" name="searchData" placeholder="Buscar..." value="" />
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
            </form>
        </nav>
    </header>
  )
}

export default Header