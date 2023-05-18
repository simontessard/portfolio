import './projectcard.css'

import LinkButton from '../LinkButton/LinkButton'
import { NavLink } from 'react-router-dom'

function ProjectCard({ title, date, image, url }) {
  return (
    <div className="project">
      <NavLink to={`/portfolio/project/${url}`}>
        <div className="project-illustration">
          <img className="project-image" src={image} alt="" />
        </div>
      </NavLink>
      <div className="project-heading">
        <h4>{title}</h4>
        <LinkButton text="↗ VOIR LE PROJET" link={`/portfolio/project/${url}`} />
      </div>
      <p>{date}</p>
    </div>
  )
}

export default ProjectCard
