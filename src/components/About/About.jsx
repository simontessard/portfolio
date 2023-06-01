import './about.css'

import LinkButton from '../LinkButton/LinkButton'

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
            Développeur junior front-end, je suis titulaire d'un BTS SIO, Option : Développeur et
            d'un Bachelor OpenClassrooms "Développeur d'application - JavaScript React", je me
            prépare actuellement à poursuivre mes études en Master en alternance. J'ai acquis une
            expérience en développement web par mon travail sur des projets divers et variés.
            Constamment à la recherche de nouveaux défis pour améliorer mes compétences, j'aspire à
            participer à des projets dans un milieu professionnel. Si vous êtes à la recherche d'un
            développeur pour votre entreprise ou votre projet, n'hésitez pas à me contacter.
          </Reveal>
        </p>
      </div>
      <div className="contact-button-1">
        <LinkButton text="↘ TÉLÉCHARGEZ MON CV" />
        <LinkButton text="↗ CONTACTEZ-MOI" link="mailto:simon.tessard@gmail.com" title="" />
      </div>
    </div>
  )
}

export default About
