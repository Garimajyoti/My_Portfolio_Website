import React from 'react'
import my_resume from '../../assets/my_resume.pdf'



const Resume = () => {
  return (
    <div className = "res">
        <a href = {my_resume} download className='btn'> Download Resume</a>
        <a href = "#contact" className='btn btn-primary'> Contact Me</a>
    </div>
  )
}

export default Resume