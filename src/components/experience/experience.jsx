import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function experience() {
  return (
    <section  className='seccion experience' id='experience'>
    
      <h2>Mis Conocimientos</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Front-End</h3>
          <div className="experience__content">

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermedio</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermedio</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermedio</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>ReactJs</h4>
            <small className='text-light'>Basico</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Angular</h4>
            <small className='text-light'>Basico</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Thymeleaf </h4>
            <small className='text-light'>Intermedio</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Git/GitHub </h4>
            <small className='text-light'>Intermedio</small>
            </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
           <h3>Desarrollo Back-End</h3>
            <div className="experience__content">

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java Spring</h4>
              <small className='text-light'>Intermedio</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C#</h4>
              <small className='text-light'>Basico</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Basico</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JPA</h4>
              <small className='text-light'>Intermedio</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySql</h4>
              <small className='text-light'>Intermedio</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>SqlServer</h4>
              <small className='text-light'>Intermedio</small>
              </div>
              </article>

            </div>
        </div>
      </div>
    </section>
  )
}

export default experience