import React from 'react'
import './header.css'
import Buttons from './buttons'
import Headshot from '../../resources/headshot1copy.png'
import Socials from './socials'
import Typewriter from 'typewriter-effect';

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>
      <Typewriter
            onInit={(typewriter) => {
              typewriter
              .changeDelay(125)
              .pauseFor(500)
              .typeString("Hello!")
              .pauseFor(1500)
              .deleteAll()
              .typeString("I'm Ankith Kanderi!")
              .pauseFor(5000)
              .callFunction(function(state) {
                state.elements.cursor.style.color = 'transparent';
              })
              .start()
            }}
          />
        </h1>
      <h5 className="text-white">I'm a Senior @ Georgia Tech. </h5>
      <h5 className="text-white">I am currently recruiting for full time opportunties beginning in January 2024. </h5>   
      <Buttons />
      <Socials />

       
      <div className="me">
  <img src={Headshot} alt="me" style={{ width: '360px', height: 'auto' }} />
</div>
      
      

      <a href = "#contact" className = 'scroll_down'>Scroll Down</a>
      </div>
      </header>
  )
}

export default header