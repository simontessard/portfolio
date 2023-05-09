import './mouse-scroll.css'

import mouse from '../../assets/icons/mouse.svg'
import arrow from '../../assets/icons/down-arrow.svg'

export default function MouseScroll() {
  return (
    <div className="mouse-container bounce">
      <img className="about-mouse" src={mouse} alt="Mouse logo" />
      <img className="about-mouse" src={arrow} alt="Mouse logo" />
      <p>SCROLL</p>
    </div>
  )
}
