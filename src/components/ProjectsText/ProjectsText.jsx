import './projects-text.css'

import LinkButton from '../LinkButton/LinkButton'

function ProjectsText({ text, darkmode, textButton, link }) {
  return (
    <div className={`projects-text ${darkmode ? 'darkmode' : ''}`}>
      <p>{text}</p>
      <LinkButton text={textButton} link={link} title="" />
    </div>
  )
}

export default ProjectsText
