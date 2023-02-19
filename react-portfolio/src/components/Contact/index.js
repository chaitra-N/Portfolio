import AnimatedLetters from '../AnimatedLetters'
import './../Contact/index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Email from '../Sidebar/Email'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const strContact = 'Contact me'
  const contactStr = [...strContact]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  })

  const sentEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_b8nvlni',
        'template_jgzc83m',
        refForm.current,
        'fWY88u7BbDxLJkmHu'
      )
      .then(
        () => {
          alert('Message successfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactStr}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance oppertunities and am excited to work on
            new projects. Let me know if you are interested or if you have any
            other questions are thoughts.
          </p>
          <a target="_blank" rel="noreferrer">
            <Email />
            &nbsp; developer.chaitracr@gmail.com
          </a>
        </div>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sentEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="name" required />
              </li>
              <li className="half">
                <input type="text" name="email" placeholder="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  required
                  type="text"
                  name="subject"
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  required
                  name="message"
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-buttons" value="Submit" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      {/* <div className="img-container">
        <img src={ContactImage} alt="contact" className="solid-image" />
      </div> */}
    </>
  )
}

export default Contact
