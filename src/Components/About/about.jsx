import React from 'react'
import './about.css';
import Person from '../../assets/image/ummarin.jpg'

import DownloadResume from '../../data/resume/resume.pdf'
export default function about() {
  return (
    <section className='About' id='about'>
        <div className="about-wapper">

                <h1 className='about-header'><box-icon size='xm' type='solid' name='user'></box-icon> About <span>Me</span></h1>

                <div className="about-info" xyz="fade right-4">
               


                    <img src={Person} alt="Ummarin Kasampong" className="person-img " />
                  
                   

                    <div className="own-info xyz-nested">
                        <div className="top-info">
                            <h1>I'm Ummarin Kasampong</h1>
                            <h2>Full Stack Developer</h2>
                        </div>


                        <div className="center-info">
                         
                            <p>I’m fresh graduated in Computer Engineer  at Suranaree University of Technology on Thailand
                            <br/>
                            during my Internship , I Have Experience Dev System for use in industry plant at Sony Technology
                            <br/> 
                            and on my Free Time .  I Like To create mini project Code and learn someting new for up my skill.

                            <br/> 
                            I think . I less Experience but I Ready for learn new thing.
                            </p>
                        </div>

                      
                        <ul className='contact-info'>
                            <li>
                              <span>Email : </span>
                              ummarincontact@gmail.com
                            </li>

                            <li>
                              <span>Place : </span>
                              Nakhon Ratchasima , Thailand - 30190
                            </li>

                            <li>
                              <span>Tel : </span>
                              0923910880
                            </li>

                        </ul>


                        <a className="btn-download-cv" href={DownloadResume} target="_blank" download>
                            Resume
                        </a>
                       
                    
                    </div>
                </div>

        </div>
       
    </section>
  )
}
