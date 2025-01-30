
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/b',
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        createBlog: builder.mutation({
            query: (blog) => ({
                url: '/create-blog',
                method: 'POST',
                body: blog
            })
        }),
        getBlogs: builder.query({
            query: () => ({
                url: '/blogs',
                method: 'GET'
            })
        }),
        getBlogById: builder.query({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: 'GET'
            })
        }),
        updateBlog: builder.mutation({
            query: ({ id, blog }) => ({
                url: `/blogs/${id}`,
                method: 'PUT',
                body: blog
            })
        }),
        getRecentBlogs: builder.query({
            query: () => ({
                url: '/recentblogs',
                method: 'GET'
            })
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: 'DELETE'
            })
        })
    })
})


export const { useCreateBlogMutation, useGetBlogsQuery, useGetBlogByIdQuery, useUpdateBlogMutation, useDeleteBlogMutation, useGetRecentBlogsQuery } = blogApi;

export default blogApi;