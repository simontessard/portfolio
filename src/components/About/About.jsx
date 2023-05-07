import './about.css'

import ContactButton from '../ContactButton/ContactButton'

import Heading from '../Heading/Heading'

function About() {
  return (
    <div className="about">
      <Heading beforeText="À" italicText="PRO" afterText="POS" margin={true} />
      <div className="about-text-container">
        <div id="whitebg"></div>
        <div id="blackbg"></div>
        <p className="aboutText">
          Développeur junior front-end, je suis titulaire d'un BTS SIO, Option : Développeur et d'un
          Bachelor OpenClassrooms "Développeur d'application - JavaScript React", je me prépare
          actuellement à poursuivre mes études en Master en alternance. J'ai acquis une expérience
          en développement web, en travaillant sur des projets divers et variés. Constamment à la
          recherche de nouveaux défis pour améliorer mes compétences, j'aspire à participer à des
          projets dans un milieu professionnel. Si vous êtes à la recherche d'un développeur pour
          votre entreprise ou votre projet, n'hésitez pas à me contacter.
        </p>
      </div>
      <div className="contact-button-1">
        <ContactButton text="↗ CONTACTEZ-MOI" />
      </div>
    </div>
  )
}

export default About
