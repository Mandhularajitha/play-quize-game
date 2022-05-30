import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>

      <nav class="navbar">
        <Link to="/"><div class="brand-title">Play Quize</div></Link>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <Link to="/login"><li><a href="#">Login</a></li></Link>
            
          </ul>
        </div>
      </nav>
 
    </>
  )
}
