import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import {AppWrap, MotionWrap} from '../../wrapper'
import './About.scss';
import { urlFor, client } from '../../client';
import '../../App.scss'

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data)=> {
        setAbouts(data)
      })
  }, [])

  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const query = '*[_type == "profile"]';

    client.fetch(query)
      .then((data)=> {
        setProfile(data)
      })
  }, [])
  
  return (
    <>
      <h2 className='head-text'>About <span>Me</span></h2>

      <div className='app__profile'>
        {profile.map((author, index)=> (
          <div className='app__profile__container container' key={index}>
            <div className="app__profile__details">
              <img src={urlFor(author.imgUrl)} alt={author.title}/>
              <p>{author.name}</p>
            </div>

            <div className="app__profile__bio">
              {author.bio}
            </div>
          </div>
        ))}
        
      </div>

      <div className="app__profiles">
        {abouts.map((about, index)=> (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type:'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
          
        ))}
      </div>

      <a href='https://drive.google.com/file/d/19Q8X9olAA36nBn450Fe4-w1jko3Opfpl/view?usp=sharing' className='button' target="blank" rel="norefer">
        Download cv
      </a>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
  );