import React from 'react'
import './portafolio.css'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import IMG1 from '../../assets/slide01.jpg'
import IMG2 from '../../assets/slide02.jpg'
import IMG3 from '../../assets/slide03.jpg'
import IMG4 from '../../assets/slide04.jpg'
import IMG5 from '../../assets/slide10.jpg'
import IMG7 from '../../assets/slide11.jpg'
import IMG8 from '../../assets/slide12.jpg'
import IMG9 from '../../assets/slide13.jpg'
import IMG10 from '../../assets/slide14.jpg'
import IMG11 from '../../assets/slide15.jpg'
import IMG12 from '../../assets/slide20.jpg'
import IMG13 from '../../assets/slide21.jpg'
import IMG14 from '../../assets/slide22.jpg'
import IMG15 from '../../assets/slide23.jpg'
import IMG16 from '../../assets/slide30.jpg'
import IMG17 from '../../assets/slide31.jpg'
import IMG18 from '../../assets/slide32.jpg'
import IMG19 from '../../assets/slide33.jpg'
import IMG20 from '../../assets/slide40.jpg'
import IMG21 from '../../assets/slide41.jpg'
import IMG22 from '../../assets/slide42.jpg'
import IMG23 from '../../assets/slide43.jpg'




import {BsPatchCheckFill} from 'react-icons/bs'
const data=[ 
  {
    id: 1,
    image:[IMG1,IMG2,IMG3,IMG4],
    title:'Mantenimiento Docentes',
    tech:['Spring','Angular','Mysql','SweetAlert2'],
    github_back:'https://github.com/EL1A5/crud_docente_back.git',
    github_front:'hhttps://github.com/EL1A5/crud_docente_front.git',
    demo:'https://dawii-front-elias-provincia.herokuapp.com/crudDocente'
  },
   {
    id: 2,
    image:[IMG5,IMG7,IMG8,IMG9,IMG10,IMG11],
    title:'Sistema de Incidencias',
    tech:['ApiRest','Spring','MySql','Javascript','Thymeleaf','GitHub'],
    github_back:'https://github.com/EL1A5/Proyecto_DSW2.git',
    github_front:'https://github.com/EL1A5/ProyectoFront_DSW2.git',
    demo:''
  },
  {
    id: 3,
    image:[IMG12,IMG13,IMG14,IMG15],
    title:'Gestion de Departamentos',
    tech:['Spring','Spring Security','Thymeleaf','MySql','Scrum','GitHub'],
    github_back:'',
    github_front:'https://github.com/EL1A5/Proyecto_PI.git',
    demo:'https://gestion-departamentos.herokuapp.com/login'
  },
  {
    id: 4,
    image:[IMG19,IMG17,IMG18,IMG16],
    title:'Gestion de Inventario ',
    tech:['Spring','MySql','Angular','TypeScript','GitHub','Kommunicate','SweetAlert2','JPA'],
    github_back:'https://github.com/EL1A5/proyecto_dawii_back',
    github_front:'https://github.com/EL1A5/proyecto_dawii_front',
    demo:''
  },
  {
    id: 5,
    image:[IMG20,IMG21,IMG22,IMG23],
    title:'Formulario de Contacto PHP',
    tech:['PHP','Javascript','html','css','xampp'],
    github_back:'',
    github_front:'https://github.com/EL1A5/Formulario-Contacto-php',
    demo:''
  }


]


function portafolio() {
  return (
    <section  className='portafolio seccion' id='portafolio'>
    <h5>Mis Proyectos Recientes</h5>
    <h2>Portafolio</h2>

    <div className="container portafolio__container">
      

      {
        data.map(({id,image,title,tech,github_back,github_front,demo})=>{
          return(
            <article key={id} className="portafolio__item">
                < Swiper  className="portafolio__item-image"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                >
                  {
                    image.map(index=>{
                      return(
                        <SwiperSlide  key={index} className='images'>
                          <img  src={index} alt={title} />
                        </SwiperSlide>
                    )
                    })
                  }
                </Swiper>
                <h3>{title}</h3>

                <div className="content_tech">


                   {
                    tech.map(item=>{
                      return(
                        <div key={item}  className="content_tech-item">
                          <BsPatchCheckFill className='portafolio__details-icon'/>
                          <small className='text-light'>{item}</small>
                        </div>
                      )
                    })
                   }

                </div>


               {(()=>{
                if (github_back=='' &&  demo=='' ) {
                  return(
                    <div className='portafolio__item-cta'>
                       
                          
      
                        <a href={github_front} className='btn' target='_blank'>GitHub </a>
                      
                         
                    </div>
                  )
                }else if (demo=='') {
                 return(
                  <div className='portafolio__item-cta'>
                       <a href={github_back} className='btn' target='_blank'>GitHub Back</a>
                    

                      <a href={github_front} className='btn' target='_blank'>GitHub Front</a>
                
                   
                    </div>
                 )
                }else if (github_back=='' ) {
                  return (
                    <div className='portafolio__item-cta'>
                    
                      
  
                    <a href={github_front} className='btn' target='_blank'>GitHub Front</a>
                  
                     <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                     </div>
                  )
                }else{
                  return(
                    <div className='portafolio__item-cta'>
                    <a href={github_back} className='btn' target='_blank'>GitHub Back</a>
                      
  
                    <a href={github_front} className='btn' target='_blank'>GitHub Front</a>
                  
                     <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                     </div>
                  )           
                }
               })()}
              </article>
          )
        })
      }
     
    
    


     
    </div>
    </section>
  )
}

export default portafolio