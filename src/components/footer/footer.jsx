import React from 'react'
import './footer.css'

import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ankith Kanderi</a>

      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/rohan018/' target='_blank' rel="noreferrer"><AiOutlineLinkedin /></a>
        <a href='https://github.com/RohanSrivastava018' target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
        <a href="mailto: ankithkanderi24@gmail.com" target='_blank' rel="noreferrer"><AiOutlineMail /></a>
      </div>
    </footer>
  )
}

export default footer