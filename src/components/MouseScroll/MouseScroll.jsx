import './mouse-scroll.css'

import mouse from '../../assets/icons/mouse.svg'
import arrow from '../../assets/icons/down-arrow.svg'

export function MouseScroll() {
  return (
    <div className="mouse-container bounce">
      <img className="about-mouse" src={mouse} alt="Mouse logo" />
      <img className="about-mouse" src={arrow} alt="Mouse logo" />
      <p className="mouse-container-text">SCROLL</p>
    </div>
  )
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export function MouseScrollUp() {
  return (
    <div className="mouse-scroll-up-container">
      <div className="mouse-scroll-up bounce" onClick={scrollToTop}>
        <img className="about-mouse reverse-arrow" src={arrow} alt="Mouse logo" />
        <img className="about-mouse" src={mouse} alt="Mouse logo" />
        <p className="mouse-scroll-up-text">SCROLL</p>
      </div>
    </div>
  )
}
