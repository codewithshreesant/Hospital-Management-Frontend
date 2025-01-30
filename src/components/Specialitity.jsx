import React from 'react';

const Specializations = [
  { name: 'Neurology', icon: '🧠' },
  { name: 'Bones', icon: '🦴' },
  { name: 'Oncology', icon: '🧬' },
  { name: 'Otorhinolaryngology', icon: '👃' },
  { name: 'Ophthalmology', icon: '👁' },
  { name: 'Cardiovascular', icon: '❤️‍🩹' },
  { name: 'Pulmonology', icon: '🫁' },
  { name: 'Renal Medicine', icon: '🩸' },
  { name: 'Gastroenterology', icon: '🍽️' },
  { name: 'Urology', icon: '🚽' },
  { name: 'Dermatology', icon: '🧑‍⚕️' },
  { name: 'Gynaecology', icon: '👩‍⚕️' },
];

function Speciality() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Specializations</h1>

      <div className="grid grid-cols-4 items-center justify-center">
        {Specializations.map((specialization) => (
          <div
            key={specialization.name}
            className="bg-white rounded-lg px-[5rem] py-[5rem] shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-center mb-2">{specialization.icon}</div>
            <p className="text-center">{specialization.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speciality;