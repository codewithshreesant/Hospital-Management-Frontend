
import React from 'react'
import { use } from 'react'
import { useGetNewsQuery } from '../features/news/newsApi'
import { Link } from 'react-router-dom';

function HomeNews() {
    let { data, error, isLoading } = useGetNewsQuery();
    console.log("news data ", data);
  return (
    <div className='flex flex-col items-center gap-[2rem] my-[4.5rem]'>
        <h1 className='text-3xl font-semibold text-blue-900'>News</h1>
        <div className='w-full flex justify-center'>
            <div className=' w-[80vw] grid grid-cols-2 gap-[1.5rem]'>
                {
                    data && data?.data.slice(0,4).map((news, index)=>{
                        return <Link to={`/singlenews/${news._id}`}>
                            <div className='flex gap-[0.6rem]'>
                                <img src={news.image} alt="news image" className='h-[150px] w-[150px]'/>
                                <div>
                                    <h1>{news.title}</h1>
                                    <p>{(news.description).slice(0,100)}</p>
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default HomeNews