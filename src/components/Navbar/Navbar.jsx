import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'

function Navbar() {
  return (
      <div className='nav'>
      <h1>Олег Марков</h1>
            <div className="navbar">
                <div className="navbar-center">
                  <ul>
                  <Link to="/">Главная</Link>
                    <Link to="/about">Обо мне</Link>
                    <Link to="/contact">Связаться</Link>
                
                  </ul>
                </div>
            </div>
      </div> 
  )
}

export default Navbar
