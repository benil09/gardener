import React from 'react'

function Cards({data,refrence}) {
    return ( 
        <div className='p-4 sm:p-6 md:p-10'>
            <div className='relative shadow-2xl drop-shadow-lg w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto h-auto rounded-[20px] text-white px-6 sm:px-8 py-8 sm:py-10 bg-green-800/70 overflow-hidden'>
                <h2 className='text-xl sm:text-2xl md:text-3xl text-center font-bold underline'>{data.title}</h2>

                <div className="img flex justify-center mt-4">
                    <img className='w-full max-w-[160px] h-auto p-3' src={data.url} alt="" />
                </div>

                <h2 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold mt-4'>{data.tempData}</h2>

                <p className='text-sm sm:text-base mt-5 font-semibold leading-tight text-center'>{data.description}</p>

                <div className="data flex items-center mt-5 justify-between">
                    {/* Future data section */}
                </div>
            </div>
        </div>
    );
}

export default Cards;