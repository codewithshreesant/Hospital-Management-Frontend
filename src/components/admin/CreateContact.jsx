
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useCreateContactMutation } from '../../features/contact/ContactApi';
import { Button } from '@mui/material';

function CreateContact() {
  let [createContact, { error, isLoading }] = useCreateContactMutation();
  let [contactsData, setContactsData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactsData({ ...contactsData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactsData);
    try {
      const response = await createContact(contactsData);
      console.log(" create contacts response ", response);
      if (response?.data.statusCode === 200) {
        alert('contacts Created Successfully ');
        setcontactsData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.log("Error occured while creating contacts ", error.message);
    }
  }

  return (
    <div className='h-[50vh]'>
      <h2 className="text-4xl font-extrabold text-center text-purple-800 mt-12 mb-8 border-b-4 border-purple-800 pb-2 shadow-md">
        Create a Contact
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
            label="message url"
            name="message"
            value={contactsData.message}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
        </div>
        <Button variant="contained" color='secondary' className='w-[12vw]' type='submit'>Create Contact</Button>
      </Box>
    </div>
  )
}

export default CreateContact