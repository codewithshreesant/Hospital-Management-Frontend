
import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Button'
import { FiSearch } from "react-icons/fi";
import SmallNavbar from './smallNavbar';
import { useDispatch, useSelector } from 'react-redux';
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
    const user = useSelector(state => state.user);
    console.log("user ", user);
    const actualUser = user?.user;
    console.log("actual user ", actualUser)
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
                    {/* <h2 className='text-white'>
                        <FiSearch size={30} />
                    </h2> */}
                    <Button name='Appointment' path='/appointment' />
                    { !actualUser &&
                    <button className="bg-purple-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        <Link to="/register">Signup</Link>
                        
                    </button>
                    }
                    { !actualUser &&
                    <button className="bg-purple-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        <Link to="/login">Login</Link>
                    </button>
                    }
                    { actualUser &&
                    <button onClick={() => dispatch(removeUser())} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Logout
                    </button>
                    }
                </div>
            </div>
            <SmallNavbar />
        </div>
    )
}

export default BottomNavbar