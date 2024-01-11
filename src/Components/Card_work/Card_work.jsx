import React from 'react'
import './Card_work.css'
export default function Card_work({ dataSend , Key }) {
    return (
        <>
            {
                dataSend.map((data) => {
                    return (

                        <div className="work-item xyz-nested">

                            <img src={"/assets/image/work/" + data[`work-${Key}-img`]} alt="" className="work-img" />
                            <div className="work-info">
                                <h1>{data[`work-${Key}-title`]}</h1>
                                <span>{data[`work-${Key}-info`]} <span>{data[`work-${Key}-info-title`]}</span></span>
                                <p>{data[`work-${Key}-date`]}</p>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}
