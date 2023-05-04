import './contactbutton.css'

import { NavLink } from 'react-router-dom'

function ContactButton({ text, title }) {
  return (
    <NavLink to={`/project/${title}`} className="navlink black">
      <button className="contact-button">{text}</button>
    </NavLink>
  )
}

export default ContactButton
