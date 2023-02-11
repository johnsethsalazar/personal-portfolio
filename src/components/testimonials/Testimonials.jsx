import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/review1.jpg'
import AVTR2 from '../../assets/tsa.jpg'
import AVTR3 from '../../assets/hl.jpg'
import AVTR4 from '../../assets/tpu.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Pollinator Protectors',
    url: 'https://pollinatorprotectors.com/',
    review: 'John Seth S. helped me troubleshoot a problem so quick. Saved me such a headache and was able to get set up in no time.'
  },
  {
    avatar: AVTR2,
    name: 'Tasty Snack Asia',
    url: 'https://www.tastysnack.asia/',
    review: 'Very fast customer support from John! He promptly resolved my issues and proveded extra insights into improving my site.'
  },
  {
    avatar: AVTR3,
    name: 'Huna Loa',
    url: 'https://hunaloa.com/',
    review: 'John Seth was very helpful in helping me get some reviews imported. As well as went over some UX design to help with conversions on my site. Thanks, John!'
  },
  {
    avatar: AVTR4,
    name: 'The Pack Underwear',
    url: 'https://thepackunderwear.com/',
    review: "John Seth S. is great! He managed to customize things that couldn't be done otherwise (unless you're a coder)."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review, url}, index) => {
            return(
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} />
            </div>
          <h5 className='client__name'><a href={url} target='_blank'>{name}</a></h5>
            <small className='client__review'>
              {review}
            </small>
          </SwiperSlide>
          )
          })
        }
      </Swiper>
      <div className='more__reviews-btn'>
        <a href='https://1drv.ms/u/s!AgLfDSF1QLXgihgulGKpnncsinFv?e=Dmj8Zg' target='_blank'><button className='btn'>See more reviews</button></a>
      </div>
    </section>
  )
}

export default Testimonials