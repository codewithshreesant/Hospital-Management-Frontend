import React from 'react'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuClock5 } from "react-icons/lu";
import MedicalLogo from '../MedicalLogo';

function TopNavbar() {
    return (
        <div className='md:h-[12vh] h-[30vh] flex-col md:flex md:flex-row md:justify-center md:gap-[14rem] md:items-center bg-white'>
            <MedicalLogo />

            <div className='flex gap-[2rem] items-center'>
                <div className='flex items-center gap-[0.5rem]'>
                    <MdOutlinePhoneInTalk size={32}/>
                    <div>
                        <h2>Emergency</h2>
                        <p className='text-blue-500'>(237) 681-812-255</p>
                    </div>
                </div>
                <div className='flex items-center gap-[0.5rem]'>
                    <LuClock5 size={32}/>
                    <div>
                        <h2>Work Hour</h2>
                        <p className='text-blue-500'>09:00 - 20:00 Everyday</p>
                    </div>
                </div>
                <div className='flex items-center gap-[0.5rem]'>
                    <CiLocationOn size={32}/>
                    <div>
                        <h2>Location</h2>
                        <p className='text-blue-500'>0123 Some Place</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar