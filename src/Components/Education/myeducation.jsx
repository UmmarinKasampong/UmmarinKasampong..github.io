import React from 'react'
import './myeducation.css'

import Card_education from '../Card_education/Card_education'
import Edu_data from '../../data/self_info.json'
export default function myeducation() {

  return (
    <section className='education' id='educations_show'>

        <div className="education-container">
          <h1 className="edu-header">
            <box-icon size='lg' name='graduation' type='solid' ></box-icon>
            My <span> Education</span>
          </h1>


          <div className="edu-contents" xyz='fade left-4'>
            <Card_education dataSend={Edu_data.education_info} />
          </div>
        </div>


    </section>
  )
}
