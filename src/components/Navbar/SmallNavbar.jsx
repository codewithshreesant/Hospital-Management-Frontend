import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

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

function SmallNavbar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div className='md:hidden'>
            <Button onClick={toggleDrawer(true)}>
                <FaBars size={20} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className='h-full flex flex-col gap-[3rem] bg-blue-900 w-[30vw]'>
                    <ul className='flex flex-col gap-[2rem] items-center'>
                        {
                            sections.map((section, ind) => {
                                return <li key={ind} >
                                    <Link to={section.path}>{section.name}</Link>
                                </li>
                            })
                        }
                    </ul>
                    <div className='flex flex-col gap-[2rem] items-center'>
                        <h2 className='text-white'>
                            <FiSearch size={30} />
                        </h2>
                        {/* <Button name='Appointment' path='/appointment' /> */}
                        <button
                            className="bg-blue-200 text-gray-800 font-semibold rounded-full px-[1vw] py-2 hover:bg-blue-300 transition-colors duration-200"
                        >
                            <Link to='/appointment'>Appointment</Link>
                        </button>
                    </div>
                </div>

                <style jsx>
                    {
                        `
                    li{
                        color:white;
                    }
                    h2{
                        color:white;
                    }
                    `
                    }
                </style>

            </Drawer>
        </div>
    )
}

export default SmallNavbar