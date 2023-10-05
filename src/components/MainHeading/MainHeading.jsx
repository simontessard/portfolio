import './mainheading.css'

import BigTitle from '../BigTitle/BigTitle'
import { MouseScrollDown } from '../MouseScroll/MouseScroll'

function MainHeading() {
  return (
    <main className="background-line">
      <BigTitle first="Simon" second="TESSARD" />
      <p className="about-title fadeInLeft">
        → FRONT-<br></br>DEVELOPER
      </p>
      <MouseScrollDown />
    </main>
  )
}

export default MainHeading
