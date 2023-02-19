import './../Logo/index.scss'
import LogoS from './../../../assets/images/big_logo.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LogoS} alt="C" className="solid-logo" />
    </div>
  )
}

export default Logo
