import './../Portfolio/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const workStr = 'My work'
  const strWork = [...workStr]

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strWork}
            idx={15}
          />
        </h1>
      </div>
    </>
  )
}

export default Portfolio
