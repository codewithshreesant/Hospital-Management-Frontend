import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetNewsByIdQuery, useUpdateNewsMutation } from '../../features/news/newsApi';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function UpdateNews() {
  let { id } = useParams();
  const navigate = useNavigate();
  let { data, error, isLoading } = useGetNewsByIdQuery(id);
  console.log("data by id news ", data);

  let [updateNews] = useUpdateNewsMutation();
  const News = data?.data;
  let [newsData, setNewsData] = useState({
    title: '',
    description: '',
    seen: '',
    image: '',
    reaction: '',
    author: ''
  })

  useEffect(() => {
    if (News) {
      setNewsData({
        title: News?.title,
        description: News?.description,
        seen: News?.seen,
        image: News?.image,
        reaction: News?.reaction,
        author: News?.author
      })
    }
  }, [News])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewsData({ ...newsData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newsData);
    try {
      const response = await updateNews({ id, news: newsData });
      console.log(" create news response ", response);
      if (response?.data.statusCode === 200) {
        alert(' News Updated Successfully ');
        setNewsData({
          title: '',
          description: '',
          seen: '',
          image: '',
          reaction: '',
          author: ''
        });
        navigate('/dashboard/news')
      }
    } catch (error) {
      console.log("Error occured while creating news ", error.message);
    }
  }

  return (
    <div className='h-[50vh]'>
      <h2 className="text-4xl font-extrabold text-center text-purple-800 mt-12 mb-8 border-b-4 border-purple-800 pb-2 shadow-md">
        Update a News
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
            value={newsData.title}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            id="description"
            label="description"
            name="description"
            value={newsData.description}
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
            value={newsData.author}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            id="image"
            label="image url"
            name="image"
            value={newsData.image}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            type="Number"
            id="seen"
            label="seen"
            name="seen"
            value={newsData.seen}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
          <TextField
            type="Number"
            id="reaction"
            label="reaction"
            name="reaction"
            value={newsData.reaction}
            onChange={handleChange}
            multiline
            maxRows={4}
          />
        </div>
        <Button variant="contained" color='secondary' className='w-[12vw]' type='submit'>Update News</Button>
      </Box>
    </div>
  )
}

export default UpdateNews