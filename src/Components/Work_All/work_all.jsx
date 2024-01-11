import React from 'react'
import Card_work from '../Card_work/Card_work'
import Work_all from '../../data/self_info.json'
import './work_all.css'

export default function work_all() {
  return (
    <section className='work_all'>
      <div className="work-all-container">
          <div className="work-all-header">
                <h1>
                    <box-icon size='lg' type='solid' color='#ffff' name='briefcase-alt-2'></box-icon>
                    Work
                    <span> Experience</span>
                </h1>
          </div>


          <div className="work-all-contents" xyz='fade left-4'>
                
               <Card_work dataSend={Work_all.work_all_show} Key={'all'}/>
            
                   
            </div>
      </div>

    </section>
  )
}
