import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiFacebook} from 'react-icons/si'

const SocialMedia = () => {
  return (
    <div className="social_media">
        <a href="https://www.linkedin.com/in/garimajyoti" target="_blank"><SiLinkedin/></a>
        <a href="https://github.com/Garimajyoti" target="_blank"><SiGithub></SiGithub></a>
        <a href="https://www.facebook.com/garima.jyoti.777" target="_blank"><SiFacebook/></a>
    </div>
  )
}

export default SocialMedia