import { useState } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Education from './section/Education'
import Contact from './section/Contact'
import Footer from './section/Footer'

function App() {
  return (
    <div className='overflow-hidden '>
      <Navbar />
      <Hero id="Home" />
      <div className='container mx-auto max-w-7xl'>
        <About id="About" />
        <Projects id="Project" />
        <Education id="Work" />
        <Contact id="Contact" />
      </div>
      <Footer />

    </div>
  )
}

export default App
