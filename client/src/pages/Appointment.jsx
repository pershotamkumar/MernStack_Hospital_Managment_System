import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero'
//appointment sheduling 
const Appointment = () => {
  return (
    <div className='heros'>
    <Hero title={"appointment sheduling | Zee care hospital"} imageUrl={'/signin.png'}/>
    <AppointmentForm/>
    </div>
  )
}

export default Appointment