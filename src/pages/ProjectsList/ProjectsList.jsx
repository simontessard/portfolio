import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer'
import BigTitle from '../../components/BigTitle/BigTitle'

function ProjectsList() {
  return (
    <div className="projects-list-container">
      <div className="background-line">
        <BigTitle first="MES" second="PROJETS" projectsList={true} />
      </div>
      <ProjectsContainer darkmode={true} className="test" />
    </div>
  )
}

export default ProjectsList
