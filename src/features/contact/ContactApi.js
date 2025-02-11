import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/c',
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        createContact: builder.mutation({
            query: (contact) => ({
                url: '/create-contact',
                method: 'POST',
                body: contact
            })
        }),

        getContacts: builder.query({
            query: () => ({
                url:'/contacts',
                method:'GET'
            })
        }),

        getContactById: builder.query({
            query: (id) => ({
                url: `/contact/${id}`,
                method: 'GET'
            })
        }),


        updateContact: builder.mutation({
            query: ({ id, contact }) => ({
                url: `/contact/${id}`,
                method: 'PUT',
                body: contact
            })
        }),

        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contact/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const { useCreateContactMutation, useGetContactsQuery, useGetContactByIdQuery, useUpdateContactMutation, useDeleteContactMutation } = contactApi;

export default contactApi;