import './mainheading.css'

import BigTitle from '../BigTitle/BigTitle'
import { MouseScroll } from '../MouseScroll/MouseScroll'

function MainHeading() {
  return (
    <main className="background-line">
      <BigTitle first="Simon" second="TESSARD" />
      <p className="about-title fadeInLeft">→ FRONT-DEVELOPER</p>
      <MouseScroll />
    </main>
  )
}

export default MainHeading
