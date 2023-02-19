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

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            repellat natus reiciendis, dolorem eaque quisquam, quidem aut rerum
            beatae numquam accusamus magni quas architecto veritatis facilis
            dolor itaque maxime. Sequi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ab labore vitae voluptatum hic iure, nihil qui non, at atque maiores
            ex perferendis soluta ad earum voluptates a provident voluptas!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            tempora ipsa necessitatibus itaque voluptate magnam placeat
            obcaecati doloribus consequatur, fuga blanditiis, dicta temporibus
            consequuntur harum quidem. Tempore, aliquid. Nemo, deleniti?
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
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
