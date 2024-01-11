import React from 'react'
import './project.css'

import Card_project from '../Card_project/Card_project'
import dataShow from '../../data/project.json'
export default function project() {

  let link = "../../assets/image/project/"
  return (
    <section className='project' id='projects_show'>
        <div className="project-container">
            <div className="project-header">
                <h1>
                    <box-icon size='lg' color='#fff' name='terminal' ></box-icon>
                    Project
                    <span> Made</span>
                </h1>
            </div>


            <div className="project-grid" xyz='fade small'>

              <Card_project dataSend={dataShow.projectShow}/>
            </div>

            <div className="project-footer-btn">
              <a href="./#/Project-Page" className='btn-see-detail'>View All</a>
            </div>
   
        </div>
    </section>
  )
}
