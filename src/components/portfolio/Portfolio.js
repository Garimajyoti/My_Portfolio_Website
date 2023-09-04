import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/Image1.jpg'
import Image2 from '../../assets/Image2.jpg'
import Image3 from '../../assets/Image3.jpg'

const work = [
  {
    id : 1,
    image : Image1,
    title : 'Twitter Clone Application',
    github : 'https://github.com/Garimajyoti'
  },
  {
    id : 2,
    image : Image2,
    title : 'Social Media Search Engine',
    github : 'https://github.com/Garimajyoti'
  },
  {
    id : 3,
    image : Image3,
    title : 'Brain Buddy E-learning Application',
    github : 'https://github.com/Garimajyoti'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          work.map(({id, image, title, github}) => {
            return(

              <article className='portfolio_work'>
              <div className = 'portfolio_work-image'>
              <img src={image} alt="{title}" />
              </div>
              <h4>{title}</h4>
              <a href={github} className='btn btn btn-primary' target='_blank'>Github</a>
            </article>

            )
          })
        }
       

      </div>
    </section>
  )
}

export default Portfolio