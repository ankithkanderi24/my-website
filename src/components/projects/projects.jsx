import React from 'react'
import './projects.css'
import FootballGame from '../../resources/footballgame1.jpg'
import NBA from '../../resources/nba.jpeg'
import {AiOutlineGithub, AiOutlineYoutube, AiOutlineCheckCircle} from 'react-icons/ai';
import recommendation from '../../resources/recommendation.pdf'
import {MdOutlineSportsBasketball} from 'react-icons/md'
import iParametrics from '../../resources/iParametrics.jpeg'


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
          <h3>This website!</h3>
          <h5>Technologies Used: React, JavaScript, CSS, HTML </h5>
          <div className = 'portfolio_item-cta'>
          <a href = "https://github.com/ankithkanderi24/my-website" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
            <AiOutlineGithub className = 'git-icon'/>
              <div>
                Src
              </div>
            </article>
            </a>

          </div>
        </article>

        <article className='portfolio_item'>

          <div className="portfolio_item-image">
          <img src={NBA} style={{ width: '350px', height: 'auto' }} alt="Football Game" />
          </div>
          <h3>NBA Verdict</h3>
          <h5>Technologies Used: Flask, Python, Pandas </h5>
          <div className = 'portfolio_item-cta'>
            <a href = "https://github.com/ankithkanderi24?tab=repositories" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
              <AiOutlineGithub className = 'git-icon'/>
              
              <div>
                Src
              </div>
            </article>
            </a>
            
          </div>
        </article>

        <article className='portfolio_item'>

          <div className="portfolio_item-image">
          <img src={iParametrics} style={{ width: '350px', height: 'auto' }} alt="Football Game" />
          </div>
          <h3>CWCS Score Web App  </h3>
          <h5>Technologies Used: React, AzureSQL, Python </h5>
          <div className = 'portfolio_item-cta'>
            <a href = "https://www.youtube.com/watch?v=ynZICJoOL_Y" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
              <AiOutlineYoutube className = 'git-icon'/>
              
              <div>
                Watch!
              </div>
            </article>
            </a>

            <a href = "https://drive.google.com/file/d/1p-iL_nlovpgcV-QXLkqnyUPWezyGwhEH/view?usp=sharing" className = 'btn' target = '_blank' rel = 'noreferrer'>
            <article className = 'links'>
              <AiOutlineCheckCircle className = 'git-icon'/>
              
              <div>
                LoR
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