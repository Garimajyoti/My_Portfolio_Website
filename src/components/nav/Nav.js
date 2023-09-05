import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <div className="logo">
          <h2>PORTFOLIO</h2>
        </div>
        <ul className="nav_links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav