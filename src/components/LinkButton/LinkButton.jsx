import './linkbutton.css'

import { NavLink } from 'react-router-dom'
import { Reveal } from '../Reveal/Reveal'

function LinkButton({ text, link }) {
  return (
    <Reveal>
      <NavLink to={`${link}`} className="navlink black">
        <button className="contact-button">{text}</button>
      </NavLink>
    </Reveal>
  )
}

export default LinkButton
