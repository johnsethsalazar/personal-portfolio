import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/therandompasswordgenerator.png'
import IMG2 from '../../assets/desktopdashboard.png'
import IMG3 from '../../assets/travel-journal.png'

//Do not use the images in production

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The Random Password Generator',
    github: 'https://github.com/johnsethsalazar/random-password-generator',
    demo: 'https://therandompasswordgenerator.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Desktop Personal Multiwidget Dashboard',
    github: 'https://github.com/johnsethsalazar/multiwidget-dashboard',
    demo: 'https://multiwidget-dashboard-johnsethsalazar.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Travel Journal',
    github: 'https://github.com/johnsethsalazar/react-travel-journal',
    demo: 'https://johnseth-traveljournal.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
    
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio