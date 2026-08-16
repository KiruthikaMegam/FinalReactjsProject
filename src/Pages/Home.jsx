import React from 'react'
import './Home.css'
import Profile from '../assets/Profile.jpeg'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='homePage'>
      <div className='leftSide'>
        <h2>Kiruthika</h2>
        <h3>Web Developer</h3>
        <p>I turn ideas into digital experiences. As a Web Developer, I combine creativity 
        and technology to build responsive, interactive, and meaningful websites that provide a smooth user experience.</p>
        <div className='homeButtons'>
          <NavLink to='/Projects' className='projectBtn'>Projects</NavLink>
          <NavLink to='/Contact' className='contactBtn'>Contact</NavLink>
        </div>
       </div>
       <div className='rightSide'>
        <img src={Profile} alt="" />
       </div>
    </div>
  )
}
