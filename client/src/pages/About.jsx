import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
const About = () => {
  return (
    <div style={{marginTop:'50px'}}>
    <Hero title={"learn more about us | ZeeCare Medical Institue"} imageUrl={'/about.png'}/>
       <Biography Image_Url={'/whoweare.png'}/>
    </div>
    
  )
}

export default About
