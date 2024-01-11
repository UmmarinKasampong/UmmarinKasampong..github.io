import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import { Link as Wrap } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './navbar.css'
export default function navbar({ newclass }) {

  const [NavbarStatus, setNavbar] = useState(false);
  const [burgerStatus, setBurger] = useState(false);


  const [stickyStyle , setSticStyle] = useState('nav-sticky')

  const menuSidebar = document.querySelectorAll('.side_link')
  const overy = document.getElementById('main_page')
  burgerStatus ? disableBodyScroll(document) : enableBodyScroll(document);

  // const CheckMenuActive = (data) => {

  //   data.forEach((active) => {

  //     if (active.parentElement) {
  //       console.log('add Class to parents')
  //       active.parentElement.classList.add('line-menu-active')
  //     } else {
  //       active.parentElement.classList.remove('line-menu-active')
  //     }
  //   })
  // }



  burgerStatus ?  overy.classList.add('overlay') : '';
  menuSidebar.forEach((btn)=> {
    btn.addEventListener('click' , ()=> {
      setBurger(false)
      
    })
  })
  window.addEventListener('scroll', () => {
    window.scrollY > 50 ? setNavbar(true) : setNavbar(false);

    // CheckMenuActive(menuActive)
  })

  window.onresize = (()=> {
    if(window.innerWidth >= 992){
        setBurger(false)
        
    }
  })



  return (
    <nav className={NavbarStatus ? ( newclass ? 'nav-sticky-another' : 'nav-sticky')  : newclass}>

      <div className="navbar" id='navbar'>
        <div className="nav-container">
          <div className="logo">
            <a>Beck</a>
          </div>

          <ul className="navmenu">
          

            <li ><Link activeClass="menu-active" smooth spy to="banner" data-text='Home' >Home</Link></li>
            <li ><Link activeClass="menu-active" smooth spy to="about" data-text='About' >About</Link></li>


            <li><Link activeClass="menu-active" smooth spy to="skills_show" data-text='Skills'>Skills</Link></li>
            <li><Link activeClass="menu-active" smooth spy to="educations_show" data-text='Education'>Education</Link></li>
            <li><Link activeClass="menu-active" smooth spy to="projects_show" data-text='Project'>Project</Link></li>
            <li><Link activeClass="menu-active" smooth spy to="works_show" data-text='Experience/Contact'>Experience/Contact</Link></li>

          </ul>


          <div className="burger-menu" onClick={() => setBurger(true)}>
            <box-icon size='md' name='menu' color={NavbarStatus ? '#495E57' : newclass ? '#495E57' : '#fff'} animation='tada-hover'></box-icon>
          </div>


          <div className="back-to-home">
            <Wrap to='/'> <box-icon name='arrow-back' size='md' border='circle' animation='fade-left-hover' color='#F99417'></box-icon></Wrap>
           
          </div>
        </div>

        <div className={burgerStatus ? 'nav-sidebar-open' : '' } id='nav_sidebar'>

          <div className="sidebar-header">
            <h1>Beck</h1>
            <a onClick={()=> setBurger(false)}>
              <box-icon size='md' name='x' color={NavbarStatus ? '#495E57' : newclass ? '#495E57' : '#fff'} animation='tada-hover'></box-icon>

            </a>
          </div>
          <ul>
            <li className='side_link' ><Link activeClass="menu-active" smooth spy to="banner" data-text='Home' >Home</Link></li>
            <li className='side_link'><Link activeClass="menu-active" smooth spy to="about" data-text='About' >About</Link></li>


            <li className='side_link'><Link activeClass="menu-active" smooth spy to="skills_show" data-text='Skills'>Skills</Link></li>
            <li className='side_link'><Link activeClass="menu-active" smooth spy to="educations_show" data-text='Education'>Education</Link></li>
            <li className='side_link'><Link activeClass="menu-active" smooth spy to="projects_show" data-text='Project'>Project</Link></li>
            <li className='side_link'><Link activeClass="menu-active" smooth spy to="works_show" data-text='Experience / Contact'>Experience / Contact</Link></li>
          </ul>

        </div>

      </div>

    </nav>
  )
}
