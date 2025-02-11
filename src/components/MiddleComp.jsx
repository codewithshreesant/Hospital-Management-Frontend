
import React from 'react'

function MiddleComp() {
  return (
    <div className='relative h-[60vh]'>
        <img src="/images/doctor_mid.jpeg" alt="middle image" className='absolute h-[70vh] w-full z-0 bg-blue-300' />
        <div className='absolute w-[40vw] top-[15vh] left-[30vw] flex flex-col items-center'>
            <p className='text-black text-[1.3rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus ad beatae reiciendis non, nihil asperiores adipisci suscipit at quasi ullam tempora harum minima eum praesentium dignissimos ipsam architecto quia.</p>
            <hr className='my-[1rem] bg-white px-1.5 w-[15vw] h-[5px]'/>
            <h1>John Doe</h1>
        </div>
    </div>
  )
}

export default MiddleComp