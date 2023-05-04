import './heading.css'

function Heading({ beforeText, italicText, afterText, margin }) {
  return (
    <h2 className={`heading ${margin ? 'margin' : ''}`}>
      {beforeText}
      <span> {italicText}</span>
      {afterText}
    </h2>
  )
}

export default Heading
