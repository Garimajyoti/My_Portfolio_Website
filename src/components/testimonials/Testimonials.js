import React from 'react'
import './testimonials.css'
import photo from '../../assets/photo.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from colleagues</h5>
      <h2>Testimonials</h2>

      <div className = "container testimonial_container">

        <article className="testimonial">
          <div className = "colleague_image">
            <img src={photo} alt="" />
          </div>
          <h5 className = "colleague_names">Suhani</h5>
            <small className = "colleague_reviews">
            I highly recommend Garima for her exceptional work on our team at Cognizant. 
            Garima is a skilled and dedicated team member who excels in unit testing. She 
            developed a comprehensive testing strategy for PepsiCo project, 
            greatly improving our code quality. Her positive attitude and strong 
            collaboration skills make her a pleasure to work with. Garima would be a 
            valuable asset to any team.
            </small>
        </article>

        <article className="testimonial">
          <div className = "colleague_image">
            <img src={photo} alt="" />
          </div>
          <h5 className = "colleague_names">Suhani</h5>
            <small className = "colleague_reviews">
            I highly recommend Garima for her exceptional work on our team at Cognizant. 
            Garima is a skilled and dedicated team member who excels in unit testing. She 
            developed a comprehensive testing strategy for PepsiCo project, 
            greatly improving our code quality. Her positive attitude and strong 
            collaboration skills make her a pleasure to work with. Garima would be a 
            valuable asset to any team.
            </small>
        </article>

        <article className="testimonial">
          <div className = "colleague_image">
            <img src={photo} alt="" />
          </div>
          <h5 className = "colleague_names">Suhani</h5>
            <small className = "colleague_reviews">
            I highly recommend Garima for her exceptional work on our team at Cognizant. 
            Garima is a skilled and dedicated team member who excels in unit testing. She 
            developed a comprehensive testing strategy for PepsiCo project, 
            greatly improving our code quality. Her positive attitude and strong 
            collaboration skills make her a pleasure to work with. Garima would be a 
            valuable asset to any team.
            </small>
        </article>

      </div>
    </section>
  )
}

export default Testimonials