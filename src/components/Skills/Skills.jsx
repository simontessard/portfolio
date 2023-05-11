import Heading from '../Heading/Heading'
import Skill from '../Skill/Skill'

import './skills.css'

import skillPicture from '../../assets/images/skill-picture.png'
import serverPicture from '../../assets/images/servers.jpg'
import designPicture from '../../assets/images/design.jpg'

function Skills() {
  return (
    <div className="skills">
      <Heading beforeText="" italicText="COM" afterText="PÉTENCES" margin={false} />
      <div className="skills-container">
        <Skill
          title="FRONT"
          description="HTML, CSS, SASS, Javascript, React, Tailwind, Bootstrap."
          image={skillPicture}
        />
        <Skill title="BACK" image={serverPicture} description="PHP, Java, API REST" />
        <Skill title="UI/UX" image={designPicture} description="Figma, Maquette" />
      </div>
    </div>
  )
}

export default Skills
