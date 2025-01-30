import React from 'react';

const BottomContact = () => {
  return (
    <div className="flex justify-center">
      <div className='w-[80vw] h-[70vh]'>
          <div className='flex flex-col items-center my-[2rem]'>
              <h2 className="text-xl font-semibold">GET IN TOUCH</h2>
              <h1 className='text-3xl font-semibold text-blue-900'>Contact</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 shadow-md h-[40vh] rounded flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-4">EMERGENCY</h3>
              <p className="text-gray-700">(237) 681-812-265</p>
              <p className="text-gray-700">(237) 666-331-894</p>
            </div>
            <div className="bg-blue-950 p-6 shadow-md flex flex-col justify-center">
              <h3 className="text-xl font-medium text-white mb-4">LOCATION</h3>
              <p className="text-white">0123 Some place</p>
              <p className="text-white">9876 Some country</p>
            </div>
            <div className="bg-white p-6 shadow-md flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-4">EMAIL</h3>
              <p className="text-gray-700">fildineeesoe@gmail.com</p>
              <p className="text-gray-700">myebstudios@gmail.com</p>
            </div>
            <div className="bg-white p-6 shadow-md flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-4">WORKING HOURS</h3>
              <p className="text-gray-700">Mon-Sat 09:00-20:00</p>
              <p className="text-gray-700">Sunday Emergency only</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default BottomContact;