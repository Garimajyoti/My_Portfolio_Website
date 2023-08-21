import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/Image1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_work'>
          <div className = 'portfolio_work-image'>
            <img src={Image1} alt="" />
          </div>
          <h3>Twitter Clone Application</h3>
          <a href="https://github.com/Garimajyoti" className='btn btn btn-primary' target='_blank'>Github</a>
        </article>

        <article className='portfolio_work'>
          <div className = 'portfolio_work-image'>
            <img src={Image1} alt="" />
          </div>
          <h3>Twitter Clone Application</h3>
          <a href="https://github.com/Garimajyoti" className='btn btn btn-primary' target='_blank'>Github</a>
        </article>

        <article className='portfolio_work'>
          <div className = 'portfolio_work-image'>
            <img src={Image1} alt="" />
          </div>
          <h3>Twitter Clone Application</h3>
          <a href="https://github.com/Garimajyoti" className='btn btn-primary' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio