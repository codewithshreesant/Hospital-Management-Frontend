import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetServiceByIdQuery } from '../../features/services/ServiceApi';

function SingleService() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetServiceByIdQuery(id);
    console.log('single service ',  data);
    const actualService = data?.data;
  return (
    <div>
        {
            data && <div className='flex flex-col items-center'>
                <div className='w-[30vw] shadow-lg bg-white border border-slate-300 my-[4rem] px-[3rem] py-[3rem] flex flex-col gap-[1rem]'>
                  <h1 className='text-3xl font-bold text-blue-950'>{actualService.title}</h1>
                  <p>{actualService.description}</p>
                </div>
            </div>
        }
    </div>
  )
}

export default SingleService