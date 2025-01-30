
import React from 'react'
import doctorsApi, { useDeleteDoctorMutation, useGetDoctorsQuery } from '../../features/doctors/doctorsApi'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'

function AdminDoctors() {
    let { data, error, isLoading } = useGetDoctorsQuery();
    let [ deleteDoctor ] = useDeleteDoctorMutation();
        const DeleteDoctor = async (id)=>{
          const response = await deleteDoctor(id);
          console.log("delete blog response ", response);
          if(response?.data.statusCode === 200)
          {
            alert("Doctor deleted Successfully ");
            location.reload();
          }
        }
    return (
        <div>
            <div className=' h-[10vh] flex justify-between items-center gap-[4rem] mx-[2rem]'>
                <h1 className='text-2xl text-blue-950 font-bold'>Doctors data</h1>
                <button className='px-[2rem] py-[0.5rem] border border-slate-50 shadow-lg bg-white'>
                    <Link to='/dashboard/doctor/create'>Create Doctor +</Link>
                </button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">category</TableCell>
                            {/* <TableCell align="right">isLoggedIn</TableCell> */}
                            {/* <TableCell align="right">Protein&</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data && data?.message.map((doctor, index) => {
                                return <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {doctor.name}
                                    </TableCell>
                                    <TableCell align="right">{doctor.email}</TableCell>
                                    <TableCell align="right">{String(doctor.category)}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => DeleteDoctor(doctor._id)}>Delete</Button>
                                        <Button>
                                            <Link to={`/dashboard/doctor/update/${doctor._id}`}>update</Link>
                                        </Button>
                                    </TableCell>
                                    {/* <TableCell align="right">{String(user.isLoggedIn)}</TableCell> */}
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AdminDoctors