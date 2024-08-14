import React, { useRef } from 'react'
import Cards from './Cards';
function Container() {

    const ref = useRef(null);

    const data=[{
        title:"Temprature",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam velit mollitia inventore nisi exercitationem quae officiis illum ex enim, placeat similique repellat reprehenderit sit veniam! Repellendus itaque quaerat dolorum nemo!   ",

        tempData:"24°C",
                url:"/src/assets/sunny.png"
        
        


    },
    {
        title:"Moisture",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam velit mollitia inventore nisi exercitationem quae officiis illum ex enim, placeat similique repellat reprehenderit sit veniam! Repellendus itaque quaerat dolorum nemo!   ",

        tempData:"36%",
        url:"/src/assets/soilMoistures.png"


    },
    {
        title:"Humidity",
        description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam velit mollitia inventore nisi exercitationem quae officiis illum ex enim, placeat similique repellat reprehenderit sit veniam! Repellendus itaque quaerat dolorum nemo!   ",

        tempData:"46%",
        url:"/src/assets/soil-icon-14.png"


    }




]

    


   

   
    return ( 
        <>
       
       <div className="absolute rounded-[20px] left-[5%] top-[10%] flex items-center   z-30 container border-inherit h-[80%] bg-inherit min-w-60   ">




       
         {data.map((item,index)=>(<Cards data={item} reference={ref} />))}
    

        
       </div>
        
        
        </>



      );
}

export default Container;