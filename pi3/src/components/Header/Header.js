import React from 'react'
import './styles.css'
function Header() {
  return (
    <header>
      <img src="/img/logo.png" alt="logo"></img>
      <h1>Reels+</h1>
      <nav classNameName="naaaaaavbar">
        <div classNameName="linkContainer">
          <a href="/">Home</a>
          <a href="/favoritos">Favoritos</a>
          <a href="/populares">Ver todas populares</a>
          <a href="/cartel">Ver todas en cartel</a>
        </div>
        <form onSubmit={(event) => this.evitarSubmit(event)} >
          <input type="text" onChange={(event)=>this.controlarCambios(event)} value=""/>
          <button type="submit" classNameName="btn btn-success btn-sm">Buscar</button>
        </form>
      </nav>
    </header>
  )
}

export default Header