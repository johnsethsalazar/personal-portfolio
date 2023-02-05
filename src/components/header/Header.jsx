import React from 'react'
import './header.css'
import CTA from './CTA'
import DP from '../../assets/dp.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>John Seth T. Salazar</h1>
        <h5 className="text-light">Technical Support Analyst</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={DP} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header