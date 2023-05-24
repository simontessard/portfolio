import './linkbutton.css'

import { NavLink } from 'react-router-dom'
import { Reveal } from '../utils/Reveal/Reveal'

function LinkButton({ text, link, darkmode }) {
  return (
    <Reveal>
      <NavLink to={`${link}`} className="navlink black">
        <button className={`contact-button ${darkmode ? 'link-button-dark' : ''}`}>{text}</button>
      </NavLink>
    </Reveal>
  )
}

export default LinkButton
