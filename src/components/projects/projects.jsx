import React from 'react'
import './projects.css'
import FootballGame from '../../resources/footballgame1.jpg'
import {AiOutlineGithub} from 'react-icons/ai';
import {MdOutlineSportsBasketball} from 'react-icons/md'

const projects = () => {
  return (
    <section id = 'projects'>
      <h2>Projects</h2>

      <div className="container portfolio_container">

        {/*temp */}
        <article className='portfolio_item'>

          <div className="portfolio_item-image">
          <img src={FootballGame} style={{ width: '350px', height: 'auto' }} alt="Football Game" />
          </div>
          <h3>Kobe Tracker</h3>
          <h5>Technologies Used: </h5>
          <div className = 'portfolio_item-cta'>
          <a href = "https://github.com/ankithkanderi24/my-website" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
            <AiOutlineGithub className = 'git-icon'/>
              <div>
                src
              </div>
            </article>
            </a>

            <a href = "https://github.com/ankithkanderi24/my-website" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
            <MdOutlineSportsBasketball className = 'git-icon'/>

              <div>
                src
              </div>
            </article>
            </a>
          </div>
        </article>

        <article className='portfolio_item'>

          <div className="portfolio_item-image">
          <img src={FootballGame} style={{ width: '350px', height: 'auto' }} alt="Football Game" />
          </div>
          <h3>Kobe Tracker</h3>
          <h5>Technologies Used: </h5>
          <div className = 'portfolio_item-cta'>
            <a href = "https://github.com/ankithkanderi24/my-website" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
              <AiOutlineGithub className = 'git-icon'/>
              
              <div>
                src
              </div>
            </article>
            </a>
            <a href = "https://github.com/ankithkanderi24/my-website" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
            <MdOutlineSportsBasketball className = 'git-icon'/>

              <div>
                src
              </div>
            </article>
            </a>
          </div>
        </article>

        <article className='portfolio_item'>

          <div className="portfolio_item-image">
          <img src={FootballGame} style={{ width: '350px', height: 'auto' }} alt="Football Game" />
          </div>
          <h3>Kobe Tracker</h3>
          <h5>Technologies Used: </h5>
          <div className = 'portfolio_item-cta'>
            <a href = "https://github.com/ankithkanderi24/my-website" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
              <AiOutlineGithub className = 'git-icon'/>
              
              <div>
                src
              </div>
            </article>
            </a>
            <a href = "https://github.com/ankithkanderi24/my-website" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
            <MdOutlineSportsBasketball className = 'git-icon'/>

              <div>
                src
              </div>
            </article>
            </a>
          </div>
        </article>









      </div>

      
      

      </section>

  )
}

export default projects