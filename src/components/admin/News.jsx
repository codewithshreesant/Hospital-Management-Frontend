import React from 'react'
import { useCreateNewsMutation, useDeleteNewsMutation, useGetNewsByIdQuery, useGetNewsQuery } from '../../features/news/newsApi'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'


function AdminNews() {
  // let [ createNews,{ error, isLoading }] = useCreateNewsMutation();
  let { data, error, isLoading } = useGetNewsQuery();
  let [ deleteNews ] = useDeleteNewsMutation();
    const DeleteNews = async (id)=>{
      const response = await deleteNews(id);
      console.log("delete blog response ", response);
      if(response?.data.statusCode === 200)
      {
        alert("News deleted Successfully ");
        location.reload();
      }
    }

  return (
    <div>
      <div className=' h-[10vh] flex justify-between items-center gap-[4rem] mx-[2rem]'>
        <h1 className='text-2xl text-blue-950 font-bold'>News data</h1>
        <button className='px-[2rem] py-[0.5rem] border border-slate-50 shadow-lg bg-white'>
          <Link to='/dashboard/news/create'>Create News +</Link>
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell align="right">description</TableCell>
              <TableCell align="right">author</TableCell>
              <TableCell align="right">seen</TableCell>
              <TableCell align="right">reaction</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data && data?.data.map((news, index) => {
                return <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {news.title}
                  </TableCell>
                  <TableCell align="right">{(news.description).slice(0,50)}</TableCell>
                  <TableCell align="right">{news.author}</TableCell>
                  <TableCell align="right">{news.seen}</TableCell>
                  <TableCell align="right">{news.reaction}</TableCell>
                  <TableCell align="right">
                    <Button onClick={()=>DeleteNews(news._id)}>Delete</Button>
                    <Button>update</Button>
                  </TableCell>
                </TableRow>
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AdminNews