
import React, { useState } from 'react'
import { useLoginUserMutation } from '../../features/users/UserApi';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../slice/user/UserSlice';

function Login() {
    let [loginData, { error, isLoading }] = useLoginUserMutation();
    let dispatch = useDispatch();

    let[ LoginData, setLoginData] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setLoginData({...LoginData, [name]:value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("login data ", LoginData);
        try {
            const response = await loginData(LoginData);
            console.log("login response ", response);
            if(response?.data.statusCode === 200)
            {
                alert('Login Successfull');
                dispatch(saveUser(response.data.data))
                navigate('/');
            }
        } catch (error) {
            console.log("Error occured while login ", error);
        }
    }

  return (
    <div className='h-[100vh] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-[1rem]'>
                {/* <h1 className='text-[1.6rem] text-blue-950 font-semibold'>Create your Account</h1> */}
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mt-8 mb-6">
                    Welcome Back
                </h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem]'>
                    <div>
                        <input type="email" name='email' id='email' value={LoginData.email} onChange={handleChange} placeholder='Enter your email' className='border border-slate-300 shadow-md px-[0.6rem] py-[0.3rem]' />
                    </div>
                    <div>
                        <input type="password" name='password' id='password' value={LoginData.password} onChange={handleChange} placeholder='Enter your password' className='border border-slate-300 shadow-md px-[0.6rem] py-[0.3rem]' />
                    </div>
                    <div>
                        <button type='submit' className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-[3.5rem]">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login