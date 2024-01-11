import React from 'react'
import './Card_skill.css'
export default function Card_skill({dataSend}) {

    var num , i;
    const starGen =(star)=> {
        let content = []
        num = 1
      
        for(i = 0 ; i < 5 ; i++){
            if(num <= star){
                    content.push(<box-icon name='star' type='solid' color='#f4ce14' ></box-icon>)
            }else {
                content.push( <box-icon  name='star'  color='#f4ce14' ></box-icon>)
    
            }
       
            num++;
        }
        console.log(content)
        return content
    }

    
    return (
        <>
            {
                dataSend.map((data) => {
                    return (
                        <div className="skill-item">
                            <div className="main-show">
                                <img src={"/assets/image/icon/" + data['skill-img']} alt="" className="icon-main-show" />
                                {/* <box-icon type='logo' color='#ffff' size='lg' name={data['skill-img']}></box-icon> */}
                                <h2>{data['skill-name']}</h2>
                            </div>

                            <div className="hover-show">
                                <img src={"/assets/image/icon/" + data['skill-img']} alt="" className="icon-hide-show" />
                                {/* <box-icon type='logo' color='#ffff' size='lg' name={data['skill-img']}></box-icon> */}
                                <div className="star-rate">
                                    {starGen(parseInt(data['star-rate']))}

                                </div>
                            </div>

                        </div>
                    )
                })


            }
        </>
    )
}
