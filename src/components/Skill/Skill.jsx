import './skill.css'

import skillPicture from '../../assets/images/skill-picture.png'

function Skill({ title, description }) {
  return (
    <div className="skill">
      <img src={skillPicture} alt="" />
      <div className="skill-text">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Skill
