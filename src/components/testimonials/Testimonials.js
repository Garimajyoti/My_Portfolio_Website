import React from 'react'
import './testimonials.css'
import photo from '../../assets/photo.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
 {
  image: photo,
  name : 'Suhani',
  reviews: 'I highly recommend Garima for her exceptional work on our team at Cognizant. Garima is a skilled and dedicated team member who excels in unit testing. She developed a comprehensive testing strategy for PepsiCo project, greatly improving our code quality. Her positive attitude and strong collaboration skills make her a pleasure to work with. Garima would be a valuable asset to any team'
 },
 {
  image: photo,
  name : 'Anushka',
  reviews: 'I highly recommend Garima for her exceptional work on our team at Cognizant. Garima is a skilled and dedicated team member who excels in unit testing. She developed a comprehensive testing strategy for PepsiCo project, greatly improving our code quality. Her positive attitude and strong collaboration skills make her a pleasure to work with. Garima would be a valuable asset to any team'
 },
 {
  image: photo,
  name : 'Anushi',
  reviews: 'I highly recommend Garima for her exceptional work on our team at Cognizant. Garima is a skilled and dedicated team member who excels in unit testing. She developed a comprehensive testing strategy for PepsiCo project, greatly improving our code quality. Her positive attitude and strong collaboration skills make her a pleasure to work with. Garima would be a valuable asset to any team'
 }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className = "container testimonial_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={3}
      pagination={{ clickable: true }}
      
     >
      {
        data.map(({image, name, reviews }, index) => {
          return(
            <SwiperSlide key = {index} className="testimonial">
            <div className = "colleague_image">
            <img src={photo}/>
            </div>
            <h5 className = "colleague_names">{name}</h5>
            <small className = "colleague_reviews">{reviews}</small>
            </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Testimonials