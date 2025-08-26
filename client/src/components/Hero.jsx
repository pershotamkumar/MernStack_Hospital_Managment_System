import React from 'react'

const Hero = ({title, imageUrl,vectorUrl}) => {
  return (
 <div className="hero container heros" >
    <div className="banner banner-restyle" >
        <h4>{title}</h4>
        <p>Zee Care Hospital is a trusted healthcare facility dedicated to providing quality medical services with care and compassion. Equipped with modern technology and a team of experienced doctors, Zee Care ensures patient comfort, accurate diagnosis, and effective treatment in a safe and friendly environment</p>
    </div>
    <div className="banner img-banner" >
        <img src={imageUrl} alt="hero" className='animated-image' />
        
    </div>

 </div>
  )
}

export default Hero