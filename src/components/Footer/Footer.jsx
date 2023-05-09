import './footer.css'

import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="column">
          <h3> ↗ simon.tessard@gmail.com </h3>
          <h3> ↗ 07 83 26 36 84 </h3>
        </div>
        <div className="column">
          <NavLink target={'_blank'} to="https://github.com/simontessard">
            <h5> ↗ Github </h5>
          </NavLink>
          <NavLink target={'_blank'} to="https://www.linkedin.com/in/simon-tessard-138733198/">
            <h5> ↗ LinkedIn </h5>
          </NavLink>
        </div>
      </div>
      <p> © Developed by Simon TESSARD, Designed by Maxime Le bec </p>
    </footer>
  )
}

export default Footer
