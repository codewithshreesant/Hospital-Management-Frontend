
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetDoctorByIdQuery, useUpdateDoctorMutation } from '../../features/doctors/doctorsApi';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function UpdateDoctor() {
    const { id } = useParams();
    const navigate = useNavigate();
    let { data, error, isLoding } = useGetDoctorByIdQuery(id);
    console.log("single doctor data  ", data);
    let [UpdateDoctor] = useUpdateDoctorMutation();
    const News = data?.message;
    let [doctorData, setDoctorData] = useState({
        name: '',
        email: '',
        category: ''
    })

    useEffect(() => {
        if (News) {  // Check if News is defined (data has been fetched)
            setDoctorData({
                name: News?.name,
                email: News.email,
                category: News.category
            });
        }
    }, [News]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDoctorData({ ...doctorData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(doctorData);
        const response = await UpdateDoctor({ id: id, doctor: doctorData });
        console.log("updated doctor data ", response);
        if (response?.data.statusCode === 200) {
            alert(" Doctor updated Successfully ");
            setDoctorData({
                name: '',
                email: '',
                category: ''
            })
            navigate('/dashboard/doctors')
        }
    }

    return (
        <div className='h-[50vh]'>
            <h2 className="text-4xl font-extrabold text-center text-purple-800 mt-12 mb-8 border-b-4 border-purple-800 pb-2 shadow-md">
                Update a Doctor
            </h2>
            <Box
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                component="form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-[1rem]"
            >
                <div>
                    <TextField
                        id="name"
                        name="name"
                        label="name"
                        value={doctorData.name}
                        onChange={handleChange}
                        multiline
                        Rows={4}
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="email"
                        value={doctorData.email}
                        onChange={handleChange}
                        multiline
                        Rows={4}
                    />
                </div>
                <div>
                    <TextField
                        id="category"
                        name="category"
                        label="category"
                        value={doctorData.category}
                        onChange={handleChange}
                        multiline
                        Rows={4}
                    />
                </div>
                <Button variant="contained" color="secondary" type="submit">Update Doctor</Button>
            </Box>
        </div>
    )
}

export default UpdateDoctor 