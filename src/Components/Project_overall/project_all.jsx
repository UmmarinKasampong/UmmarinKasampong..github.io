import React from 'react'

import Card_project from '../Card_project/Card_project'
import './project_all.css'

import Myproject from '../../data/project.json'
export default function project_all() {
  return (

    <section className='project-all'>
        <div className="project-all-container">
            <div className="project-all-header">
                <h1>
                    <box-icon size='md' color='#363062' name='terminal' ></box-icon>
                    Project
                    <span> Made</span>
                </h1>
            </div>


            <div className="project-all-menu">
                <ul>
                    <li><a className='active'>Web Devlop</a></li>
{/* 
                    <li><a>Desktop App</a></li> */}
                </ul>
            </div>


            <div className="project-all-grid" xyz='fade small'>            
               <Card_project dataSend={Myproject.projectWeb}/>

            </div>
        </div>
    </section>
  )
}
