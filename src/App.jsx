import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Project'
import Experience from './components/Experience'
import Certification from './Certification'
import Resume from './Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-16 scroll-my-5">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certification/>
        <Resume/>
        <Contact />
        <Footer />

      </div>
    </>
  )
}

export default App