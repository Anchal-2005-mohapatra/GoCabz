import React, { useEffect } from 'react';
import car from "../../Assets/Vehicle/car.png";
import car1 from "../../Assets/Vehicle/car2.png";
import car2 from "../../Assets/Vehicle/car3.png";
import seat from "../../Assets/Vehicle/seat.png";
import door from "../../Assets/Vehicle/door.png";
import mannual from "../../Assets/Vehicle/mannual.png";
import box from "../../Assets/Vehicle/tool.png";
import AOS from "aos";
import "aos/dist/aos.css";
const vehicle = [
  {
    id:1,
    img:car,
    name:"Toyota Innova"
  },
  {
    id:2,
    img:car1,
    name:"Toyota Innova"
  },
  {
    id:3,
    img:car2,
    name:"Toyota Innova"
  },
]
const Vehicle = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:200,
      offset:100,
      once:false
    });
  },[])
  return (
    <div>
      <div className='px-6 md:px-8 lg:px-9'>
        <div className='text-center py-3'>
                <p className='text-2xl font-medium'>Vehicle Service</p>
                <p className='text-[#767676] text-sm md:text-[16px]'> We are providing vehicle service with a experienced driver and a guide, who can help you and can guide you with your every step</p>
            </div>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between' data-aos="fade-down-right" duration="3000">
              {vehicle.map((item)=>(
                <div className='flex flex-col items-center gap-4' key={item.id} >
                   <img src={item.img} alt="" className=' bg-cover bg-center'data-aos="flip-down" />
                   <p className='font-medium text-2xl' data-aos="fade-up" data-aos-anchor-placement="center-bottom">{item.name}</p>
                   <div className='flex gap-5 items-center ' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >
                    <div className='flex flex-col items-center justify-center'>
                      <img src={seat} alt="" className='h-10' />
                      <p className='text-xs'>7</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <img src={mannual} alt="" className='h-10' />
                      <p className='text-xs'>Manual</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <img src={box} alt="" className='h-10' />
                      <p className='text-xs'>4</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <img src={door} alt="" className='h-10' />
                      <p className='text-xs'>4</p>
                    </div>
                   </div>
                   </div>
              ))}
              
            </div>
        </div>  
    </div>
  )
}

export default Vehicle