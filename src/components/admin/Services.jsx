
import React from 'react'
import serviceApi, { useDeleteServiceMutation, useGetServicesQuery } from '../../features/services/ServiceApi'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'


function AdminServices() {
    let { data, error, isLoading } = useGetServicesQuery();
    let [ deleteService ] = useDeleteServiceMutation();
  const DeleteService = async (id)=>{
    const response = await deleteService(id);
    console.log("delete blog response ", response);
    if(response?.data.statusCode === 200)
    {
      alert("Service deleted Successfully ");
      location.reload();
    }
  }
    return (
        <div>
            <div className=' h-[10vh] flex justify-between items-center gap-[4rem] mx-[2rem]'>
                <h1 className='text-2xl text-blue-950 font-bold'>Services data</h1>
                <button className='px-[2rem] py-[0.5rem] border border-slate-50 shadow-lg bg-white'>
                    <Link to='/dashboard/service/create'>Create Service +</Link>
                </button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">title</TableCell>
                            <TableCell align="right">description</TableCell>
                            {/* <TableCell align="right"></TableCell> */}
                            {/* <TableCell align="right">Protein&</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data && data?.data.map((service, index) => {
                                return <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {service.title}
                                    </TableCell>
                                    <TableCell align="right">{(service.description).slice(0, 20)}....</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => DeleteService(service._id)}>Delete</Button>
                                        <Button>
                                            <Link to={`/dashboard/service/update/${service._id}`}>update</Link>
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

export default AdminServices