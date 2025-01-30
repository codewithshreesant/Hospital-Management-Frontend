
import React from 'react'
import TopNavbar from './TopNavbar'
import BottomNavbar from './BottomNavbar'

function Navbar() {
  return (
    <div className='flex flex-col sticky top-0 z-50'>
      <TopNavbar />
      <BottomNavbar />
    </div>
  )
}

export default Navbar