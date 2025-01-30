
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useCreateBlogMutation } from '../../features/blogs/blogApi';
import { Button } from '@mui/material';

function CreateBlog() {
  let [createBlog, { error, isLoading }] = useCreateBlogMutation();
  let [blogsData, setBlogsData] = useState({
    title: '',
    description: '',
    seen: '',
    image: '',
    reaction: '',
    author: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBlogsData({ ...blogsData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blogsData);
    try {
      const response = await createBlog(blogsData);
      console.log(" create blogs response ", response);
      if (response?.data.statusCode === 200) {
        alert('blogs Created Successfully ');
        setBlogsData({
          title: '',
          description: '',
          seen: '',
          image: '',
          reaction: '',
          author: ''
        });
      }
    } catch (error) {
      console.log("Error occured while creating blogs ", error.message);
    }
  }

  return (
    <div className='h-[50vh]'>
      <h2 className="text-4xl font-extrabold text-center text-purple-800 mt-12 mb-8 border-b-4 border-purple-800 pb-2 shadow-md">
        Create a Blog
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
            value={blogsData.title}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            id="description"
            label="description"
            name="description"
            value={blogsData.description}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
        </div>
        <div>
          <TextField
            id="author"
            label="author"
            name="author"
            value={blogsData.author}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            id="image"
            label="image url"
            name="image"
            value={blogsData.image}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            type="Number"
            id="seen"
            label="seen"
            name="seen"
            value={blogsData.seen}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            type="Number"
            id="reaction"
            label="reaction"
            name="reaction"
            value={blogsData.reaction}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
        </div>
        <Button variant="contained" color='secondary' className='w-[12vw]' type='submit'>Create blogs</Button>
      </Box>
    </div>
  )
}

export default CreateBlog