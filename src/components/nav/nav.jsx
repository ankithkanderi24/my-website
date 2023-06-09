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
      <a href = "#" className={activeNav == '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href = "#about"><AiOutlineUser/></a>
      <a href = "#experience"><MdOutlineWorkOutline/></a>
      <a href = "#projects"><AiOutlineFolderOpen/></a> 
      <a href = "#skills"><AiOutlineCode/></a>
      <a href = "#contact"><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav