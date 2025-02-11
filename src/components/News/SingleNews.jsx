
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetNewsByIdQuery } from '../../features/news/newsApi';

function SingleNews() {
    const{ id } = useParams();
    console.log("single news id ",id);
    const { data, error, isLoading } = useGetNewsByIdQuery(id);

    console.log("single news ", data);
    const actualData = data?.data;
  return (
    <div>
        {
            data && <div className='flex flex-col items-center'>
                <div className='w-[30vw] shadow-lg bg-white border border-slate-300 my-[4rem] px-[3rem] py-[3rem] flex flex-col gap-[1rem]'>
                  <h1 className='text-3xl font-bold text-blue-950'>{actualData.title}</h1>
                  <img src={actualData.image} alt="news image" />
                  <p>{actualData.description}</p>
                </div>
            </div>
        }
    </div>
  )
}

export default SingleNews