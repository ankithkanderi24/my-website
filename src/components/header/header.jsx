import React from 'react'
import './header.css'
import Buttons from './buttons'
import Headshot from '../../resources/headshot1copy.png'
import Socials from './socials'
const header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Ankith Kanderi!</h1>
      <h5 className="text-light">I'm a Senior @ Georgia Tech. </h5>
      <h5 className="text-light">I am currently recruiting for full time opportunties beginning in January 2024. </h5>   
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