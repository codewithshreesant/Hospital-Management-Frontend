
import React, { useState } from 'react'
import { useCreateUserMutation } from '../../features/users/UserApi';
import { useNavigate } from 'react-router-dom';

function Register() {
    let [ createUser, {error, isLoading} ]= useCreateUserMutation();
    let [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterData({ ...registerData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("register data ", registerData);
        try {
            const response = await createUser(registerData);
            console.log("create user response ", response);
            if( response?.data.statusCode === 201 )
            {
                alert("user registered successfully ");
                navigate('/login');
            }
        } catch (error) {
            console.log("Error occured while registering user... ");
        }
    }
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-[1rem]'>
                {/* <h1 className='text-[1.6rem] text-blue-950 font-semibold'>Create your Account</h1> */}
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mt-8 mb-6">
                    Create your Account
                </h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem]'>
                    <div>
                        <input type="text" name='username' id='username' value={registerData.username} onChange={handleChange} placeholder='Enter your username' className='border border-slate-300 shadow-md px-[0.6rem] py-[0.3rem]' />
                    </div>
                    <div>
                        <input type="email" name='email' id='email' value={registerData.email} onChange={handleChange} placeholder='Enter your email' className='border border-slate-300 shadow-md px-[0.6rem] py-[0.3rem]' />
                    </div>
                    <div>
                        <input type="password" name='password' id='password' value={registerData.password} onChange={handleChange} placeholder='Enter your password' className='border border-slate-300 shadow-md px-[0.6rem] py-[0.3rem]' />
                    </div>
                    <div>
                        <button type='submit' className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-[3.5rem]">
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register