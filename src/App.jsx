import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about' 
import Experience from './components/experience/experience'

import Portafolio from './components/portafolio/portafolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
    <Nav/>
    <Header />
   
    <About/>
    <Experience/>
    <Portafolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App