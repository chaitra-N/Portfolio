import './../Portfolio/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import portfolioData from './../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const workStr = 'My work'
  const strWork = [...workStr]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  })

  const renderPortfolio = (portfolioItem) => {
    return (
      <div className="images-container">
        {portfolioItem.map((port, id) => {
          return (
            <div className="image-box" key={id}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">
                  {port.description}
                  <br />
                  <button className="btn" onClick={() => window.open(port.url)}>
                    View
                  </button>
                </h4>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

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
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
    </>
  )
}

export default Portfolio
