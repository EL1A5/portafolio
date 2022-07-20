import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/elias-roy-903434200/" className='_blank'><BsLinkedin/></a>
        <a href="https://github.com/EL1A5" className='_blank'><BsGithub/></a>
        <a href="https://www.facebook.com/EliasRoyPro" className='_blank'><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials