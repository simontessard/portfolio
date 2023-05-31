import './projectsoverview.css'

import Heading from '../Heading/Heading'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'
import ProjectsText from '../ProjectsText/ProjectsText'

function ProjectsOverview() {
  return (
    <div className="projects">
      <Heading beforeText="" italicText="PRO" afterText="JETS" margin={true} />
      <ProjectsText
        text="La très grande majorité de mes projets a été réalisé cette année durant mon Bachelor OpenClassRooms : « Développeur Front-End - Javascript React ». 
        Certains ont aussi été développé pendant mon BTS SIO (Services Informatiques Aux Organisations) et d'autres sont des projets personnels comme ce portfolio par exemple."
        textButton="↗ VOIR TOUS MES PROJETS"
        link="/portfolio/projects"
      />
      <ProjectsContainer />
    </div>
  )
}

export default ProjectsOverview
