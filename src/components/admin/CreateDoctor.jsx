
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useCreateDoctorMutation } from '../../features/doctors/doctorsApi';

function CreateDoctor() {
    let [createDoctor, { error, isLoading }] = useCreateDoctorMutation();
    let [doctorData, setDoctorData] = useState({
        name: '',
        email: '',
        category: '',
        img: '',
        linkedin: '',
        facebook: '',
        instagram: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDoctorData({ ...doctorData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(doctorData);
        try {
            const response = await createDoctor(doctorData);
            console.log(" create doctor response ", response);
            if (response?.data.statusCode === 200) {
                alert('Doctor Created Successfully ');
                setDoctorData({name:'', email:'', category:'', img:'', linkedin:'', instagram:'', facebook:''});
            }
        } catch (error) {
            console.log("Error occured while creating doctor ", error.message);
        }
    }

    return (
        <div className='h-[50vh]'>
            <h2 className="text-4xl font-extrabold text-center text-purple-800 mt-12 mb-8 border-b-4 border-purple-800 pb-2 shadow-md">
                Create a Doctor
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
                        value={doctorData.name}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        id="email"
                        label="email"
                        name="email"
                        value={doctorData.email}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                </div>
                <div>
                    <TextField
                        id="category"
                        label="Category"
                        name="category"
                        value={doctorData.category}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        id="image"
                        label="image url"
                        name="img"
                        value={doctorData.img}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        id="linkedin"
                        label="linkedin url"
                        name="linkedin"
                        value={doctorData.linkedin}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        id="facebook"
                        label="facebook url"
                        name="facebook"
                        value={doctorData.facebook}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        id="instagram"
                        label="instagram url"
                        name="instagram"
                        value={doctorData.instagram}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                </div>
                <Button variant="contained" color='secondary' className='w-[12vw]' type='submit'>Create Doctor</Button>
            </Box>
        </div>
    )
}

export default CreateDoctor