
import { current } from '@reduxjs/toolkit';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Pagination({ totalPosts, postperPage, setCurrentPage, currentPage }) {
    console.log("total posts ", totalPosts);
    console.log("post per page ", postperPage)
    let pages=[];
    for( let i=1; i<= Math.ceil(totalPosts/postperPage); i++ )
    {
        pages.push(i);
    }
    console.log("pages ", pages);
    const handlePreviousPage = () => {
        if(currentPage == 1)
        {
            setCurrentPage(1);
        }
        else{
            setCurrentPage(currentPage-=1);
        }
    }

    const handleNextPage = () => {
        if(currentPage >= pages.length){
            setCurrentPage(pages.length);
        }else{
            setCurrentPage(currentPage+=1)
        }
    }
  return (
    <div className='relative w-[45vw]'>
        <button onClick={handlePreviousPage} className='absolute left-0 text-blue-500 flex gap-[0.5rem] items-center'>
            <span>Previous Page</span>
            <FaArrowRight />
        </button>
        <div className='absolute left-[40%]'>
            {
                pages && pages.map((page, index)=>{
                    return <button onClick={()=>setCurrentPage(page)}>
                        <span className='text-blue-600 cursor-pointer'>{ page }</span>
                        { index < pages.length-1 && <span className='px-[0.5rem]'>-</span> }
                    </button>
                })
            }
        </div>
        <button onClick={handleNextPage} className='absolute right-0 text-blue-500 flex gap-[0.5rem] items-center'>
            <span>Next Page</span>
            <FaArrowRight />
        </button>
    </div>
  )
}

export default Pagination  