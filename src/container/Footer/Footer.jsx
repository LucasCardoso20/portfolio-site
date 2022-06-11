import React, {useState} from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import {client} from '../../client'
import './Footer.scss'


const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setisFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact', 
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(()=> {
        setLoading(false)
        setisFormSubmitted(true)
      })
  }
  
  return (

    <>
      <div className='app__footer'>
      
        <div className="app__footer__content">
          <h2>Let's talk about <span>everything</span></h2>
          <p>If you are insterested just send me a message, it's gonna be good to talk to you!</p>

          <img src={images.contact} alt="contact" />
        </div>
        

        
        <form 
          action="https://formspree.io/f/xqknnaqo"
          method="POST" 
          className='app__footer-form app__flex'
          >

          <div className='app__flex'>
            <input  className='p-text' type='text' placeholder='Your Name' name='name'  />
          </div>

          <div className='app__flex'>
          <input className="p-text" type="email" name="email" placeholder="Your Email"/>
          </div>
          <div>
          <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
              />
          </div>
          <button type='submit' className='p-text button' >Send Message</button>
        </form>
        
      </div>
    </>
    
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)