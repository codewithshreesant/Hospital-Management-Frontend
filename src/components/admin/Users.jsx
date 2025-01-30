import React from 'react'
import { useGetUsersQuery } from '../../features/users/UserApi'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Users() {
    let { data, error, isLoading } = useGetUsersQuery();
    console.log("admin users data ", data);
    return (
        <div>
            <h1>Users data</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>username</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">isAdmin</TableCell>
                            <TableCell align="right">isLoggedIn</TableCell>
                            {/* <TableCell align="right">Protein&</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data && data?.data.map((user, index) => {
                                return <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.username}
                                    </TableCell>
                                    <TableCell align="right">{user.email}</TableCell>
                                    <TableCell align="right">{String(user.isAdmin)}</TableCell>
                                    <TableCell align="right">{String(user.isLoggedIn)}</TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Users