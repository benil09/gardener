import React, { useRef } from 'react'
import Cards from './Cards';

function Container() {
    const ref = useRef(null);

    const data = [
        {
            title: "Temprature",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam velit mollitia inventore nisi exercitationem quae officiis illum ex enim, placeat similique repellat reprehenderit sit veniam! Repellendus itaque quaerat dolorum nemo!   ",
            tempData: "24°C",
            url: "/src/assets/sunny.png"
        },
        {
            title: "Moisture",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam velit mollitia inventore nisi exercitationem quae officiis illum ex enim, placeat similique repellat reprehenderit sit veniam! Repellendus itaque quaerat dolorum nemo!   ",
            tempData: "36%",
            url: "/src/assets/soilMoistures.png"
        },
        {
            title: "Humidity",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam velit mollitia inventore nisi exercitationem quae officiis illum ex enim, placeat similique repellat reprehenderit sit veniam! Repellendus itaque quaerat dolorum nemo!   ",
            tempData: "46%",
            url: "/src/assets/soil-icon-14.png"
        }
    ];

    return ( 
        <>
            <div className="relative flex flex-wrap justify-center gap-6 p-4 sm:p-6 md:p-8 w-full max-w-screen-xl mx-auto z-30">
                {data.map((item, index) => (
                    <Cards key={index} data={item} reference={ref} />
                ))}
            </div>
        </>
    );
}

export default Container;