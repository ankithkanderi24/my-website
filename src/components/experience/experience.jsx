import React from 'react'
import './experience.css'
import {BsDot} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>

      <div className="container job_container">
        <article className='job'>
            <div className="job_head">
                <h3>Capital One</h3>
                <h5 className='company'>Software Engineer Intern</h5>
                <h6 className = 'date'>June 2023 - Aug 2023</h6>
                
            </div>

            <ul className='job_list'>
              <li>
              <h3 className = 'technologies'> Technologies Used: AWS, AWS Lambda, Java</h3>
              </li>
              <li>
              Designed and built two AWS Lambdas (Python) to reduce infrastructure costs and maintenance overhead for Confirm Purchasing Power (CPP) functionality offered to small business cardholders
              </li>
              <li>
              Engineered six REST endpoints (POST, GET, PATCH)to enable seamless integration with larger suite of purchasing products
              </li>
              <li>
              Architected Python library, including data manipulation functions and data models, to interact with two DynamoDB tables
              </li>
              <li>
              Implemented module to retrieve classified passwords and keys, safely cache data, and encrypt user account information
              </li>
              <li>
              Wrote exhaustive unit tests to validate code functionality while also ensuring adherence to CI/CD standards using Jenkins
              </li>
              <li>
              Worked in Agile environment with ceremonies such as daily stand-up, sprint planning, and sprint retrospectives
              </li>
            </ul>
        </article>


        <article className='job'>
            <div className="job_head">
                <h3>AT&T, Inc.</h3>
                <h5 className='company'>Software Engineer Intern</h5>
                <h6 className = 'date'>June 2022 - Aug 2022</h6>
                
            </div>

            <ul className='job_list'>
              <li>
                <h3 className = 'technologies'> Technologies Used: Java, Spring Boot, React, SQL</h3>
              </li>

                <li>
                Employed Spring Boot (Java + Maven) to port data into a SOLR database to encourage members of Fiber Broadband software team to support applications with a more efficient data source
                </li>
                <li>
                Increased speed of common fiber broadband infrastructure queries by ~100%, potentially impacting 75,000 customers daily
                </li>
                <li>
                Refactored REST API to directly transfer data from users into SOLR database, providing integration with 20 applications
                </li>
                <li>
                Implemented JUnit server-side testing to ensure that data put into the pipeline was properly placed into the SOLR database
                </li>

                
            </ul>
        </article>


        <article className='job'>
            <div className="job_head">
                <h3>Wells Fargo</h3>
                <h5 className='company'>Software Engineer Intern</h5>
                <h6 className = 'date'>June 2021 - Aug 2021</h6>
                
            </div>

            <ul className='job_list'>
              <li>
              <h3 className = 'technologies'> Technologies Used: SQL, VB</h3>
              </li>
                <li>
                Utilized SQL and Visual Basic (VB) to automate the creation of seven risk reports, saving over 200 human hours a year
                </li>
                <li>
                Improved efficiency of the reporting process by roughly 800%, concurrently improving overall data quality in the reports
                </li>
                <li>
                Formulated code to automate a tri-weekly process of comparing data extracts for variation, saving over 150 hours annually
                </li>
                <li>
                Managed the transition of extracting data from a weekly-updated external website to directly pulling from live databases
                </li>
                
                <li>
                Showcased process to executive leadership and team members to promote automation in the Capital Markets Tech sector
                </li>

                
            </ul>
        </article>
      </div>
    </section>
  )
}

export default experience