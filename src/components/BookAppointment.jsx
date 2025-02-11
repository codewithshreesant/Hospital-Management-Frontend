
import React from 'react'
import HomeContact from './HomeContact';

function BookAppointment() {
  return (
    <div className='relative h-[90vh]'>
        <div className='absolute'>
            <img src="/images/welcome_meddical.jpeg" alt="Doctor image" className=' w-full h-[90vh] opacity-50' />
        </div>
        <div className='absolute w-[40vw] left-[10%] top-[30%]'>
            <h1 className='text-[2.2rem] text-blue-500 font-bold'>Book an Appointment</h1>
            <p className='text-[1.2rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minus necessitatibus iusto quisquam aut et vero tenetur incidunt voluptatem, repudiandae impedit, dignissimos quasi, temporibus molestias!</p>
        </div>
        <div className='absolute right-[5%] top-[5%]'> 
            <HomeContact />
        </div>
    </div>
  )
}


export default BookAppointment;  