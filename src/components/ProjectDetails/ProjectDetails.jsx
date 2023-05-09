import './projectdetails.css'

import MouseScroll from '../MouseScroll/MouseScroll'
import BigTitle from '../BigTitle/BigTitle'
import GithubLogo from '../GithubLogo/GithubLogo'

export default function ProjectDetails({
  name,
  description,
  illustration,
  illustration2,
  illustration3,
  illustration4,
  categorie,
  date,
  link,
  explication1,
  explication2,
}) {
  let mainIllustration = require('../../assets/images/' + illustration)
  let firstIllustration = require('../../assets/images/' + illustration2)
  let secondIllustration = require('../../assets/images/' + illustration3)
  let thirdIllustration = require('../../assets/images/' + illustration4)
  return (
    <>
      <div className="background-line main-project">
        <div className="column project-details-title">
          <BigTitle first="PROJET:" second={name.toUpperCase()} margin={true} />
          <GithubLogo link={link} />
          <MouseScroll />
        </div>
        <div className="project-picture-container">
          <img src={mainIllustration} alt="" className="project-picture" />
        </div>
      </div>
      <div className="project-information">
        <div className="project-first-row">
          <div className="project-categorie">
            <p>CATÉGORIE</p>
            <p>{categorie}</p>
            <p>{date}</p>
          </div>
          <div className="project-description">{description}</div>
        </div>
        <img src={firstIllustration} alt="" className="project-first-picture" />
        <div className="project-second-row">
          <img src={secondIllustration} alt="" className="project-details-illustration" />
          <div className="project-explication">{explication1}</div>
        </div>
        <div className="project-second-row">
          <div className="project-explication">{explication2}</div>
          <img src={thirdIllustration} alt="" className="project-details-illustration" />
        </div>
      </div>
    </>
  )
}
