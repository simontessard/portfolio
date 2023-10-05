import './projectdetails.css'

import { MouseScrollDown } from '../MouseScroll/MouseScroll'
import BigTitle from '../BigTitle/BigTitle'
import GithubLogo from '../GithubLogo/GithubLogo'

import { Reveal } from '../utils/Reveal/Reveal'

export default function ProjectDetails({
  name,
  description,
  mainIllustration,
  illustration1,
  illustration2,
  illustration3,
  illustration4,
  categorie,
  date,
  link,
  explication1,
  explication2,
  explication3,
  skills,
}) {
  let coverPicture = require('../../assets/images/' + mainIllustration)
  let firstIllustration = require('../../assets/images/' + illustration1)
  let secondIllustration = require('../../assets/images/' + illustration2)
  let thirdIllustration = require('../../assets/images/' + illustration3)
  let fourthIllustration = illustration4 ? require('../../assets/images/' + illustration4) : false
  return (
    <>
      <div className="background-line main-project">
        <div className="column project-details-title">
          <BigTitle first="PROJET:" second={name.toUpperCase()} margin={true} />
          <GithubLogo link={link} />
          <MouseScrollDown project={true} />
        </div>
        <div className="project-picture-container">
          <img src={coverPicture} alt="" className="project-picture" />
        </div>
      </div>
      <div className="project-information">
        <Reveal>
          <div className="project-first-row">
            <div className="project-categorie">
              <p>CATÉGORIE</p>
              <p>{categorie}</p>
              <p>{date}</p>
            </div>
            <div className="project-description">{description}</div>
          </div>
        </Reveal>
        <div className="project-skills">
          {skills.map((name, index) => (
            <Reveal key={index}>
              <p>- {name}</p>
            </Reveal>
          ))}
        </div>
        <img src={firstIllustration} alt="" className="project-first-picture" />
        <Reveal>
          <div className="project-second-row">
            <div className="project-explication">{explication1}</div>
            <img src={secondIllustration} alt="" className="project-details-illustration" />
          </div>
        </Reveal>
        <Reveal>
          <div className="project-second-row second-explication">
            <img src={thirdIllustration} alt="" className="project-details-illustration" />
            <div className="project-explication">{explication2}</div>
          </div>
        </Reveal>
        {fourthIllustration && (
          <Reveal>
            <div className="project-second-row">
              <div className="project-explication">{explication3}</div>
              <img src={fourthIllustration} alt="" className="project-details-illustration" />
            </div>
          </Reveal>
        )}
      </div>
    </>
  )
}
