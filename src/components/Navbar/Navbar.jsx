import './navbar.css'

import { IoMenu } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { motion } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="header-container">
        <NavLink to="/portfolio" className="navlink header-logo bounce-in-top link-bar">
          S
        </NavLink>
        <ul className="nav-list fadeInRight">
          <li>
            <NavLink to="/portfolio/projects" className="navlink link-bar ">
              PROJETS
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio/about" className="navlink link-bar ">
              À PROPOS
            </NavLink>
          </li>
          <li>
            <NavLink to="mailto:simon.tessard@gmail.com" className="navlink link-bar ">
              CONTACT
            </NavLink>
          </li>
        </ul>
        {!open ? (
          <IoMenu className="nav-hamburger" onClick={() => setOpen(!open)} />
        ) : (
          <RxCross2 className="nav-hamburger" onClick={() => setOpen(!open)} />
        )}
      </div>
      {open && (
        <div className="vertical-navbar">
          <MobileNavLink name="ACCUEIL" link="/portfolio" setOpen={setOpen} open={open} />
          <MobileNavLink name="PROJETS" link="/portfolio/projects" setOpen={setOpen} open={open} />
          <MobileNavLink name="À PROPOS" link="/portfolio/about" setOpen={setOpen} open={open} />
          <MobileNavLink
            name="CONTACT"
            link="mailto:simon.tessard@gmail.com"
            setOpen={setOpen}
            open={open}
          />
        </div>
      )}
    </header>
  )
}

function MobileNavLink({ link, name, setOpen, open }) {
  return (
    <motion.Navlink
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      to={link}
      onClick={() => setOpen(!open)}
    >
      {name}
    </motion.Navlink>
  )
}

export default Navbar
