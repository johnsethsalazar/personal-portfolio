import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Technical Support</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent technical support skills, which can be used for both email and live chat support.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Have extensive experience using HelpScout to provide support to clients.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Able to provide detailed responses to customer questions and inquiries, troubleshoot technical issues, and assist customers with any necessary account setup. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Able to handle customer complaints in a professional manner, and deeply familiar with the best practices and procedures for providing quality customer service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ability to use various software and tools to provide efficient and effective customer service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ability to research and analyze customer data to identify potential areas of improvement.</p>
            </li>
          </ul>
        </article>
        {/* End of Technical Support */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Has competent skills in HTML, CSS, Javascript, and JQuery which I use to create dynamic and interactive web content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Familiar with React, which I can use to create powerful and interactive user interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Have a basic understanding of Bootstrap, which allows me to quickly and easily create web pages with a consistent layout and design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic understanding of Git, which allows me to manage code repositories and collaborate with other developers.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev */}

        <article className='service'>
          <div className='service__head'>
            <h3>Computer Networking</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Has basic understanding of computer networking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Has an experience in setting up routers, switches, access points, on-premise servers and other related hardware.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */} 
      </div>

    </section>
  )
}

export default Services