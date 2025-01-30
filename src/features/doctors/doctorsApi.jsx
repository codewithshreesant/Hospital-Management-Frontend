
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const doctorsApi = createApi({
    reducerPath : 'doctorsApi',
    baseQuery : fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/d',
        credentials:'include'
    }),
    endpoints : ( builder ) => ({
        createDoctor : builder.mutation({
            query : ( doctor ) =>({
                url:'/create-doctor',
                method:'POST',
                body:doctor 
            })
        }),
        getDoctors : builder.query({
            query: () => ({
                url:'/doctors',
                method:'GET'
            })
        }),
        getDoctorById : builder.query({
            query : (id) => ({
                url:`/doctor/${id}`,
                method:'GET'
            })
        }),
        updateDoctor : builder.mutation({
            query:({id, doctor}) => ({
                url: `/doctor/${id}`,
                method:'PUT',
                body:doctor
            })
        }),
        deleteDoctor : builder.mutation({
            query : (id) => ({
                url:`/doctor/${id}`,
                method:'DELETE'
            })
        })
    })
})

export const { useCreateDoctorMutation, useGetDoctorsQuery, useGetDoctorByIdQuery, useUpdateDoctorMutation, useDeleteDoctorMutation } = doctorsApi;

export default doctorsApi;