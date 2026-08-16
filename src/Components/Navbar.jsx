import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to='/' className={({isActive}) => (isActive ? "active" : "inactive")}>Home</NavLink>
      <NavLink to='/About' className={({isActive}) => (isActive ? "active" : "inactive")}>About</NavLink>
      <NavLink to='/Skills' className={({isActive}) => (isActive ? "active" : "inactive")}>Skills</NavLink>
      <NavLink to='/Projects' className={({isActive}) => (isActive ? "active" : "inactive")}>Projects</NavLink>
      <NavLink to='/Contact' className={({isActive}) => (isActive ? "active" : "inactive")}>Contact</NavLink>
    </div>
  )
}
