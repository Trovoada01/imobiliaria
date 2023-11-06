import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
    <nav>
        <h1>Imobiliaria gersson</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>  
        <Link to="/sobre">Sobre</Link>
        <Link to="/conteudo">Conteudo</Link> 
    </nav>
  </header>
  )
}
export default Navbar