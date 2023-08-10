import React from 'react'
import './about.css'
import Photo from '../../assets/photo.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {BsPeopleFill} from 'react-icons/bs'
import {LuStickyNote} from 'react-icons/lu'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className= "container about_container">

        <div className = "about_me">
          <div className = "about_image">
          <img src={Photo} alt="About Photo"/>
          </div>
        </div>
      



      <div className="about_content">
        <div className="about_cards">
        <article className="about_insideCard">
          <RiAwardFill className = "about_icon"/>
          <h5>Experience</h5>
          <small>1.5+ Years Working</small>
          </article>

          <article className="about_insideCard">
          <BsPeopleFill className = "about_icon"/>
          <h5>Clients</h5>
          <small>10+ Worldwide</small>
          </article>

          <article className="about_insideCard">
          <LuStickyNote className = "about_icon"/>
          <h5>Projects</h5>
          <small>7+ Completed</small>
          </article>
        </div>

        <p>
        Software Developer with 2 years of hands-on experience in creating web and software applications. 
        Demonstrated strong analytical thinking and problem-solving abilities in designing, implementing, testing, evaluating, 
        and managing software programs. Experienced in performing unit testing and manual testing to ensure code execution as expected.
        Possess excellent communication skills, both written and verbal, along with leadership qualities to collaborate with 
        teams and drive project success.
        </p>

        <a href="#contact" className = "btn btn-primary"> Let's Talk</a>
      </div>
    </div >
    </section>
  )
}

export default About