import React from 'react';
import './contact.css';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';





const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('websiteEmailService', 'template_i2jahk6', form.current, 'fO0MJZgrxDVma4hDB')

    e.target.reset();
  };

  return (
    <section id = 'contact'>
      <h2>Contact Me!</h2>
      <div className = "container contact_container">
        <div className = "contact_options">
          <article className= "contact_option">
            <div className='contacticon'><AiOutlineMail/></div>
          
            <h4>ankithkanderi24@gmail.com</h4>
            <a href = "mailto:ankithkanderi24@gmail.com" target = '_blank'>Email me!</a>
          </article>

       
          <article className= "contact_option">
          <div className='contacticon'><AiOutlineLinkedin/></div>
            <h4>Reach out and connect with me!</h4>
            <a href = "https://www.linkedin.com/in/ankithkanderi/" target = '_blank'>Profile</a>
          </article>
        

          <article className= "contact_option">
          <div className = 'contacticon'><BsTelephone/></div>
            <h4>(704) - 254 - 9893</h4>
            <a href = "tel:7042549893" target = '_blank'>Feel free to call me!</a>
          </article>

        </div>
        


        <form ref={form} onSubmit={sendEmail}>
          <input type = "text" name = 'Name' placeholder='Full Name' required></input>
          <input type = "text" name = 'Email' placeholder='Email' required></input>
          <textarea name = "message" rows = "7" placeholder='Message' required></textarea>
          <button type = 'submit' className = 'btn btn-primary'>Submit</button>
        </form>
      </div>





      


    </section>

  )
}

export default Contact
