import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';

const socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ankithkanderi/' target='_blank' rel='noreferrer'><AiOutlineLinkedin/></a>
        <a href='https://github.com/ankithkanderi24' target='_blank' rel='noreferrer'><AiOutlineGithub/></a>
        <a href='https://www.instagram.com/ankith24/?hl=en' target='_blank' rel='noreferrer'><AiOutlineInstagram/></a>
        <a href='https://twitter.com/ankith_24' target='_blank' rel='noreferrer'><AiOutlineTwitter/></a>
    </div>
  )
}

export default socials

