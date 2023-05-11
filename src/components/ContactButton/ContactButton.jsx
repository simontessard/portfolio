import './contactbutton.css'

import { NavLink } from 'react-router-dom'

function ContactButton({ text, link }) {
  return (
    <NavLink to={`${link}`} className="navlink black">
      <button className="contact-button">{text}</button>
    </NavLink>
  )
}

export default ContactButton
