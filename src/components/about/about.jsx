import React from 'react'
import './about.css'
import FootballGame from '../../resources/footballgame1.jpg'
import {FaUniversity} from 'react-icons/fa';
import {MdComputer} from 'react-icons/md'
import {BiNetworkChart} from 'react-icons/bi';


const about = () => {
  return (
    <section id = 'about'>
      <h2>About Me</h2>

      <container className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
          <img src={FootballGame} alt="Football Game" />

          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className = 'about_card'>
              <FaUniversity className='about_icon'/>
              <h5>Georgia Institute of Technology</h5>
              <small>University</small>
              <small></small>
            </article>

            <article className="about_card">
              <MdComputer className='about_icon'/>
              <h5>B.S. in Computer Science</h5>
              <small>Degree</small>
            </article>

            <article className="about_card">
              <BiNetworkChart className='about_icon'/>
              <h5>Intelligence & Information Internetworks</h5>
              <small>Concentrations</small>
            </article>
          </div>

          <article className='text'>
            <p>
              Hello! I'm a fourth year majoring in Computer Science! Within the field of computer science, my interests lie within machine learning and building complex systems. 
              Outside of computer science, I love to play basketball, lift weights, and cheer on GT football (unfortunately, there is usally not much to cheer for). 
              <br/>
              <br/>
              I will be graduating from Georgia Tech in December 2023, and am currently recruiting for full-time opportunities that begin in January 2024. Please feel free to reach out!
            </p>
          </article>


        </div>
      </container>

    </section>
  )
}

export default about