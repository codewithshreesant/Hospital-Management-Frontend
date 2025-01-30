
import React, { useState } from 'react'
import { useCreateServiceMutation } from '../../features/services/ServiceApi'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function CreateService() {
    let [ createService, {error, isLoading}] = useCreateServiceMutation();
    let [serviceData, setServiceData] = useState({
            title: '',
            description: '',
            img: ''
        })
    
        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setServiceData({ ...serviceData, [name]: value });
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(serviceData);
            try {
                const response = await createService(serviceData);
                console.log(" create service response ", response);
                if (response?.data.statusCode === 201) {
                    alert('Service Created Successfully ');
                    setServiceData({title:'', description:'', img:''});
                }
            } catch (error) {
                console.log("Error occured while creating service ", error.message);
            }
        }

    return (
        <div className='h-[50vh]'>
            <h2 className="text-4xl font-extrabold text-center text-purple-800 mt-12 mb-8 border-b-4 border-purple-800 pb-2 shadow-md">
                Create a Service
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
                        id="title"
                        label="title"
                        name="title"
                        value={serviceData.title}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        id="description"
                        label="description"
                        name="description"
                        value={serviceData.description}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                </div>
                <div>
                    <TextField
                        id="img"
                        label="image url"
                        name="img"
                        value={serviceData.img}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                    />
                </div>
                <Button variant="contained" color='secondary' className='w-[12vw]' type='submit'>Create service</Button>
            </Box>
        </div>
    )
}

export default CreateService 