import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Home/Logo'
import LogoTitle from './../../assets/images/logo-s.png'
import './../Home/index.scss'
import { motion } from 'framer-motion'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [cursorVariant, setCoursorVariant] = useState('default')

  const string = 'haitra'
  const job = 'Web Developer.'
  const nameString = [...string]
  const jobString = [...job]

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

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  })

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
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameString}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobString}
              idx={22}
            />
          </h1>
          <h2>React developer / WebFlow developer / Freelancer</h2>

          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          />

          {/* <Link
            to="/contact"
            className="flat-button"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            CONTACT ME
          </Link> */}
          <Link
            to="/portfolio"
            className="button"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            MY WORK
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
