import { Link } from 'react-router-dom'
import LogoTitle from './../../assets/images/logo-s.png'
import './../Home/index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          haitra
          <br />
          web developer
        </h1>
        <h2>React developer / WebFlow developer / Freelancer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
