import React from 'react'
import './skills.css'
import {AiTwotoneClockCircle} from 'react-icons/ai'


const skills = () => {
  return (
    <section id = 'skills'>
      <h2>Skills</h2>

      <div className='container experience_container'>
        <div className = 'experience_languages'>

          <h3>Languages + Frameworks</h3>
          <div className = "experience_content">
            <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>Java</h4>
              <small className = 'text-light'>Experienced</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>Python</h4>
              <small className = 'text-light'>Experienced</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>SQL</h4>
              <small className = 'text-light'>Experienced</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>HTML + CSS</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>C</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>React</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>AWS (Lambda)</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>Spring Boot</h4>
              <small className = 'text-light'>Beginner</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>Node.js</h4>
              <small className = 'text-light'>Beginner</small>
            </div>
          </article>
          </div>
        </div>



        <div className = 'experience_technologies'>
          <h3>Technologies</h3>
          <div className='experience_content'>
          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>Java</h4>
              <small className = 'text-light'>Experienced</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>Git</h4>
              <small className = 'text-light'>Experienced</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>MacOS</h4>
              <small className = 'text-light'>Experienced</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>WindowsOS</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>JUnits</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>Machine Learning</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>Databases (SQL + NoSQL)</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>Networking</h4>
              <small className = 'text-light'>Beginner</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>JSON</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>

          <article className = 'experience_details'>
            <AiTwotoneClockCircle className='experience_details-icon'/>
            <div>
              <h4>MERN</h4>
              <small className = 'text-light'>Beginner</small>
            </div>
          </article>
        </div>
        </div>
      </div>

    </section>

  )
}

export default skills