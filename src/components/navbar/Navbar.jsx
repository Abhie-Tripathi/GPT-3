import React from 'react'
import "./navbar.css"
import {RiMenu3Line,RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
   <div className='gpt3__navbar'>
    <div className='gpt3__links'>
      <div className='gpt3__navbar__links__logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='gpt3__navbar__links_container'>
        <p><a href='#home'>Home</a></p>
        <p><a href='#Whatgpt3'>What is GPT-3</a></p>
        <p><a href='#possibilty'>Open AI</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
      </div>
    </div>
   </div>
  )
}

export default Navbar