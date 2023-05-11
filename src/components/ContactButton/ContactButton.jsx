import './contactbutton.css'

import { NavLink } from 'react-router-dom'

function ContactButton({ text, link, title }) {
  return (
    <NavLink to={`${link}${title}`} className="navlink black">
      <button className="contact-button">{text}</button>
    </NavLink>
  )
}

export default ContactButton
