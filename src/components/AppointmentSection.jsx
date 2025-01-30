import React from 'react';

const AppointmentCard = ({ icon, color, text, textColor }) => (
  <div className={`flex items-center justify-center w-64 h-24  ${color}`}>
    <div className={`text-white text-2xl`}>{icon}</div>
    <p className={`${textColor} text-sm ml-2`}>{text}</p>
  </div>
);

const AppointmentSection = () => {
  return (
    <div className='absolute left-[15%]'>
      <div className="flex justify-center items-center gap-[2rem] mt-[-3rem]">
        <AppointmentCard
          icon={<i className="fa-solid fa-calendar-days"></i>}
          color="bg-blue-900"
          textColor="text-white"
          text="Book an Appointment"
        />
        <AppointmentCard
          icon={<i className="fa-solid fa-user"></i>}
          color="bg-blue-300"
          textColor="text-blue-800"
          text="Book an Appointment"
        />
        <AppointmentCard
          icon={<i className="fa-solid fa-file-invoice-dollar"></i>}
          color="bg-blue-600"
          textColor="text-white"
          text="Book an Appointment"
        />
      </div>
    </div>
  );
};

export default AppointmentSection;