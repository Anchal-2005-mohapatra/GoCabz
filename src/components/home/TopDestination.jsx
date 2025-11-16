import React, { useEffect } from 'react';
import odisha from "../../Assets/Destination/odisha.png";
import bihar from "../../Assets/Destination/bihar.png";
import hydrabad from "../../Assets/Destination/hydrabad.png";
import andhra from "../../Assets/Destination/andhra.png";
import west from "../../Assets/Destination/west.png";
import AOS from "aos";
import "aos/dist/aos.css";
const destination = [
    {
        id: 1,
        img: odisha,
        name: "Odisha",
        place: "Konark Temple"

    },
    {
        id: 2,
        img: bihar,
        name: "Bihar",
        place: "Mahabodhi Temple"

    },
    {
        id: 3,
        img: hydrabad,
        name: "Hyderabad",
        place: "Charminar"

    },
    {
        id: 4,
        img: andhra,
        name: "Andhrapradesh",
        place: "Tirupati Balaji"

    },
    {
        id: 5,
        img: west,
        name: "West Bengal",
        place: "Howrah Bridge"

    }

]

const TopDestination = () => {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            delay:200,
            once:false,
            offset:100
        })
    })
    return (
        <>
            <div className=''>
                <p className='text-center text-3xl font-bold py-2'>Top Destination</p>
                <div className='px-6 md:px-8 lg:px-9 grid grid-cols-1  gap-6 sm:grid-cols-2 md:grid-cols-4 py-5 lg:flex flex-1 md:gap-5 items-center justify-between'>
                    {destination.map((item) => (
                        <div key={item.id} className='flex flex-col items-center justify-center ' >
                            <img src={item.img} alt="" className='bg-cover  bg-center h-40 w-40 md:h-32 md:w-32 lg:h-[190px] lg:w-[200px]' data-aos="flip-up"/>
                            <div className=' text-center'>
                                <p className='text-lg font-medium'>{item.name}</p>
                                <p className='text-[#666666] font-medium'>{item.place}</p>
                            </div>
                        </div>
                    ))}
                </div> 
             
                </div>
          
          

        </>
    )
}

export default TopDestination;