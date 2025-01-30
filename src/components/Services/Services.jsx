
import React from 'react'
import { useGetServicesQuery } from '../../features/services/ServiceApi'
import TopComp from '../TopComp';
import { FaArrowRight } from "react-icons/fa6";

function Services() {
  let { data,error,isLoading } = useGetServicesQuery();
  console.log("service data ", data);
  return (
    <>
    <div>
      <TopComp name='Services' path='/images/top.jpg' desc='Our Services'/>
      <div className='my-[3rem]'>
        <div className='flex justify-center'>
          <div className='w-[80vw] grid grid-cols-3'>
            {
              data && data?.data.map((service, index)=>{
                return <div key={index} className='w-[25vw] rounded shadow-lg bg-white relative'>
                  <img src="/images/service1.jpg" alt="service image" className='w-[25vw]' />
                  <img src="/images/medical_logo.png" alt="medical logo" className='h-[80px] w-[80px] mt-[-50px] absolute right-[1rem]' />
                  <div className='w-[20vw] ml-[2rem] my-[1rem] flex flex-col gap-[1rem]'>
                    <h1 className='text-[1.5rem] font-semibold text-blue-950'>{service.title}</h1>
                    <p>{(service.description).slice(0,100)}</p>
                    <button className='flex items-center gap-[0.5rem]'><span className='text-left text-blue-500'>Learn More</span><FaArrowRight /></button>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services