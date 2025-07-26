import React from 'react'
function Background() {
    return (
        <div className='absolute border z-[2] w-full h-full bg-[url("/src/assets/green.png")] bg-cover bg-center'>
            <div className="flex justify-center text-xl sm:text-2xl md:text-4xl absolute top-0 w-full py-6 sm:py-8 font-semibold text-green-700">Soil Details</div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter font-semibold text-green">Gardener</h1>
        </div>
    );
}

export default Background;