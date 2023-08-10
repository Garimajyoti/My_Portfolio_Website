import React from 'react';
import './header.css';
import Resume from './resume';
import Photo from '../../assets/photo.jpg';
import SocialMedia from './SocialMedia';
import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header>
      <Nav/>
      <div className="container headerContainer">
        <div className="left-content">
          <h1>Hello I'm</h1>
          <h1>Garima Jyoti</h1>
          <h1>Full Stack Developer</h1>
          <Resume />
          <SocialMedia />
        </div>
        <div className="my_photo">
          <img src={Photo} alt="my_photo" />
        </div>
      </div>
    </header>
  );
};

export default Header;