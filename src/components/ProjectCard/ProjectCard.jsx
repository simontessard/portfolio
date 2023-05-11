import './projectcard.css'

import ContactButton from '../ContactButton/ContactButton'

function ProjectCard({ title, date, image }) {
  return (
    <div className="project">
      <div className="project-illustration">
        <img className="project-image" src={image} alt="" />
      </div>
      <div className="project-heading">
        <h4>{title}</h4>
        <ContactButton
          text="↗ VOIR LE PROJET"
          link="/portfolio-2023/project/"
          title={title.toLowerCase()}
        />
      </div>
      <p>{date}</p>
    </div>
  )
}

export default ProjectCard
