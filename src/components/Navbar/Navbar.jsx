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
          <DesktopNavLink name="PROJETS" link="/portfolio/projects" />
          <DesktopNavLink name="À PROPOS" link="/portfolio/about" />
          <DesktopNavLink name="CONTACT" link="mailto:simon.tessard@gmail.com" />
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

function DesktopNavLink({ link, name }) {
  return (
    <li>
      <NavLink to={link} className="navlink link-bar ">
        {name}
      </NavLink>
    </li>
  )
}

function MobileNavLink({ link, name, setOpen, open }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onClick={() => setOpen(!open)}
    >
      <NavLink to={link}>{name}</NavLink>
    </motion.div>
  )
}

export default Navbar
