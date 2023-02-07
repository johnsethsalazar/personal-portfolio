import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

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
        <a href='facebook.com'><FaFacebookF/></a>
        <a href='instagram.com'><FiInstagram/></a>
        <a href='twitter.com'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; John Seth Salazar. All rights reserved.</small>
      </div>
    </div>
  )
}

export default Footer