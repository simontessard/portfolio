import './projectcard.css'

import LinkButton from '../LinkButton/LinkButton'
import { NavLink } from 'react-router-dom'
import { Reveal } from '../Reveal/Reveal'

function ProjectCard({ title, date, image, url }) {
  return (
    <div className="project">
      <NavLink to={`/portfolio/project/${url}`}>
        <Reveal>
          <div className="project-illustration">
            <img className="project-image" src={image} alt="" />
          </div>
        </Reveal>
      </NavLink>
      <div className="project-heading">
        <Reveal>
          <h4>{title}</h4>
        </Reveal>
        <LinkButton text="↗ VOIR LE PROJET" link={`/portfolio/project/${url}`} />
      </div>
      <Reveal>
        <p>{date}</p>
      </Reveal>
    </div>
  )
}

export default ProjectCard
