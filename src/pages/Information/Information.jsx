import About from '../../components/About/About'
import Parcours from '../../components/Parcours/Parcours'

import { PageTransition } from '../../components/utils/PageTransition/PageTransition'

function Information() {
  return (
    <>
      <Parcours />
      <About />
      <PageTransition />
    </>
  )
}

export default Information
