import React,{useEffect} from 'react';
import img from "../../Assets/Special/img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialOffer = () => {
    useEffect(()=>{
      AOS.init({
        duration:1000,
        delay:200,
        offset:100,
        once:false
      });
    },[])
  return (
    <div className=' w-full'>

      {/* for small screen. */}
      <div className='bg-[#FFFDF5] block md:hidden lg:hidden'>
        <div className='px-6 flex flex-col justify-center items-center '>
          <img src={img} alt="" className=' bg-cover bg-center 'data-aos="fade-up" />
          <div className='text-center space-y-2 '>
            <p className='font-bold text-2xl '>Get special offers, and more from Traveler</p>
            <p className='text-[#69727D] '>Subscribe to see secret deals prices
              drop the moment you sign up!</p>
            <div className='grid grid-cols-2   border border-[#DFDFDF] shadow-lg  rounded py-2 bg-white px-2 mt-7'>
              <input type="text" name="" placeholder='Email Id' id="" className='outline-none' />
              <button className='bg-[#277e01] rounded px-3 py-2 text-white font-medium '>Subscribe</button>
            </div>
          </div>
        </div>
      </div>


      {/* for large screen. */}
      <div className='relative'>
        <div className='hidden md:flex  my-16'>
          <div className='  bg-[#FCC101] h-[300px] md:w-[30%] lg:w-[20%]'>
          </div>
          <div className='absolute md:left-4  lg:left-32 xl:left-64   bottom-0'>
            <img src={img} alt="" className=' bg-cover bg-center h-[314px] object-cover 'data-aos="fade-right" />
          </div>
          <div className='flex h-[300px] bg-[#FFFDF5] w-[80%] flex-col items-center justify-center space-y-3 text-center'>
            <p className='font-bold text-2xl'>Get special offers, and more from Traveler</p>
            <p className='text-[#69727D]  text-center w-[200px] md:w-[300px]'>Subscribe to see secret deals prices
              drop the moment you sign up!</p>
            <div className='flex justify-between border border-[#DFDFDF] shadow-lg rounded-full md:w-[80%] lg:w-[50%] py-2 bg-white px-3'>
              <input type="text" name="email" placeholder='Email Id' id="" className='outline-none' />
              <button className='bg-[#FCC101] rounded-full px-3 py-2 text-white font-medium '>Subscribe</button>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default SpecialOffer