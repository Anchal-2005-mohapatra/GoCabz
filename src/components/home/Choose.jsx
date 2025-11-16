import React from 'react';
import guide from "../../Assets/Images/tour-guide1.png";
import satisfaction from "../../Assets/Images/satisfaction1.png";
import price from "../../Assets/Images/low-price.png";
import driver from "../../Assets/Images/driver.png";


const Choose = () => {
    return (
        <div className='px-6 md:px-8 lg:px-9'>
            <div className='text-center py-3'>
                <p className='text-3xl font-bold py-2'>Why Choose Us?</p>
                <p className='text-[#767676] text-sm md:text-[16px] font-medium'> We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5'>
                <div className='text-[#FFFFFF] bg-[#FBA710] flex flex-col justify-center items-center py-3 px-3 rounded space-y-2 transform duration-300 hover:scale-95'>
                    <img src={guide} alt="" className='h-20' />
                    <div className='text-center'>
                        <p className='text-lg font-medium'>Local Tour guide</p>
                        <p>They know the safest routes and areas, helping you avoid tourist traps or unsafe spots.</p>
                    </div>
                </div>
                <div className='bg-[#FFFFFF] flex flex-col justify-center items-center py-3 px-3 rounded border border-[#CCCACA] space-y-2 transform duration-300 hover:scale-95'>
                    <img src={satisfaction} alt="" className='h-20' />
                    <div className='text-center'>
                        <p className='text-lg text-[#3F3F3F] font-medium'>Customer Satisfaction</p>
                        <p className='text-[#767676]'>They know the safest routes and areas, helping you avoid tourist traps or unsafe spots.</p>
                    </div>
                </div>
                <div className='bg-[#FFFFFF] flex flex-col justify-center items-center py-3 px-3 rounded border border-[#CCCACA] space-y-2 transform duration-300 hover:scale-95'>
                    <img src={price} alt="" className='h-20' />
                    <div className='text-center'>
                        <p className='text-lg text-[#3F3F3F] font-medium'>Affordable Price</p>
                        <p className='text-[#767676]'>They know the safest routes and areas, helping you avoid tourist traps or unsafe spots.</p>
                    </div>
                </div>
                <div className=' bg-[#FFFFFF] flex flex-col justify-center items-center py-3 px-3 rounded border border-[#CCCACA] space-y-2 transform duration-300 hover:scale-95'>
                    <img src={driver} alt="" className='h-16' />
                    <div className='text-center '>
                        <p className='text-lg text-[#3F3F3F] font-medium'>Professional Driver</p>
                        <p className='text-[#767676]'>They know the safest routes and areas, helping you avoid tourist traps or unsafe spots.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Choose;