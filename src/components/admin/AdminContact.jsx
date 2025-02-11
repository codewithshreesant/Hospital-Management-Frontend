import React, { useEffect } from 'react';
import { useDeleteContactMutation, useGetContactsQuery } from '../../features/contact/ContactApi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'

function AdminContact() {
    const { data, error, isLoading } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();

    useEffect(() => {
        console.log("contacts data ", data);
        console.log("contacts error ", error);
        console.log("contacts isLoading ", isLoading);
    }, [data, error, isLoading]);

    const handleDelete = async (id) => {
        const res = await deleteContact(id);
        console.log("response delete ", res);
        if (res.data?.statusCode === 200) {
            alert("contact deleted successfully ");
            location.reload();
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className=' h-[10vh] flex justify-between items-center gap-[4rem] mx-[2rem]'>
                <h1 className='text-2xl text-blue-950 font-bold'>Contacts Data</h1>
                <button className='px-[2rem] py-[0.5rem] border border-slate-50 shadow-lg bg-white'>
                    <Link to='/dashboard/contact/create'>Create Contact +</Link>
                </button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">subject</TableCell>
                            <TableCell align="right">message</TableCell>
                            {/* <TableCell align="right">Protein&</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data && data?.data.map((contact, index) => {
                                return <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {contact.name}
                                    </TableCell>
                                    <TableCell align="right">{contact.email}</TableCell>
                                    <TableCell align="right">{String(contact.subject)}</TableCell>
                                    <TableCell align="right">{String(contact.message)}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => handleDelete(contact._id)}>Delete</Button>
                                        <Button>
                                            <Link to={`/dashboard/contact/update/${contact._id}`}>update</Link>
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
    );
}

export default AdminContact;