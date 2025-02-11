
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

const appointmentApi = createApi({
    reducerPath : 'appointmentApi',
    baseQuery : fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/a/',
        credentials:'include' 
    }),
    endpoints:(builder)=>({
        createAppointment:builder.mutation({
            query:(appointment)=>({
                url:'/create-appointment',
                method:'POST',
                body:appointment
            })
        }),

        getAppointments:builder.query({
            query:(id)=>({
                url:'/appointments',
                method:'GET'
            })
        }),

        getAppointmentById:builder.query({
            query:(id)=>({
                url:`/appointment/${id}`,
                method:'GET'
            })
        }),

        updateAppointment:builder.mutation({
            query:({id, appointment})=>({
                url:`/appointment/${id}`,
                method:'PUT',
                body:appointment
            })
        }),

        deleteAppointment:builder.mutation({
            query:(id)=>({
                url:`/appointment/${id}`,
                method:'DELETE'
            })
        })
    })
})

export const { useCreateAppointmentMutation, useGetAppointmentsQuery, useGetAppointmentByIdQuery, useUpdateAppointmentMutation, useDeleteAppointmentMutation } = appointmentApi;

export default appointmentApi;