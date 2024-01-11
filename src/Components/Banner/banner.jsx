import React, { useState } from 'react'
import './banner.css'
import { Link } from 'react-scroll'
import { Link as Hyperlink } from 'react-router-dom'
import video from '../../assets/video/bg_main.mp4'
import codeImage from '../../assets/image/code-snappet.png'
import TypeIt from "typeit-react";
import 'boxicons';

export default function banner() {

  return (
    <section className='banner' id='banner'>
      <video autoPlay muted loop className='banner-video'>
        <source src={video} type="video/mp4" />
      </video>

      <div className="banner-contents" xyz="fade small stagger ease-out-back duration-30">

        <div className="banner-main-contents xyz-nested">
          <h1>Hi There ,</h1>
          <h2>I’m Ummarin <span>Kasampong</span></h2>
          {/* 
           <input type="text" placeholder='......' className='display-text' id='display-text'  disabled/> */}
          <div className="display-text">
            <TypeIt options={{

              speed: 100,
              waitUntilVisible: true,
              loop: true,
            }}
              getBeforeInit={(instance) => {

                instance.type('I Am Beginner <span class="B">Frontend Developer</span> ').pause(750).delete().type("And").pause(500).delete().type('I Am Beginner <span class="B">Backend Developer</span>');

                // Remember to return it!
                return instance;
              }}
            />
          </div>

          <div className="banner-content-footer">
            <Link smooth spy to="about" className="btn-see-more">
              About Me
              <div className="arrow">
                <box-icon size='sm' color='#fff' type='solid' name='down-arrow-circle'></box-icon>
              </div>

            </Link>


            <div className="banner-contact">
              <Hyperlink className="contact-icon" to='https://www.linkedin.com/in/ummarin-kasampong-322868258/' target='_blank'>
                <box-icon animation='tada-hover' size='md' color='#fff' type='logo' name='linkedin-square'></box-icon>
              </Hyperlink>

              <Hyperlink className="contact-icon" to='https://github.com/UmmarinKasampong' target='_blank'>
                <box-icon animation='tada-hover' size='md' color='#fff' name='github' type='logo' ></box-icon>
              </Hyperlink>

            </div>
          </div>


        </div>


        <img src={codeImage} alt="html code" className="code-snippet xyz-nested" />

      </div>


    </section>
  )
}
