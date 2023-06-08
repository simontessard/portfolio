import { NavLink } from 'react-router-dom'
import { Reveal } from '../utils/Reveal/Reveal'

function DownloadButton({ text, link }) {
  return (
    <Reveal>
      <NavLink to={`${link}`} download="CV_TESSARD-Simon" target="_blank" className="navlink black">
        <button className="contact-button">{text}</button>
      </NavLink>
    </Reveal>
  )
}

export default DownloadButton
