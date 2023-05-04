import './projectscontainer.css'

import ProjectCard from '../ProjectCard/ProjectCard'

import projectKasa from '../../assets/images/project-1/project-1-card.png'
import projectArgentBank from '../../assets/images/project-2/project-2-card.png'
import projectLesPetitsPlats from '../../assets/images/project-3/project-3-card.png'
import projectSportsee from '../../assets/images/project-4/project-4-card.png'

export default function ProjectsContainer({ darkmode }) {
  return (
    <div className={`container-projects ${darkmode ? 'darkmode' : ''}`}>
      <div className="column">
        <ProjectCard title="Argent-Bank" date="2022" image={projectArgentBank} />
        <ProjectCard title="SportSee" date="2023" image={projectSportsee} />
      </div>
      <div className="column reverse">
        <ProjectCard title="Kasa" date="2023" image={projectKasa} />
        <ProjectCard title="Les Petits Plats" date="2023" image={projectLesPetitsPlats} />
      </div>
    </div>
  )
}
