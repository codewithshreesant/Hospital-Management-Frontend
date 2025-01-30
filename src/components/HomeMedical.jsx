
import React from 'react'

function HomeMedical() {
    return (
        <div>
            <div className="w-full flex flex-col items-center overflow-hidden mt-[6rem]">  
                <div className=" w-[60vw] flex flex-col items-center justify-center h-full gap-[1rem]">
                    <h1 className="text-2xl font-bold mb-4 uppercase tracking-wider">Welcome to Meddical</h1>
                    <h2 className='capitalize text-3xl'>A great place to receive care</h2>
                    <p className="text-xl mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem itaque quam quo perferendis accusamus distinctio pariatur laboriosam, consequatur earum unde suscipit. Distinctio adipisci et recusandae dolorem, ipsum neque! Mollitia.
                    </p>
                    <button className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-700">
                        Learn More
                    </button>
                    <img
                        src="/images/welcome_meddical.jpeg"
                        alt="Background"
                    />
                </div>
            </div>
        </div>
    )
}


export default HomeMedical;