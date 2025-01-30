import React, { useEffect, useState } from 'react'
import TopComp from '../TopComp'
import { useGetBlogsQuery, useGetRecentBlogsQuery } from '../../features/blogs/blogApi'
import { FaArrowRight } from "react-icons/fa6";
import RecentBlogs from '../RecentBlogs';
import Pagination from '../Pagination';


function News() {
  let [currentPage, setCurrentPage ] = useState(1);
  let [ postPerPage, setPostPerPage ] = useState(5);
  
  let { data, error, isLoading } = useGetBlogsQuery();
  console.log("news data ", data?.data)
  
  let lastPostIndex = currentPage * postPerPage;
  let firstPostIndex = lastPostIndex - postPerPage;
  let currentPosts = data?.data.slice(firstPostIndex, lastPostIndex);
  
  return (
    <div>
      <TopComp name='News' path='/images/top.jpg' desc='Blog Posts'/>
      <div className='grid grid-cols-[60vw_20vw]'>
        <div className='flex flex-col items-center my-[4rem] gap-[2rem]'>
          {
            data && currentPosts?.map((blog,index)=>{
              return <div className='w-[45vw]'>
                <img src={blog.image} alt="blog image" className='w-full h-[55vh]' />
                <div className='flex gap-[1rem]'>
                    <h2>{blog.createdAt}</h2>
                    <p>By {blog.author}</p>
                    <p>seen {blog.seen}</p>
                    <p>
                      reaction {blog.reaction}
                    </p>
                </div>
                <h1 className='text-[2.3rem] font-semibold text-blue-900'>{blog.title}</h1>
                <p>{blog.description}</p>
                <button className='flex items-center gap-[0.5rem] rounded-3xl bg-blue-200 px-[1rem] py-[0.6rem]'><span className='text-left text-blue-950 font-semibold'>Read More</span><FaArrowRight /></button>
              </div>
            })
            
          }
          {
            data && <Pagination totalPosts={data?.data.length} postperPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          }
        </div>
        <RecentBlogs />
      </div>
    </div>
  )
}

export default News