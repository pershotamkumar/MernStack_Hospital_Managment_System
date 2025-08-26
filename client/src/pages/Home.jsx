import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Department from '../components/Department'
import MessageForm from '../components/MessageForm'


const Home = () => {
  return (
    <>
    <Hero title={'WellCome To the ZeeCare Hospital |Your Trusted HealthCare Provider'} 
    imageUrl={'/hero.png'} vectorUrl={'/Vector.png'}/>
    <Biography Image_Url={'/about.png'}/>
    <Department/>
    <MessageForm/>
    </>
  )
}

export default Home