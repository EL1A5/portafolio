import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>ELIAS PROVINCIA</a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#contact">Contactame</a></li>
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/elias-roy-903434200/"><BsLinkedin/></a>
        <a href="https://github.com/EL1A5?tab=repositories"><BsGithub/></a>
        <a href="https://www.facebook.com/RoyElias0/"><FaFacebook/></a>
        <a href="https://www.instagram.com/_elias_roy_/?hl=es"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Elias Provincia. Todos los Derechos Reservados</small>
      </div>
    </footer>
  )
}

export default footer