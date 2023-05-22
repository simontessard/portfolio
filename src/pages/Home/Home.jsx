import MainHeading from '../../components/MainHeading/MainHeading'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import ProjectsOverview from '../../components/ProjectsOverview/ProjectsOverview'
import { MouseScrollUp } from '../../components/MouseScroll/MouseScroll'

import { PageTransition } from '../../components/utils/PageTransition/PageTransition'

function Home() {
  return (
    <>
      <MainHeading />
      <About />
      <Skills />
      <ProjectsOverview />
      <div className="mouse-scrollup">
        <MouseScrollUp />
      </div>
      <PageTransition />
    </>
  )
}

export default Home
