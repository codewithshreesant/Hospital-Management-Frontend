
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/u',
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (user) => ({
                url: '/create-user',
                method: 'POST',
                body: user
            })
        }),
        getUsers:builder.query({
            query:()=>({
                url:'/users',
                method:'GET'
            })
        }),
        loginUser:builder.mutation({
            query:(user)=>({
                url:'/login',
                method:'POST',
                body:user
            })
        }),
        logoutUser:builder.mutation({
            query:()=>({
                url:'/logout',
                method:'POST'
            })
        }),
        adminLogin:builder.mutation({
            query:(adminData)=>({
                url:'/admin',
                method:'POST',
                body:adminData
            })
        })
    })
})

export const { useCreateUserMutation, useGetUsersQuery, useLoginUserMutation, useLogoutUserMutation, useAdminLoginMutation } = userApi;


export default userApi;  