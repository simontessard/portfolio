import './projectsoverview.css'

import Heading from '../Heading/Heading'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'
import ProjectsText from '../ProjectsText/ProjectsText'

function ProjectsOverview() {
  return (
    <div className="projects">
      <Heading beforeText="" italicText="PRO" afterText="JETS" margin={true} />
      <ProjectsText />
      <ProjectsContainer />
    </div>
  )
}

export default ProjectsOverview
