import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/Footer'
import Project_all from '../../Components/Project_overall/project_all'
import './project_page.css'
import { XyzTransition } from "@animxyz/react";
export default function project_page() {
  return (
    <XyzTransition appear duration="auto">
      <main>
        <Navbar newclass='nav-another-page' />
        <Project_all />
        <Footer newclass='footer-another-page' />
      </main>
    </XyzTransition>
  )
}
