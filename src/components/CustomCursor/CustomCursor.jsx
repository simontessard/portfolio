import './custom-cursor.css'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function CustomCursor() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    const handleCursor = (e) => {
      setX(e.pageX - 20)
      setY(e.pageY - 20)
    }
    window.addEventListener('mousemove', handleCursor)
    return () => {
      window.removeEventListener('mousemove', handleCursor)
    }
  }, [])
  return <motion.div className="custom-cursor" animate={{ x, y }}></motion.div>
}

export default CustomCursor
