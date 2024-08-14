import React from 'react'
function Background() {
    return ( 


        <div className='absolute border z-[2] w-full h-full  bg-[url("/src/assets/green.png")]  object-fit'>
        <div className="flex justify-center  text-[5vw] absolute top-0 w-full py-6 font-semibold text-green-700">Soil Details</div>
 
 <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[12vw] leading-none tracking-tighter font-semibold   text-green ">Gardener</h1>
     </div>
     );
}

export default Background;