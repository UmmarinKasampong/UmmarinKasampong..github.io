import React from 'react'
import './Card_project.css'
export default function Card_project({dataSend}) {
  return (
    <>
        {
                dataSend.map((data)=>{
                  return (
                      <div className="project-item xyz-nested" style={{backgroundImage:`url(/assets/image/project/${data['project-bg']})`}}>

                      <div className="card-project-detail">
                          <div className="card-header">
                              {data['project-name']}
                          </div>

                          <div className="card-info">
                              <p>{data['project-detail']}</p>

                              <div className="card-btn">
                                <a href={data['project-view-link']} className="link-view" target="_blank" >
                                  <box-icon  name='tv' color='#ffffff' ></box-icon>
                                  View
                                </a>

                                <a href={data['project-view-code']} className="link-code" target="_blank" >
                                  <box-icon  name='code-alt' color='#ffffff' ></box-icon>
                                  Code
                                </a>
                              </div>
                          </div>
                      </div>
                      </div>
                  )
                    
  


                })
              }
    </>
  )
}
