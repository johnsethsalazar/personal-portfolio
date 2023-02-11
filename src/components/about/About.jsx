import React from 'react'
import './about.css'
import DP from '../../assets/dpwithbg.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {MdWorkOutline} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={DP} alt='About Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years of Work Experience</small>
            </article>
            <article className='about__card'>
              <MdWorkOutline className='about__icon'/>
              <h5>Work</h5>
              <small><a href="https://vitals.co/" target='_blank'>Vitals </a><br></br></small>
              <small>Technical Support Analyst</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Projects Completed</small>
            </article>
          </div>

          <p>
          Likable and dedicated professional with years of experience in the industry. Eager to offer superb real-world analytical and technical skills.
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About