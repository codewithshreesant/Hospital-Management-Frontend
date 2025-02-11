import React from 'react'
import Button from './Button'
import AppointmentSection from './AppointmentSection'
import HomeMedical from './HomeMedical'
import HomeServices from './HomeServices'
import Speciality from './Specialitity'
import BookAppointment from './BookAppointment'
import HomeDoctors from './HomeDoctors'
import HomeNews from './HomeNews'

function Home() {
  return (
    <div className='relative'>
      <div className='md:h-[80vh] h-[50vh] relative'>
        <img src="/images/hero_section.jpg" alt="hero_image" className='heroSection' />
        <div className='w-full flex'>
          <div className='absolute top-[30%] left-[20%] w-[30vw]'>
            <h2 className='text-blue-400 font-bold care'>CARING FOR LIFE</h2>
            <p className='md:text-[2.5rem]  text-[1rem] text-blue-800 font-semibold tracking-wider'>Leading the Way In Medical Excellence</p>
            <Button name='Our Services' path='/services' />
          </div>
          <div className='absolute md:right-[5rem] right-[2rem] bottom-0 '>
            <img src='/images/hero_section_person_enhanced.png' alt='person image not found' className='md:h-[80vh] h-[50vh]'/>
          </div>
        </div>
      
        <style jsx>
          {`
            .heroSection{
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
              opacity: 0.1
            }
      
            .care{
              letter-spacing:3px;
              word-spacing:3px;
              font-size:1.2rem;
            }
          `}
        </style>
      </div>
      <AppointmentSection />
      <HomeMedical />
      <HomeServices />
      <Speciality />
      <BookAppointment />
      <HomeDoctors />
      <HomeNews />
      
    </div>
  )
}

export default Home