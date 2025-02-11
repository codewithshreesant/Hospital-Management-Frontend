import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDoctorByIdQuery } from '../../features/doctors/doctorsApi';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function SingleDoctor() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetDoctorByIdQuery(id);
  console.log('single doctor data ', data);
  const actualDoctor = data?.message;
  return (
    <div>
      {
        data && <div className='flex flex-col items-center'>
          <div className='w-[30vw] shadow-lg bg-white border border-slate-300 my-[4rem] px-[3rem] py-[3rem] flex flex-col gap-[1rem]'>
            <h1 className='text-3xl font-bold text-blue-950 text-center'>{actualDoctor.name}</h1>
            <img src={actualDoctor.img} alt="doctor image not found " className='h-[50vh] w-[20vw]' />
            <p><span className='font-semibold'>Category</span>: {actualDoctor.category}</p>
            <p><span className='font-semibold'>email:</span> {actualDoctor.email}</p>
            <div className='flex gap-[0.5rem]'>
              <a href={actualDoctor.linkedin ? actualDoctor.linkedin : ''} target='_blank'>
                <FaLinkedin color='blue' size='22' />
              </a>
              <a href={actualDoctor.facebook ? actualDoctor.facebook : ''}>
                <FaFacebook color='blue' size='22' />
              </a>
              <a href={actualDoctor.instagram ? actualDoctor.instagram : ''}>
                <FaInstagramSquare color='blue' size='22' />
              </a>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default SingleDoctor