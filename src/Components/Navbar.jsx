import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Menu from '../assets/menu.png'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='navbar'>
      <button
        className='menuButton'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src={Menu} alt="menu" />
      </button>

      <div className={`navLinks ${menuOpen ? 'navLinksOpen' : ''}`}>

        <NavLink
          to='/'
          className={({ isActive }) => isActive ? "active" : "inactive"}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to='/About'
          className={({ isActive }) => isActive ? "active" : "inactive"}
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>

        <NavLink
          to='/Skills'
          className={({ isActive }) => isActive ? "active" : "inactive"}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </NavLink>

        <NavLink
          to='/Projects'
          className={({ isActive }) => isActive ? "active" : "inactive"}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </NavLink>

        <NavLink
          to='/Contact'
          className={({ isActive }) => isActive ? "active" : "inactive"}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>

      </div>

    </div>
  )
}