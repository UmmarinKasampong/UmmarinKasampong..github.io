import { XyzTransition } from "@animxyz/react";
import Navbar from './Components/Navbar/navbar'
import Banner from './Components/Banner/banner'
import About from './Components/About/about'
import Skill from './Components/Skill/skill'
import MyEdu from './Components/Education/myeducation'
import Project from './Components/Project/project'
import Work_experience from './Components/Work_Experience/work_experience'
import Footer from './Components/Footer/Footer'
import './App.css'
import "@animxyz/core";

function App() {


  return (
    <XyzTransition appear duration="auto">
      <main className='main-page' id='main_page'>
        <Navbar />
        <Banner />
        <About />
        <Skill />
        <MyEdu />
        <Project />
        <Work_experience />
        <Footer />
      </main>
    </XyzTransition>
  )
}

export default App
