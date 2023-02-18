import { Link } from '@react-email/link'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Email = () => {
  return (
    <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRGsGNFhMZDpQCDksqZcXVQWtGtkXGJgPFfbPwJDVBvLCbJXPbTHrKcLnVkFLxKmmRKTm">
      <FontAwesomeIcon icon={faEnvelope} />
    </Link>
  )
}

export default Email
