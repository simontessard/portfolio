import './projects-text.css'

import LinkButton from '../LinkButton/LinkButton'
import { Reveal } from '../utils/Reveal/Reveal'

function ProjectsText({ text, darkmode, textButton, link }) {
  return (
    <div className={`projects-text ${darkmode ? 'darkmode' : ''}`}>
      <Reveal>
        <p>{text}</p>
      </Reveal>
      <LinkButton text={textButton} link={link} title="" darkmode={darkmode} />
    </div>
  )
}

export default ProjectsText
