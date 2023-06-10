import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineCode} from 'react-icons/ai';
import {MdOutlineWorkOutline} from 'react-icons/md';
import {AiOutlineFolderOpen} from 'react-icons/ai';
import {AiOutlineContacts} from 'react-icons/ai';
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline/></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#services' ? 'active' : ''}><AiOutlineFolderOpen/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineCode/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav;