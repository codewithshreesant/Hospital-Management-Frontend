
import React, { useEffect, useState } from 'react'
import { useGetAppointmentByIdQuery, useUpdateAppointmentMutation } from '../../features/appointment/AppointmentApi';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function UpdateAppointment() {
    let { id } = useParams();
    const navigate = useNavigate();
    let { data, error, isLoading } = useGetAppointmentByIdQuery(id);
    // console.log("data by id blog ", data);

    let [updateAppointment] = useUpdateAppointmentMutation();
    const Appointment = data?.data;
    let [appointmentData, setAppointmentsData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        message: '',
        doctor: '',
        department: ''

    })

    useEffect(() => {
        if (Appointment) {
            setAppointmentsData({
                name: Appointment?.name,
                email: Appointment?.email,
                date: Appointment?.date,
                time: Appointment?.time,
                message: Appointment?.message,
                doctor: Appointment?.doctor,
                department: Appointment?.department
            })
        }
    }, [Appointment])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAppointmentsData({ ...appointmentData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(appointmentData);
        try {
            const response = await updateAppointment({ id, appointment: appointmentData });
            console.log(" Appointment response ", response);
            if (response?.data.statusCode === 200) {
                alert(' Appointment Updated Successfully ');
                setAppointmentsData({
                    name: '',
                    email: '',
                    date: '',
                    time: '',
                    message: '',
                    doctor: '',
                    department: ''
                });
                navigate('/dashboard/appointments');
            }
        } catch (error) {
            console.log("Error occured while creating blogs ", error.message);
        }
    }

    return (
        <div className='h-[50vh]'>
            <h2 className="text-4xl font-extrabold text-center text-purple-800 mt-12 mb-8 border-b-4 border-purple-800 pb-2 shadow-md">
                Update a Appointment
            </h2>

            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className="flex flex-col gap-[1rem]"
            >
                <div>
                    <TextField
                        id="name"
                        label="name"
                        name="name"
                        value={appointmentData.name}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        id="email"
                        label="email"
                        name="email"
                        value={appointmentData.email}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                </div>
                <div>
                    <TextField
                        type='date'
                        id="date"
                        name="date"
                        value={appointmentData.date}
                        onChange={handleChange}
                    />
                    <TextField
                        type="time"
                        id="time"
                        name="time"
                        value={appointmentData.time}
                        onChange={handleChange}
                    />
                    <TextField
                        id="message"
                        label="message"
                        name="message"
                        value={appointmentData.message}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />

                    <FormControl fullWidth> {/* Ensures the Select takes full width */}
                        <InputLabel id="doctor">Doctor</InputLabel>
                        <Select
                            labelId="doctor"
                            id="doctor"
                            name="doctor"
                            value={appointmentData.doctor}
                            label="doctor"
                            onChange={handleChange}
                        >
                            <MenuItem value="Smith">Smith</MenuItem>
                            <MenuItem value="Jones">Jones</MenuItem>
                            <MenuItem value="Lee">Lee</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="department">Department</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="department"
                            value={appointmentData.department}
                            label="Department"
                            onChange={handleChange}
                        >
                            <MenuItem value="Cardiology">Cardiology</MenuItem>
                            <MenuItem value="Neurology">Neurology</MenuItem>
                            <MenuItem value="Orthopedics">Orthopedics</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Button variant="contained" color='secondary' className='w-[12vw]' type='submit'>Update Appointment</Button>
            </Box>
        </div>
    )
}

export default UpdateAppointment