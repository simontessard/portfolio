import './bigtitle.css'

export default function BigTitle({ first, second, margin, projectsList }) {
  return (
    <h1 className={`bigtitle-first fadeInLeft2 ${margin ? 'margin-top' : ''}`}>
      {first}
      <div className="bigtitle-second">{second}</div>
      {projectsList && <div className="bigtitle-projects">Liste de mes projets</div>}
    </h1>
  )
}
