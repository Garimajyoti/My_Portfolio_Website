import React from 'react'
import './footer.css'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiFacebook} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className = "footer_link">PORTFOLIO</a>

      <ul className="alllinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social_media">
        <a href="https://www.linkedin.com/in/garimajyoti" target="_blank"><SiLinkedin/></a>
        <a href="https://github.com/Garimajyoti" target="_blank"><SiGithub></SiGithub></a>
        <a href="https://www.facebook.com/garima.jyoti.777" target="_blank"><SiFacebook/></a>
    </div>

    <div className='my_link'>
      <h3> Built by Garima Jyoti</h3>
      <h3>< a href="https://michaelmannucci.com/">Design Motivation from Michael Mannucci</a></h3>
    </div>

    </footer>
  )
}

export default Footer