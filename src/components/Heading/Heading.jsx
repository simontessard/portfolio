import './heading.css'

import { Reveal } from '../utils/Reveal/Reveal'

function Heading({ beforeText, italicText, afterText, margin }) {
  return (
    <Reveal>
      <h2 className={`heading ${margin ? 'margin' : ''}`}>
        {beforeText}
        <span> {italicText}</span>
        {afterText}
      </h2>
    </Reveal>
  )
}

export default Heading
