import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer'
import BigTitle from '../../components/BigTitle/BigTitle'
import ProjectsText from '../../components/ProjectsText/ProjectsText'
import { MouseScrollDown, MouseScrollUp } from '../../components/MouseScroll/MouseScroll'
import { PageTransition } from '../../components/utils/PageTransition/PageTransition'
import { useEffect } from 'react'

function ProjectsList() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="projects-list-container">
      <div className="background-line">
        <BigTitle first="MES" second="PROJETS" projectsList={true} />
        <MouseScrollDown />
      </div>
      <ProjectsText
        darkmode={true}
        text="L'ensemble de ces projets web a été réalisé durant mon parcours d'apprentissage, en majorité
        durant mon bachelor Openclassrooms mais aussi durant mon BTS. Certains sont aussi des
        projets personnels réalisés de façon collaborative comme par exemple ce portfolio."
        textButton="↗ VOIR MES PROJETS SUR GITHUB"
        link="https://github.com/simontessard"
      />
      <ProjectsContainer darkmode={true} />
      <div className="mouse-scrollup dark-background">
        <MouseScrollUp darkmode={true} />
      </div>
      <PageTransition />
    </div>
  )
}

export default ProjectsList
