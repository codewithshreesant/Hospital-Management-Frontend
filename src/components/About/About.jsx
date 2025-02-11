
import React from 'react'
import TopComp from '../TopComp'
import HospitalWelcome from '../HospitalWelcome'
import MiddleComp from '../MiddleComp'
import HomeNews from '../HomeNews'

function About() {
  return (
    <div>
      <TopComp name='About' path='/images/abouttop.jpg' desc='About us'/>
      <div className='flex justify-center my-[4rem]'>
        <div className='flex h-[80vh] md:w-[70vw] gap-[2rem]'>
          <img src="/images/about1.jpeg" alt="about image" className='w-[50vw]' />
          <HospitalWelcome />
        </div>
      </div>
      <MiddleComp />
      <HomeNews />
    </div>
  )
}

export default About