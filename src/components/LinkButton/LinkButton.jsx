import './linkbutton.css'

import { NavLink } from 'react-router-dom'

function LinkButton({ text, link }) {
  return (
    <NavLink to={`${link}`} className="navlink black">
      <button className="contact-button">{text}</button>
    </NavLink>
  )
}

export default LinkButton
