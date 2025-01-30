import React from 'react'
import TopComp from '../TopComp'
import { useGetDoctorsQuery } from '../../features/doctors/doctorsApi'
import MiddleComp from '../MiddleComp';
import HomeNews from '../HomeNews';

function Doctors() {
  let { data, error, isLoading } = useGetDoctorsQuery();

  return (
    <div>
      <TopComp name='Doctors' path='/images/top.jpg' desc='Our Doctors' />
      <div className='flex justify-center my-[4rem]'>
        <div className='w-[70vw] grid grid-cols-[30%_30%_30%] gap-[2rem] justify-center'>
          {
            data && data?.message.map((doctor, index) => {
              return <div className='relative h-[70vh] rounded-md'>
                <img src="/images/hero_section_person_enhanced.png" alt="doctor image" className=' absolute z-0 h-[70vh] object-cover' />
                <img src={doctor.img} alt="hero section image not found " className='absolute z-1 h-[50vh]' />
                <div className='flex flex-col gap-[0.6rem] justify-center items-center z-10 bg-blue-200 absolute bottom-[3rem] w-full h-[25vh]'>
                  <h2 className='text-[1rem]'>{doctor.name}</h2>
                  <h2 className='text-[1.2rem] font-semibold text-blue-900'>{doctor.category}</h2>
                  <p className='text-[1rem] '>{doctor.email}</p>
                </div>
                <button className='h-[3rem] w-full bg-blue-800 absolute bottom-0 text-white'>
                  View Profile
                </button>
              </div>
            })
          }
        </div>
      </div>
      <MiddleComp />
      <HomeNews />
    </div>
  )
}

export default Doctors