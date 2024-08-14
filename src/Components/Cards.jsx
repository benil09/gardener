import React from 'react'

function Cards({data,refrence}) {

   

    



    return ( 
        <div  className='p-10   '>
        <div className=' relative shadow-2xl drop-shadow-lg w-10vh h-[70%] rounded-[20px] text-white  px-8 py-10   bg-green-800/70  overflow-hidden '>


        
        <h2 className='text-[2rem] text-center font-bold underline'>{data.title} </h2>

        <div className="img flex justify-center ">

            
            <img className='h-30 w-40 p-3 ' src={data.url} alt="" />

        </div>

        <h2 className='text-[3rem] text-center font-bold '>{data.tempData} </h2>


            

        
        

        <p className='text-sm mt-5 font-semibold leading-tight'>{data.description}</p>
        <div className="data flex items-center  mt-5 justify-between ">
               

              
              

        </div>


           


          
           

        </div>
     
   </div>
    
    );
}

export default Cards;