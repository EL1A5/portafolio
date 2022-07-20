import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/elias.png'
import HeaderSocials from './HeaderSocials'


function header() {
  return (
    <header className='seccion' id='inicio'>
      <div className="container header__container">
        <h5>Hola, Yo soy</h5>
        <h1>Elias Provincia</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
        
          <img src={ME} alt="yo" />
        
        </div>

        <a href="#contact" className='scroll__down'>hacia abajo</a>

      </div>
    </header>
  )
}

export default header