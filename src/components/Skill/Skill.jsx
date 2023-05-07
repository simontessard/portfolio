import './skill.css'

function Skill({ title, description, image }) {
  return (
    <div className="skill">
      <img src={image} alt="" />
      <div className="skill-text">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Skill
