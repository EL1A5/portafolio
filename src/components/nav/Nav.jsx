import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import{useState} from 'react'




function Nav() {
  const [activeNav, setActiveNav]=useState('#')


  return (
    <nav>
      <a data-url='inicio'  href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active' : ''} ><AiOutlineHome/></a>

      <a data-url='about'  href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active' : ''}><AiOutlineUser/></a>

      <a data-url='experience' href="#experience"onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active' : ''}><AiOutlineBook/></a>

      <a data-url='portafolio' href="#portafolio"onClick={()=>setActiveNav('#portafolio')} className={activeNav==='#portafolio'?'active' : ''}><BsBriefcase/></a>

      <a data-url='contact' href="#contact"onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active' : ''}><AiOutlineMessage/></a>

    </nav>
  )
}

export default Nav