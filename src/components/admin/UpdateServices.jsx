import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetServiceByIdQuery, useUpdateServiceMutation } from '../../features/services/ServiceApi';
import { useUpdateDoctorMutation } from '../../features/doctors/doctorsApi';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom';

function UpdateServices() {
    const { id } = useParams(); 
    const navigate=useNavigate();
    let { data, error, isLoading } = useGetServiceByIdQuery(id);
    const Service = data?.data;

    let [ updateService ] = useUpdateServiceMutation();

    let [ serviceData, setServiceData ] = useState({
        title:Service?.title,
        description:Service?.description 
    })

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setServiceData({...serviceData, [name]:value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(serviceData);
        const response = await updateService({id:id, service:serviceData});
        console.log(" updated service data ", response);
        if(response?.data.statusCode === 200)
        {
            alert("Service Updated Successfully ");
            setServiceData({
                title:'',
                description:''
            })
            navigate('/dashboard/services')
        }
    }
    
  return (
    <div>
        <h2 className="text-4xl font-extrabold text-center text-purple-800 mt-12 mb-8 border-b-4 border-purple-800 pb-2 shadow-md">
          Update a Service
        </h2>
        <Box 
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            component='form'
            onSubmit={handleSubmit}
            autoComplete='false'
            noValidate
            className="flex flex-col gap-[1rem]"
        >
            <div>
                <TextField 
                    name="title"
                    id="title"
                    label="title"
                    value={serviceData.title}
                    onChange={handleChange} 
                    multiline
                    Rows={4}
                />
                <TextField
                    name="description"
                    id="description"
                    label="description"
                    value={serviceData.description}
                    onChange={handleChange}
                    multiline
                    Rows={4}
                />
            </div>
            <Button variant="contained" color="secondary" type="submit">Update Service</Button>
        </Box>
    </div>
  )
}

export default UpdateServices