import React from 'react'
import './work_experience.css'

import Card_work from '../Card_work/Card_work'
import Work_less from '../../data/self_info.json'
import data from '/assets/image/work/sony-technology.png'
export default function work_experience() {
  return (
    <section className='work_experience' id='works_show'>
        
        <div className="work-container">
            <div className="work-header">
                <h1>
                    <box-icon size='lg' type='solid' name='briefcase-alt-2'></box-icon>
                    Work
                    <span> Experience</span>
                </h1>
            </div>


            <div className="work-contents" xyz='fade right-4'>
                
             <Card_work dataSend={Work_less.work_less_show} Key={'show'}/>
        
                   
            </div>

            
            <div className="work-footer-btn">
              <a href="./#/Work-Page" className='btn-see-detail'>View All</a>
            </div>
        </div>
    </section>
  )
}
