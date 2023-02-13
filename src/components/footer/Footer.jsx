import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'
import {SiHashnode} from 'react-icons/si'

const Footer = () => {
  return (
    <div id='footer'>
      <a href='#' className='footer__logo'>John Seth Salazar</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/john-seth-salazar-028728149/'><BsLinkedin/></a>
        <a href='https://github.com/johnsethsalazar'><BsGithub/></a>
        <a href='https://twitter.com/salazarjohnseth'><IoLogoTwitter /></a>
        <a href='https://johnsethsalazar.hashnode.dev/'><SiHashnode /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; John Seth Salazar. All rights reserved.</small>
      </div>
    </div>
  )
}

export default Footer