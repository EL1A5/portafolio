import React from 'react'
import  './about.css'
import ME from '../../assets/elias.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import{IoIosSchool} from 'react-icons/io'
import{BsPatchCheckFill} from 'react-icons/bs'
import{GiSwordsPower} from 'react-icons/gi'
function about() {
  return (
    <section className='seccion'  id='about' >
      <h2>Sobre mi</h2>
      
      <div className="container about__container">
      
        <div className="about__me">
           <div className="about__me-image">
             <img src={ME} alt="about image" />
           </div>
        </div>
      
        <div className="about__content">
            <div className="about__cards">
            <article className='about__card'>
                <IoIosSchool className='about__icon'/>
                <h5>Educacion</h5>
                <small>Egresado en CIBERTEC</small>
              </article>

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experiencia</h5>
                <small>Trainee</small>
              </article> 

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Proyectos</h5>
                <small>+10 completos</small>
              </article> 

              
            </div>
            <div className="habilities">
                  <GiSwordsPower className='about__icon'/>
                  <h3>Habilidades</h3>
                  <div className="habilities-items">
                    <article className='habilities__details'>
                      <BsPatchCheckFill className='itemshabilities-icon'/>
                      <div>
                          <small>Trabajo en Equipo</small>
                        
                      </div>
                    </article>
                    <article className='habilities__details'>
                      <BsPatchCheckFill className='itemshabilities-icon'/>
                      <div>
                          <small>Proactivo</small>
                        
                      </div>
                    </article>
                    <article className='habilities__details'>
                      <BsPatchCheckFill className='itemshabilities-icon'/>
                      <div>
                        <small>Organizado</small>
                      </div>
                    </article>
                    <article className='habilities__details'>
                      <BsPatchCheckFill className='itemshabilities-icon'/>
                      <div>
                        <small>Creativo</small>
                      </div>
                    </article>
                    <article className='habilities__details'>
                      <BsPatchCheckFill className='itemshabilities-icon'/>
                      <div>
                        <small>Honestidad</small>
                      </div>
                    </article>
                    <article className='habilities__details'>
                      <BsPatchCheckFill className='itemshabilities-icon'/>
                      <div>
                        <small>Comunicacion</small>
                      </div>
                    </article>
                  </div>
              </div>
            <p>
            Soy estudiante egresado de la carrera de computacion en Cibertec  con proyectos realizados exitosamente. Extrovertido con atencion al detalle y competente desarrollando proyectos.
            </p>

            <a href="#contact" className='btn btn-primary'>Contactame</a>

        </div>
      
        
      </div>
    </section>
  )
}

export default about
