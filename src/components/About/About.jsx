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
          Développeur junior front-end. J'ai obtenu un BTS SIO Option : Développeur. Je recherche
          une alternance. in at rutrum orci. Turpis ullamcorper convallis gravida penatibus gravida
          vitae. Elit morbi in volutpa pulvinar dui venenatis cursus. Eget felis consequat donec
          arcu. Morbi in eleifend adipiscing faucibus amet natoque neque. Id pulvinar tellus quam
          ipsum nec hendrerit nisl amet eu. Ante placerat etiam neque sed sit. Ultrices vel amet
          vitae dictum semper. Tempor nunc aliquet penatibus in non purus facilisis. In eget elit
          eget nisi quisque diam mattis.
        </p>
      </div>
      <div className="contact-button-1">
        <ContactButton text="↗ CONTACTEZ-MOI" />
      </div>
    </div>
  )
}

export default About
