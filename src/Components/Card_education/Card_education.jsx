import React from 'react'
import './Card_education.css'

export default function Card_education({dataSend}) {
  console.log(dataSend)
  return (
    <>
        {
            dataSend.map((data)=> {
             return (
                
                <div className="edu-item xyz-nested">
                        <img src={"/assets/image/education/" + data['edu_img']} alt="" className="edu-img" />
                        <div className="edu-info">
                            <h1>{data['edu_title']}</h1>
                            <span>{data['edu_info']}</span>
                            <p>{data['edu_date']}</p>
                        </div>
                </div>
            )})
        }
    </>
  )
}
