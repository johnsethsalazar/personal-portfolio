import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiHashnode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/john-seth-salazar-028728149/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/johnsethsalazar' target="_blank"><FaGithub /></a>
        <a href='https://twitter.com/salazarjohnseth' target="_blank"><BsTwitter /></a>
        <a href='https://johnsethsalazar.hashnode.dev/' target="_blank"><SiHashnode /></a>
    </div>
  )
}

export default HeaderSocials