

import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useCreateAppointmentMutation } from '../../features/appointment/AppointmentApi';
import { Button } from '@mui/material';

const appointmentData = {
    title: 'Book an Appointment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.',
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

function CreateAppointment() {
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
        <div className='flex flex-col gap-[5rem]'>
            <div className="bg-gray-100 p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">{appointmentData.title}</h2>
                    <p className="text-gray-700 mb-6">{appointmentData.description}</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {appointmentData.formFields.map((field) => (
                            <div key={field.label}>
                                <label htmlFor={field.label} className="block font-medium text-gray-700">
                                    {field.label}
                                </label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        id={field.label}
                                        name={field.label.toLowerCase()}
                                        placeholder={field.placeholder}
                                        rows="4"
                                        className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                                        onChange={handleChange}
                                    />
                                ) : field.type === 'select' ? (
                                    <select
                                        id={field.label}
                                        name={field.label.toLowerCase()}
                                        className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
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
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Create Appointment
                        </button>
                    </form>
                </div>
                {/* Right side: Schedule */}
                <div className="md:w-1/2 bg-indigo-900 text-white p-6 rounded-md">
                    <h3 className="text-xl font-bold mb-4">{appointmentData.schedule.title}</h3>
                    <div className="space-y-2">
                        {appointmentData.schedule.days.map((day) => (
                            <div key={day.name} className="flex justify-between">
                                <span>{day.name}</span>
                                <span>{day.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/50"> {/* Added divider */}
                        <p className="font-medium">{appointmentData.schedule.emergency.text}</p>
                        <a href={`tel:${appointmentData.schedule.emergency.phone}`} className="text-lg">
                            {appointmentData.schedule.emergency.phone}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAppointment 