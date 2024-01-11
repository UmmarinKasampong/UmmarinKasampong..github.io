import React from 'react'
import './skill.css'

import Card_skill from '../Card_skill/Card_skill'
// data
import skillData from '../../data/skill.json'


export default function skill() {


  return (
    <section className='skill-page' id='skills_show' xyz='fade small'>

        <div className="skill-container xyz-nested">
            <div className="skill-header">
                <h1>
                    <box-icon size='lg' name='message-dots' type='solid' color='#ffffff' ></box-icon>
                    Skills  &  <span> Abilities</span>
                </h1>
            </div>

            <div className="skill-menu">
                <ul>
                    <li><a className='active'>Programing Skill</a></li>
                </ul>
            </div>


            <div className="skill">
                <div className="skill-grid">
                  
                  <Card_skill dataSend={skillData.programing_skill}/>
            

                </div>
            </div>
           
        </div>

    </section>
  )
}
