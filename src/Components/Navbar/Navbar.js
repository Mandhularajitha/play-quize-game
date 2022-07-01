import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>

      <nav className="navbar">
        <Link to="/"><div className="brand-title">Play Quize</div></Link>
        <p className="toggle-button">
        <Link to="/login"><h className="loginhandl" href="#">Login</h></Link>
        </p>
        <div className="navbar-links">
          <ul>
            <Link to="/login" className='login'>Login</Link>
            
          </ul>
        </div>
      </nav>
 
    </>
  )
}
