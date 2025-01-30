import React from 'react'
import { useGetRecentBlogsQuery } from '../features/blogs/blogApi';
import Categories from './Category';


function RecentBlogs() {
     let { data, error, isLoading } = useGetRecentBlogsQuery();
      console.log("recent blogs ", data);
  return (
    <div>
        <div className='border rounded border-slate-300 shadow-md px-2 py-2 h-[70vh] my-[4rem]'>
            <h1 className='font-semibold text-blue-950 text-[2rem]'>Recent Posts</h1>
          <div className='flex flex-col gap-[2rem]'>
              {
                data && data?.data.map((recent, index)=>{
                  return <div className='flex gap-[0.5rem]'>
                    <img src={recent.image} alt="recent image" className='h-[10vh] w-[10vw]' />
                      <div>
                          <p className='text-blue-700'>{recent.createdAt}</p>
                          <h2>{recent.title}</h2>
                          {/* <p>{(recent.description).slice(0,30)}</p> */}
                      </div>
                  </div>
                })
              }
          </div>
        </div>
        <Categories />
    </div>
  )
}

export default RecentBlogs