
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const serviceApi = createApi({
    reducerPath:'serviceApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/s',
        credentials:'include'
    }),
    endpoints:(builder)=>({
        createService:builder.mutation({
            query:(service)=>({
                url:'/create-service',
                method:'POST',
                body:service
            })
        }),
        getServices:builder.query({
            query:()=>({
                url:'/services',
                method:'GET'
            })
        }),
        getServiceById:builder.query({
            query:(id)=>({
                url:`/services/${id}`,
                method:'GET'
            })
        }),
        updateService:builder.mutation({
            query:({id,service})=>({
                url:`/services/${id}`,
                method:'PUT',
                body:service
            })
        }),
        deleteService:builder.mutation({
            query:(id)=>({
                url:`/services/${id}`,
                method:'DELETE' 
            })
        })
    })
})

export const { useCreateServiceMutation, useGetServicesQuery, useGetServiceByIdQuery, useUpdateServiceMutation, useDeleteServiceMutation } = serviceApi;

export default serviceApi;