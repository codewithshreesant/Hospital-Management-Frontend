
import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Button'
import { FiSearch } from "react-icons/fi";
import SmallNavbar from './smallNavbar';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../slice/user/UserSlice';

const sections = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About us',
        path: '/about-us'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'Doctors',
        path: '/doctors'
    },
    {
        name: 'News',
        path: '/news'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]


function BottomNavbar() {
    let dispatch = useDispatch();
    return (
        <div>
            <div className='hidden h-[12vh] md:flex justify-around items-center bg-blue-900' >
                <ul className='flex gap-[2rem] items-center'>
                    {
                        sections.map((section, ind) => {
                            return <li key={ind} className='text-white'>
                                <Link to={section.path}>{section.name}</Link>
                            </li>
                        })
                    }
                </ul>
                <div className='flex gap-[2rem] items-center'>
                    <h2 className='text-white'>
                        <FiSearch size={30} />
                    </h2>
                    <Button name='Appointment' path='/appointment' />
                    <button onClick={()=>dispatch(removeUser())}>Logout</button>
                </div>
            </div>
            <SmallNavbar />
        </div>
    )
}

export default BottomNavbar