import './projects-text.css'

import ContactButton from '../ContactButton/ContactButton'

function ProjectsText() {
  return (
    <div className="projects-text">
      <p>
        L'ensemble de ces projets web a été réalisé durant mon parcours d'apprentissage, en majorité
        durant mon bachelor Openclassrooms mais aussi durant mon BTS. Certains sont aussi des
        projets personnels réalisés de façon collaborative comme par exemple ce portfolio.
      </p>
      <ContactButton text="↗ VOIR TOUS MES PROJETS" />
    </div>
  )
}

export default ProjectsText
