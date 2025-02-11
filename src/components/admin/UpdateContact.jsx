
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetContactByIdQuery, useUpdateContactMutation } from '../../features/contact/ContactApi';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Contact from '../Contact/Contact';

function UpdateContact() {
  let { id } = useParams();
  const navigate = useNavigate();
  let { data, error, isLoading } = useGetContactByIdQuery(id);
  console.log("data by id blog ", data);

  let [updateContact] = useUpdateContactMutation();
  const Contact = data?.data;
  let [contactsData, setContactsData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(()=>{
    if(Contact)
    {
      setContactsData({
        name: Contact?.name,
        email: Contact?.email,
        subject: Contact?.subject,
        message: Contact?.message,
      })
    }
  },[Contact])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactsData({ ...contactsData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactsData);
    try {
      const response = await updateContact({ id, contact: contactsData });
      console.log(" create blogs response ", response);
      if (response?.data.statusCode === 200) {
        alert(' Blog Updated Successfully ');
        setContactsData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        navigate('/dashboard/contacts');
      }
    } catch (error) {
      console.log("Error occured while creating blogs ", error.message);
    }
  }

  return (
    <div className='h-[50vh]'>
      <h2 className="text-4xl font-extrabold text-center text-purple-800 mt-12 mb-8 border-b-4 border-purple-800 pb-2 shadow-md">
        Update a Contact
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
            value={contactsData.name}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            id="email"
            label="email"
            name="email"
            value={contactsData.email}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
        </div>
        <div>
          <TextField
            id="subject"
            label="subject"
            name="subject"
            value={contactsData.subject}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            id="message"
            label="message"
            name="message"
            value={contactsData.message}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
        </div>
        <Button variant="contained" color='secondary' className='w-[12vw]' type='submit'>Update Contact</Button>
      </Box>
    </div>
  )
}

export default UpdateContact;