import AnimatedLetters from '../AnimatedLetters'
import Logo4 from './../../assets/images/logo4.png'
import './../About/index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useGlobalContext } from '../context/context'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const { variants, cursorVariant, textEnter, textLeave } = useGlobalContext()

  const headingStr = 'About me'
  const arrayString = [...headingStr]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  })

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={arrayString}
              idx={15}
            />
          </h1>
          <p>
            I'm a developer, problem-solver and bookoholic. I am a passionate
            freelancer bringing you programming and design from the future.
          </p>

          <Link
            to="/portfolio"
            className="myWorkButton"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            MY WORK
          </Link>
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          />
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#0471b5" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <img src={Logo4} alt="webflow" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
