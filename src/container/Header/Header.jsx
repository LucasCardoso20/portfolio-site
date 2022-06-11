import React, {useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';
import { images } from '../../constants';
import hero from '../../assets/hero-img-2.png'
import './Header.scss'


const Header = () => {
  const [heroContent, setHeroContent] = useState([])

  useEffect(() => {
    const query = '*[_type == "hero"]';

    client.fetch(query).then((data)=> setHeroContent(data))

  }, [])
  
  return (
    <motion.div
      whileInView={{x: [-100, 0], opacity: [0,1]}}
      transition={{duration: 0.5}}
      className='hero container'
    >
      <div className='hero__content'>
        {heroContent.map((content)=> (
          <>
          <span>{content.span}</span>
          <h1>{content.title}</h1>
          <p>{content.excerpt}</p>
          <a href="https://api.whatsapp.com/send?phone=5521970319712">
            <button className='button'>CONTACT ME</button>
          </a> 
          </>
        ))}
        
      </div>

      <div className='hero__image__container'>
        <img className='hero__img' src={hero}/>
      </div>
    </motion.div>
  )
}

export default AppWrap(Header, 'home')