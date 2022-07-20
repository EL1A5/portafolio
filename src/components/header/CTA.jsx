import React from 'react'
import CV from '../../assets/mi_cv.pdf'
function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Hablemos</a>
    </div>
  )
}

export default CTA