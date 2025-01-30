
import React from 'react'

function MiddleComp() {
  return (
    <div className='relative h-[60vh]'>
        <img src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600" alt="middle image" className='absolute h-[60vh] w-full z-0 bg-blue-300' />
        <div className='absolute w-[40vw] top-[15vh] left-[30vw] flex flex-col items-center'>
            <p className='text-white text-[1.5rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus ad beatae reiciendis non, nihil asperiores adipisci suscipit at quasi ullam tempora harum minima eum praesentium dignissimos ipsam architecto quia.</p>
            <hr className='my-[1rem] bg-white px-1.5 w-[15vw] h-[5px]'/>
            <h1>John Doe</h1>
        </div>
    </div>
  )
}

export default MiddleComp