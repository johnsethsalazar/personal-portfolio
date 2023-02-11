import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/john-seth-salazar-028728149/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/johnsethsalazar' target="_blank"><FaGithub /></a>
        <a href='https://twitter.com/salazarjohnseth' target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials