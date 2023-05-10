import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer'
import BigTitle from '../../components/BigTitle/BigTitle'
import { MouseScroll, MouseScrollUp } from '../../components/MouseScroll/MouseScroll'

function ProjectsList() {
  return (
    <div className="projects-list-container">
      <div className="background-line">
        <BigTitle first="MES" second="PROJETS" projectsList={true} />
        <MouseScroll />
      </div>
      <ProjectsContainer darkmode={true} className="test" />
      <div className="mouse-scrollup dark-background">
        <MouseScrollUp darkmode={true} />
      </div>
    </div>
  )
}

export default ProjectsList
