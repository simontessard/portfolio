import ProjectDetails from '../../components/ProjectDetails/ProjectDetails'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { MouseScrollUp } from '../../components/MouseScroll/MouseScroll'
import { PageTransition } from '../../components/utils/PageTransition/PageTransition'

import { projects } from '../../data/projects'

export default function Project() {
  const { name } = useParams()
  const project = projects.find((p) => p.url === name)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ProjectDetails
        name={project.name}
        description={project.description}
        mainIllustration={project.mainIllustration}
        illustration1={project.illustration2}
        illustration2={project.illustration3}
        illustration3={project.illustration4}
        illustration4={project.illustration5}
        categorie={project.categorie}
        date={project.date}
        link={project.github}
        explication1={project.explication1}
        explication2={project.explication2}
        explication3={project.explication3}
      />
      <MouseScrollUp />
      <PageTransition />
    </>
  )
}
