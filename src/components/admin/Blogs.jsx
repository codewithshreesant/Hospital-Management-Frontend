import React from 'react'
import { useCreateBlogMutation, useDeleteBlogMutation, useGetBlogsQuery } from '../../features/blogs/blogApi'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Blogs() {
  let { data, error, isLoading } = useGetBlogsQuery();
  let [ deleteBlog ] = useDeleteBlogMutation();
  const DeleteBlog = async (id)=>{
    const response = await deleteBlog(id);
    console.log("delete blog response ", response);
    if(response?.data.statusCode === 200)
    {
      alert("Blog deleted Successfully ");
      location.reload();
    }
  }
  return (
    <div>
      <div className=' h-[10vh] flex justify-between items-center gap-[4rem] mx-[2rem]'>
        <h1 className='text-2xl text-blue-950 font-bold'>Blog data</h1>
        <button className='px-[2rem] py-[0.5rem] border border-slate-50 shadow-lg bg-white'>
          <Link to='/dashboard/blog/create'>Create blog +</Link>
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
              data && data?.data.map((blog, index) => {
                return <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {blog.title}
                  </TableCell>
                  <TableCell align="right">{(blog.description).slice(0,50)}</TableCell>
                  <TableCell align="right">{blog.author}</TableCell>
                  <TableCell align="right">{blog.seen}</TableCell>
                  <TableCell align="right">{blog.reaction}</TableCell>
                  <TableCell align="right">
                    <Button onClick={()=>DeleteBlog(blog._id)}>Delete</Button>
                    <Button>
                      <Link to={`/dashboard/blog/update/${blog._id}`}>update</Link>
                    </Button>
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

export default Blogs