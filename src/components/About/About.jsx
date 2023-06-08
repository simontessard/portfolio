import './about.css'

import LinkButton from '../LinkButton/LinkButton'
import DownloadButton from '../DownloadButton/DownloadButton'

import CV from '../../assets/pdf/cv.pdf'

import Heading from '../Heading/Heading'
import { Reveal } from '../utils/Reveal/Reveal'

function About() {
  return (
    <div className="about">
      <Heading beforeText="À" italicText="PRO" afterText="POS" margin={true} />
      <div className="about-text-container">
        <div id="whitebg"></div>
        <div id="blackbg"></div>
        <p className="aboutText">
          <Reveal>
            Développeur junior, je suis titulaire d'un BTS SIO (Option Développeur) et d'une
            formation Bac+3 "Développeur d'application - JavaScript React" chez OpenClassrooms, je
            me prépare actuellement à poursuivre mes études en réalisant un Bac+5 en alternance
            toujours chez OpenClassrooms. J'ai acquis une expérience en développement web par mon
            travail sur différents projets. Constamment à la recherche de nouveaux défis pour
            améliorer mes compétences, j'aspire à participer à des projets dans un milieu
            professionnel. Si vous êtes à la recherche d'un développeur pour votre entreprise ou
            votre projet, n'hésitez pas à me contacter.
          </Reveal>
        </p>
      </div>
      <div className="contact-button-1">
        <DownloadButton text="↘ TÉLÉCHARGEZ MON CV" link={CV} />
        <LinkButton text="↗ CONTACTEZ-MOI" link="mailto:simon.tessard@gmail.com" title="" />
      </div>
    </div>
  )
}

export default About
