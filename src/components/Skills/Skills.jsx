import Heading from '../Heading/Heading'
import Skill from '../Skill/Skill'

import './skills.css'

import skillPicture from '../../assets/images/skill-picture.png'
import serverPicture from '../../assets/images/servers.jpg'

import { Reveal } from '../utils/Reveal/Reveal'

function Skills() {
  return (
    <div className="skills">
      <Heading beforeText="" italicText="COM" afterText="PÉTENCES" margin={false} />
      <div className="skills-container">
        <Reveal>
          <Skill
            title="FRONT"
            description="HTML5 ; CSS (SASS, Tailwind, Bootstrap) ; Javascript (Jest, React, Angular, Vue) ; Wordpress"
            image={skillPicture}
          />
        </Reveal>
        <Reveal>
          <Skill
            title="BACK"
            image={serverPicture}
            description="PHP, Java, C#, Code Igniter, API REST, MySQL, MariaBD, MongoDB"
          />
        </Reveal>
      </div>
    </div>
  )
}

export default Skills
