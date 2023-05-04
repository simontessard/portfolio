import './projectsoverview.css'

import Heading from '../Heading/Heading'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'

function ProjectsOverview() {
  return (
    <div className="projects">
      <Heading beforeText="" italicText="PRO" afterText="JETS" margin={true} />
      <ProjectsContainer />
    </div>
  )
}

export default ProjectsOverview
