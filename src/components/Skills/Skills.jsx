import Heading from '../Heading/Heading'
import Skill from '../Skill/Skill'

import './skills.css'

function Skills() {
  return (
    <div className="skills">
      <Heading beforeText="" italicText="COM" afterText="PÉTENCES" margin={false} />
      <div className="skills-container">
        <Skill
          title="FRONT"
          description="HTML, CSS, SASS, Javascript, React, Tailwind, Bootstrap."
        />
        <Skill title="BACK" description="PHP, Java, API REST" />
        <Skill title="UI/UX" description="Figma, Maquette, Aléatoire" />
      </div>
    </div>
  )
}

export default Skills
