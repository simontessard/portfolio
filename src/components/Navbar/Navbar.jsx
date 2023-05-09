import './navbar.css'

import { IoMenu } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="header-container">
        <NavLink to="/portfolio-2023" className="navlink header-logo bounce-in-top link-bar">
          S
        </NavLink>
        <ul className="nav-list fadeInRight">
          <li>
            <NavLink to="/portfolio-2023/projects" className="navlink link-bar ">
              PROJETS
            </NavLink>
          </li>
          <li>CONTACT</li>
        </ul>
        {!open ? (
          <IoMenu className="nav-hamburger" onClick={() => setOpen(!open)} />
        ) : (
          <RxCross2 className="nav-hamburger" onClick={() => setOpen(!open)} />
        )}
      </div>
      {open && (
        <div className="vertical-navbar">
          <p>PROJETS</p>
          <p>CONTACT</p>
        </div>
      )}
    </header>
  )
}

export default Navbar
