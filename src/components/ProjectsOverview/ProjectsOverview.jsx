import './projectsoverview.css'

import Heading from '../Heading/Heading'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'
import ProjectsText from '../ProjectsText/ProjectsText'

function ProjectsOverview() {
  return (
    <div className="projects">
      <Heading beforeText="" italicText="PRO" afterText="JETS" margin={true} />
      <ProjectsText
        text="L'ensemble de ces projets web a été réalisé durant mon parcours d'apprentissage, en majorité
        durant mon bachelor Openclassrooms mais aussi durant mon BTS. Certains sont aussi des
        projets personnels réalisés de façon collaborative comme par exemple ce portfolio."
        textButton="↗ VOIR TOUS MES PROJETS"
        link="/portfolio/projects"
      />
      <ProjectsContainer />
    </div>
  )
}

export default ProjectsOverview
