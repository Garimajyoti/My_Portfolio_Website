import React from 'react';
import './header.css';
import Resume from './resume';
import Photo from '../../assets/photo.jpg';
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiFacebook} from 'react-icons/si'
import SocialMedia from './SocialMedia';
import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header>
      <Nav/>
      <div className="container headerContainer">

        <div className="left-content">
          <div className="my_information">
          <h2>Hello I'm Garima Jyoti </h2>
          <h1>Full Stack Developer</h1>
          <h4>A Software Developer with 2 years of hands-on experience in creating web and software applications.</h4>
          </div>
          
          <div><Resume /></div>
          
          <div><SocialMedia/></div>
          
        </div>

        <div className="right-content">
          <div className="my_photo">
            <img src={Photo} alt="my_photo" />
          </div>
        </div>
        

      </div>

    </header>
  );
};

export default Header;