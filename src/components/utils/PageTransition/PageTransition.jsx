import { motion, useIsPresent } from 'framer-motion'

import './page-transition.css'

export function PageTransition() {
  const isPresent = useIsPresent()
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 0.65, ease: 'circOut' } }}
      exit={{ scaleX: 1, transition: { duration: 0.65, ease: 'circIn' } }}
      style={{ originX: isPresent ? 0 : 1 }}
      className="page-transition"
    />
  )
}
