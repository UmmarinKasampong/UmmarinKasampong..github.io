import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/Footer'
import Work_all from '../../Components/Work_All/work_all'
import { XyzTransition } from "@animxyz/react";
import './work_page.css'
export default function work_page() {
  return (
    <XyzTransition appear duration="auto">
      <main>
        <Navbar newclass='nav-another-page' />
        <Work_all />
        <Footer newclass='footer-another-page' />
      </main>
    </XyzTransition>

  )
}
