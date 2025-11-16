import React from 'react'
import bg from '../../Assets/Destination/bg.png';
import bg0 from "../../Assets/Destination/Background.png";
import bg1 from "../../Assets/Destination/Background (1).png";
import bg2 from "../../Assets/Destination/Background (2).png";
import bg3 from "../../Assets/Destination/Background (3).png";
// import Gradually from "./Gradually"
const review = [
    {
        id: 1,
        img: bg0,
        people: 500,
        review: "Satisfied Clients"
    },
    {
        id: 2,
        img: bg1,
        people: 1000,
        review: "Place Visited"
    },
    {
        id: 3,
        img: bg2,
        people: 15,
        review: "State Visited"
    },
    {
        id: 4,
        img: bg3,
        people: 100,
        review: "Positive reviews"
    },

]
const Review = () => {
  return (
    <div className=''>     
          <div className='py-16 flex flex-col  gap-6 sm:grid sm:grid-cols-2  md:grid-cols-3 items-center lg:flex lg:flex-row lg:flex-1 justify-evenly  bg-[#FFD25D]/90 bg-blend-color-burn px-6 md:px-8 lg:px-9 bg-cover bg-center object-cover' style={{backgroundImage:`url(${bg})`}}>
                        {review.map((item) => (
                            <div key={item.id} className='flex justify-center items-center '>
                                <div className='flex flex-col gap-4 items-center justify-center md:flex-row md:gap-4' >
                                    <img src={item.img} alt="" className='h-20' />
                                    <div className='text-center space-y-2'>
                                        <p className=' font-bold text-3xl md:text-4xl'>{item.people}+ </p>
                                        <p className='font-medium md:tracking-tighter text-sm'>{item.review}</p>
                                       
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                     {/* <p>count increase</p>
                                        <Gradually targrtNo={100} duration={3000}/> */}
                                        </div>
  )
}

export default Review