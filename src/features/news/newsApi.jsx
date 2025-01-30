
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const newsApi = createApi({
    reducerPath:'newsApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/n',
        credentials:'include'
    }),
    endpoints:(builder)=>({
        createNews:builder.mutation({
            query:(news)=>({
                url:'/create-news',
                method:'POST',
                body:news
            })
        }),
        getNews:builder.query({
            query:()=>({
                url:'/news',
                method:'GET'
            })
        }),
        getNewsById:builder.query({
            query:(id)=>({
                url:`/news/${id}`,
                method:'GET'
            })
        }),
        updateNews:builder.mutation({
            query:({ id, news })=>({
                url:`/news/${id}`,
                method:'PUT',
                body:news
            })
        }),
        deleteNews:builder.mutation({
            query:(id)=>({
                url:`/news/${id}`,
                method:'DELETE'
            })
        })
    }) 
})

export const { useCreateNewsMutation, useGetNewsQuery, useGetNewsByIdQuery, useUpdateNewsMutation, useDeleteNewsMutation } = newsApi;

export default newsApi;