
import React from 'react'
import { useGetBlogByIdQuery } from '../../features/blogs/blogApi'
import { useParams } from 'react-router-dom';

function SingleBlog() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetBlogByIdQuery(id);
    console.log("single Blog data ", data);
    const actualBlog = data?.data
  return (
    <div>
        {
            data && <div className='flex flex-col items-center'>
                <div className='w-[30vw] shadow-lg bg-white border border-slate-300 my-[4rem] px-[3rem] py-[3rem] flex flex-col gap-[1rem]'>
                  <h1 className='text-3xl font-bold text-blue-950'>{actualBlog.title}</h1>
                  <img src={actualBlog.image} alt="singleblog image" className="h-[80vh]"/>
                  <p>{actualBlog.description}</p>
                </div>
            </div>
        }
    </div>
  )
}

export default SingleBlog