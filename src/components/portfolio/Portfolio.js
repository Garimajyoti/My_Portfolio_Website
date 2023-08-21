import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/Image1.jpg'

const work = [
  {
    id : 1,
    image : Image1,
    title : 'Twitter-Clone Application 1',
    github : 'https://github.com/Garimajyoti'
  },
  {
    id : 2,
    image : Image1,
    title : 'Twitter-Clone Application 2',
    github : 'https://github.com/Garimajyoti'
  },
  {
    id : 3,
    image : Image1,
    title : 'Twitter-Clone Application 3',
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
                <img src={Image1} alt="{title}" />
              </div>
              <h3>{title}</h3>
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