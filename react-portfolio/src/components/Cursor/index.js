import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [cursorVariant, setCoursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e)
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: 'difference',
      opacity: 1,
    },
  }
  const textEnter = () => setCoursorVariant('text')
  const textLeave = () => setCoursorVariant('default')

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    />
  )
}

export default Cursor
