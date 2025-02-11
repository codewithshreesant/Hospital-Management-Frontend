
import React from 'react'
import { useDeleteAppointmentMutation, useGetAppointmentsQuery } from '../../features/appointment/AppointmentApi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Appointments() {
    const { data, error, isLoading } = useGetAppointmentsQuery();
    console.log("Appointments Data ", data);
    const [deleteAppointment] = useDeleteAppointmentMutation();
    const deleteAppointments = async (id)=>{
        const res = await deleteAppointment(id);
        console.log("delete Appointment response ", res);
        if(res.data?.statusCode === 200)
        {
            alert("Appointment deleted Successfully ");
            location.reload();
        }
    }

    return (
        <div>
            <div className=' h-[10vh] flex justify-between items-center gap-[4rem] mx-[2rem]'>
                <h1 className='text-2xl text-blue-950 font-bold'>Appointments Data</h1>
                <button className='px-[2rem] py-[0.5rem] border border-slate-50 shadow-lg bg-white'>
                    <Link to='/dashboard/appointment/create'>Create Appointment +</Link>
                </button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">date</TableCell>
                            <TableCell align="right">time</TableCell>
                            <TableCell align="right">Message</TableCell>
                            <TableCell align="right">Doctor</TableCell>
                            <TableCell align="right">Department</TableCell>
                            {/* <TableCell align="right">isLoggedIn</TableCell> */}
                            {/* <TableCell align="right">Protein&</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data && data?.data.map((appointment, index) => {
                                return <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {appointment.name}
                                    </TableCell>
                                    <TableCell align="right">{appointment.email}</TableCell>
                                    <TableCell align="right">{appointment.date}</TableCell>
                                    <TableCell align="right">{appointment.time}</TableCell>
                                    <TableCell align="right">{(appointment.message).slice(0,50)}....</TableCell>
                                    <TableCell align="right">{appointment.doctor}</TableCell>
                                    <TableCell align="right">{appointment.department}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => deleteAppointments(appointment._id)}>Delete</Button>
                                        <Button>
                                            <Link to={`/dashboard/appointment/update/${appointment._id}`}>update</Link>
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

export default Appointments