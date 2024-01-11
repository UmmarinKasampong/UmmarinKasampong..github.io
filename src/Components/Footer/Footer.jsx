import React from 'react'
import { Link } from 'react-scroll'
import { Link as HyperLink } from 'react-router-dom'
import './Footer.css'
export default function Footer({newclass}) {
  return (
    <section className={newclass ? 'footer-another-page' : 'Footer'}>

        <div className="footer-container">
            <div className="footer-top-contents">
                <div className="sumary-contents">
                    <h2>Beck's Portfolio</h2>
                    <p>Thank you for visiting my personal portfolio website.<br/> Connect with me over socials.</p>
                </div>


                <div className="quick-menu">
                    <h2>Quick Link</h2>
                    <ul>
           
                        <li><Link smooth spy to="banner">Home</Link></li>
                        <li><Link  smooth spy to="about">About</Link></li>
                        <li><Link smooth spy to="skills_show">Skills</Link></li>
                        <li><Link smooth spy to="educations_show">Education</Link></li>
                        <li><Link smooth spy to="projects_show">Project</Link></li>
                        <li><Link smooth spy to="works_show">Experience / Contact</Link></li>
                    </ul>
                  
                </div>

                <div className="contact-menu">
                    <h2>Contact Info</h2>
                    <ul className='contact-text'>
                        <li><span>Tel :</span> 092-3910880</li>
                        <li><span>Email :</span> ummarincontact@gmail.com</li>
                        <li><span>Place :</span> Nakhon Ratchasima , Thailand - 30190</li>
                    </ul>

                    <ul className="social-menu">
                        <li>
                            <HyperLink to='https://www.linkedin.com/in/ummarin-kasampong-322868258/' target='_blank'>
                                <box-icon name='linkedin-square' type='logo' ></box-icon>
                            </HyperLink>
                        </li>

                        <li>
                            <HyperLink to='https://github.com/UmmarinKasampong'  target='_blank'>
                                <box-icon name='github' type='logo' ></box-icon>
                            </HyperLink>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="footer-bottom-contents">
                <h2>Thank for <span>Watching</span> &#128640;</h2>
            </div>
        </div>
    </section>
  )
}
