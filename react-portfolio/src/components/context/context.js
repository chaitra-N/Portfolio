import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
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
    <AppContext.Provider
      value={{
        textEnter,
        textLeave,
        variants,
        cursorVariant,
        setMousePosition,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
