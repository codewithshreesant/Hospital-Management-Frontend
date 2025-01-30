import React from 'react';

const HospitalWelcome = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-5">Welcome to Hospital Name</h1>
      <h2 className="text-3xl font-bold mb-8 text-blue-950">Best Care for Your Good Health</h2>

      <div className='flex gap-[2rem] my-[2rem]'>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <span className="inline-block w-6 h-6 rounded-full bg-blue-500 mr-2"></span>
            <p>A Passion for Healing</p>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-6 h-6 rounded-full bg-blue-500 mr-2"></span>
            <p>All our best</p>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-6 h-6 rounded-full bg-blue-500 mr-2"></span>
            <p>Always Caring</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <span className="inline-block w-6 h-6 rounded-full bg-blue-500 mr-2"></span>
            <p>5-Star Care</p>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-6 h-6 rounded-full bg-blue-500 mr-2"></span>
            <p>Believe in Us</p>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-6 h-6 rounded-full bg-blue-500 mr-2"></span>
            <p>A Legacy of Excellence</p>
          </div>
        </div>
      </div>

      <p className="mt-10 text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
        scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor
        ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin
        massa in. Consequat faucibus porttitor enim et.
      </p>
      <p className='mt-8 text-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur laudantium laboriosam suscipit ipsum officia quidem reiciendis voluptatibus minus inventore quos.
      </p>
    </div>
  );
};

export default HospitalWelcome;