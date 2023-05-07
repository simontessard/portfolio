import './footer.css'

import { NavLink } from 'react-router-dom'

function BigElement({ text }) {
  return <h3>{text}</h3>
}

function SmallElement({ text }) {
  return <h5>{text}</h5>
}

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="column">
          <BigElement text="↗ simon.tessard@gmail.com" />
          <BigElement text="↗ 07 83 26 36 84" />
        </div>
        <div className="column">
          <NavLink to="https://github.com/simontessard">
            <SmallElement text="↗ Github" />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/simon-tessard-138733198/">
            <SmallElement text="↗ LinkedIn" />
          </NavLink>
          <SmallElement text="Mentions légales" />
        </div>
      </div>
      <p> © Developed by Simon TESSARD, Designed by Maxime Le bec </p>
    </footer>
  )
}

export default Footer
