import React, { useState } from 'react';
import TopComp from './TopComp';
import { useCreateAppointmentMutation } from '../features/appointment/AppointmentApi';

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

const Appointment = () => {
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
            <TopComp name='Appointment' path='/images/top.jpg' desc='Book an Appointment'/>
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
                            Submit
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
            <div className='flex justify-center my-[4rem]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713620462!2d85.28493288341947!3d27.708954252167064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1738076550322!5m2!1sen!2snp" width="600" height="450" style={{ border: 0, width: '80vw' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Appointment;