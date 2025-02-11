import React from 'react'
import { useGetDoctorsQuery } from '../features/doctors/doctorsApi'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function HomeDoctors() {
    let { data, error, isLoading } = useGetDoctorsQuery();
    console.log("doctors data ", data?.message);
    const doctors = data?.message;
    return (
        <div className='flex justify-center my-[4rem] w-full'>
            <div className='w-[70vw]'>
                <h1 className='text-center my-[2rem] text-3xl font-semibold text-blue-900'>
                    Our Doctors
                </h1>
                <div className='grid md:grid-cols-[30%_30%_30%] grid-cols-2 gap-[2rem] justify-center'>
                    {
                        data && data.message?.slice(0, 3).map((doctor, index) => {
                            return <div className='relative h-[70vh]'>
                                <img src={doctor.img} alt="doctor image" className=' absolute z-0 h-[50vh] object-cover' />
                                {/* <img src="/images/hero_section_person_enhanced.png" alt="hero section image not found " className='absolute z-1 h-[50vh]' /> */}
                                <div className='flex flex-col gap-[0.6rem] justify-center items-center z-10 bg-blue-200 absolute bottom-[3rem] w-full h-[25vh]'>
                                    <h2 className='text-[1rem]'>{doctor.name}</h2>
                                    <h2 className='text-[1.2rem] font-semibold text-blue-900'>{doctor.category}</h2>
                                    <p className='text-[1rem] '>{doctor.email}</p>
                                    <div className='flex gap-[0.5rem]'>
                                        <a href={doctor.linkedin ? doctor.linkedin  : ''} target='_blank'>
                                            <FaLinkedin color='blue' size='22'/>
                                        </a>
                                        <a href={doctor.facebook ? doctor.facebook : ''}>
                                            <FaFacebook color='blue' size='22'/>
                                        </a>
                                        <a href={doctor.instagram ? doctor.instagram : ''}>
                                            <FaInstagramSquare color='blue' size='22'/>
                                        </a>
                                    </div>
                                </div>
                                <button className='h-[3rem] w-full bg-blue-800 absolute bottom-0 text-white'>
                                    <Link to={`/singledoctor/${doctor._id}`}>View Profile</Link>
                                </button>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeDoctors

