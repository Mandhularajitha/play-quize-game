import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>

      <nav className="navbar">
        <Link to="/"><div className="brand-title">Play Quize</div></Link>
        <a href="#" className="toggle-button">
        <Link to="/login"><h className="loginhandl" href="#">Login</h></Link>
        </a>
        <div className="navbar-links">
          <ul>
            <Link to="/login"><li><a href="#">Login</a></li></Link>
            
          </ul>
        </div>
      </nav>
 
    </>
  )
}
