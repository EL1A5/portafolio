import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/eliasprovincia/" className='_blank'><BsLinkedin/></a>
        <a href="https://github.com/eliasroy" className='_blank'><BsGithub/></a>
        <a href="https://www.facebook.com/EliasRoyPro" className='_blank'><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials