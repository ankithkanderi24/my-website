import React from 'react'
import Resume from '../../resources/resume.pdf'

const buttons = () => {
  return (
    <div className = 'buttons'>
        <a href = "https://drive.google.com/file/d/1VBQvmlLxpQ5eIKCLZcMIDqLo5NxLGFDP/view?usp=sharing" target = "_blank" className='btn'>Resume</a>
        <a href = "#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default buttons