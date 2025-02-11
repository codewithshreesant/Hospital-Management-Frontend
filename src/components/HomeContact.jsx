import React, { useState } from 'react'
import { useCreateAppointmentMutation } from '../features/appointment/AppointmentApi';

const appointmentData = {
  formFields: [
      { label: 'Name', type: 'text', placeholder: 'Enter your name' },
      { label: 'Email', type: 'email', placeholder: 'Enter your email' },
      { label: 'Date', type: 'date' },
      { label: 'Time', type: 'time' },
      { label: 'Doctor', type: 'select', options: ['Dr. Smith', 'Dr. Jones', 'Dr. Lee'] },
      { label: 'Department', type: 'select', options: ['Cardiology', 'Neurology', 'Orthopedics'] },
      { label: 'Message', type: 'textarea', placeholder: 'Enter your message' },
  ],
  schedule: {
      title: 'Shedule hours',
      days: [
          { name: 'Monday', time: '09:00 AM - 07:00 PM' },
          { name: 'Tuesday', time: '09:00 AM - 07:00 PM' },
          { name: 'Wednesday', time: '09:00 AM - 07:00 PM' },
          { name: 'Thursday', time: '09:00 AM - 07:00 PM' },
          { name: 'Friday', time: '09:00 AM - 07:00 PM' },
          { name: 'Saturday', time: '09:00 AM - 07:00 PM' },
          { name: 'Sunday', time: 'Closed' },
      ],
      emergency: {
          text: 'Emergency',
          phone: '(237) 681-812-255',
      },
  },
};

function HomeContact() {
  const [formData, setFormData] = useState({});
      const [ createAppointment, { error,isLoading } ] = useCreateAppointmentMutation();
  
      const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          // Handle form submission here (e.g., send data to an API)
          console.log('Form submitted:', formData);
          try {
              const res = await createAppointment(formData);
              console.log("create appointment response ", res);
              if(res.data?.statusCode === 200)
              {
                  alert('appointment created successfully ');
                  setFormData({});
              }
          } catch (error) {
              console.log("error occured while creating appointment ", error.message);
          }
      };
  return (
      <div className="bg-blue-900 px-[1rem] py-[1rem] text-white rounded-md">
        <form onSubmit={handleSubmit} className="space-y-4 grid md:grid-cols-2 grid-cols-1 gap-[0.5rem]">
          {appointmentData.formFields.map((field) => (
            <div key={field.label}>
              {field.type === 'textarea' ||  field.type === 'select' ? 
              <label htmlFor={field.label} className="md:block hidden font-medium">
                {field.label}
              </label> :
                <label htmlFor={field.label} className="block font-medium">
                {field.label}
              </label>
              }
              {field.type === 'textarea' ? (
                <textarea
                  id={field.label}
                  name={field.label.toLowerCase()}
                  placeholder={field.placeholder}
                  rows="4"
                  className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500  hidden md:block"
                  onChange={handleChange}
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.label}
                  name={field.label.toLowerCase()}
                  className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500 hidden md:block"
                  onChange={handleChange}
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.label}
                  name={field.label.toLowerCase()}
                  placeholder={field.placeholder}
                  className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md md:w-[10vw] h-[7vh] md:mt-[10rem]"
          >
            Submit
          </button>
        </form>
      </div>
  )
}

export default HomeContact