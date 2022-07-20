import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  {useRef  as UseRef} from 'react';
import emailjs from 'emailjs-com';

const contact = () => {

  const form=UseRef("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5goutcp', 'template_61ofvb8',
    form.current,'NTaAWLV2fZ1UbAjgT')
    e.target.reset()
  };


  return (
    <section  className='seccion' id='contact'>
      
      <h2>Contactame</h2>
      <div className="container container_contact">
          <div className="redes">
            <div className="email">
              <AiOutlineMail  className='contact-icon'/>
              <h4>Email</h4>
              <small className='text-light'>provinciaelias@gmail.com</small>
              <a href="mailto:provinciaelias@gmail.com" target='_blank'>Enviar mensaje</a>
            </div>
            <div className="email">
              <BsMessenger className='contact-icon'/>
              <h3>Messenger</h3>
              <small className='text-light'>Elias Roy</small>
              <a href="https://m.me/RoyElias0" target='_blank'>Enviar mensaje</a>
            </div>
            <div className="email">
              <BsWhatsapp className='contact-icon'/>
              <h3>WhatsApp</h3>
              <small className='text-light'>+51 984 407 999</small>
              <a href="https://api.whatsapp.com/send?phone=51984407999" target='_blank'>Enviar mensaje</a>
            </div>
          </div>

          
            <form ref={form} onSubmit={sendEmail} >
              <input type="text" placeholder='Ingrese su Nombre' name='name' required/> 
              <input type="email" name='email' placeholder='Ingrese su Email' required />
              <textarea name="message" rows='6' placeholder='Ingrese su mensaje' required></textarea>

              <button type="submit" className='btn btn-primary' value="Send" target='_blank'>Enviar Mensaje</button>
            </form>
          

      </div>
    </section>
  )
}

export default contact