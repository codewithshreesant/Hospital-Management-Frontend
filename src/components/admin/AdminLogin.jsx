
import React, { useState } from 'react'
import { useAdminLoginMutation } from '../../features/users/UserApi';
import { useNavigate } from 'react-router-dom';
function AdminLogin() {
    let navigate = useNavigate();
    let[ adminLogin, {error, isLoading} ] = useAdminLoginMutation();
    let [adminData, setAdminData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAdminData({ ...adminData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("admin data ", adminData);
        const response = await adminLogin(adminData);
        console.log("admin Login response ", response);
        if( response.data?.message === "Admin Login Successfull ")
        {
            alert(" admin Login Successfull ");     
            navigate('/dashboard');
        }
    }

    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <div className='w-[30vw] flex flex-col items-center gap-[2rem]'>
                <h2 className="text-3xl font-extrabold text-center text-blue-900 mt-12 mb-8 border-b-4 border-blue-900 pb-2">
                    Admin Login
                </h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem] items-center'>
                    <div>
                        <input type="text" name='username' id='username' value={adminData.username} onChange={handleChange} placeholder='Enter the username' className='border border-slate-300 shadow-md px-[0.6rem] py-[0.3rem]' />
                    </div>
                    <div>
                        <input type="password" name='password' id='password' value={adminData.password} onChange={handleChange} placeholder='Enter the password' className='border border-slate-300 shadow-md px-[0.6rem] py-[0.3rem]' />
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin