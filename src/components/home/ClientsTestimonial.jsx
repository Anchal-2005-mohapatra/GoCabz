import React from 'react';
import { SiComma } from "react-icons/si";
import { IoIosStar } from "react-icons/io";
import line from "../../Assets/Images/Line.png";
import girl from "../../Assets/Images/girl.png";


const testimonial = [
    {
        id: 1,
        rating: "(4.0)",
        desc: "Traveling with Gocabz was truly a dream come true! From the moment we arrived, everything was perfectly organized, and the attention to detail was impressive. Our guide was knowledgeable and friendly, showing us hidden gems we would never have found on our own.",
        img: girl,
        name: "Taniya Sharma",
        professional: "Doctor"
    },
    {
        id: 2,
        rating: "(4.0)",
        desc: "Traveling with Gocabz was truly a dream come true! From the moment we arrived, everything was perfectly organized, and the attention to detail was impressive. Our guide was knowledgeable and friendly, showing us hidden gems we would never have found on our own.",
        img: girl,
        name: "Taniya Sharma",
        professional: "Doctor"
    },
    {
        id: 3,
        rating: "(4.0)",
        desc: "Traveling with Gocabz was truly a dream come true! From the moment we arrived, everything was perfectly organized, and the attention to detail was impressive. Our guide was knowledgeable and friendly, showing us hidden gems we would never have found on our own.",
        img: girl,
        name: "Taniya Sharma",
        professional: "Doctor"
    },
]
const ClientsTestimonial = () => {
    return (
        <div> <div className='px-6 md:px-8 lg:px-9 py-4'>
            <p className='text-center text-2xl font-medium py-5'>Clients Testimonial </p>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {testimonial.map((item) => (
                    <div key={item.id} className={`${item.id === 1 ? "bg-[#FFFBEF] " : "bg-white"} px-4 py-5 space-y-3 border border-[#FBA710] transform duration-300 hover:scale-95 `} >
                        <div className='flex items-center justify-between' >
                            <div className='flex gap-4 items-center'>
                                <p className='text-[#5B5A5A]'>{item.rating}</p>
                                <span className='flex gap-2 items-center'>
                                    <span className='text-[#3D7D26]'><IoIosStar /></span>
                                    <span className='text-[#3D7D26]'><IoIosStar /></span>
                                    <span className='text-[#3D7D26]'><IoIosStar /></span>
                                    <span className='text-[#3D7D26]'><IoIosStar /></span>
                                    <span className='text-[#DAD9D9]'><IoIosStar /></span>
                                </span></div>
                            <div className='flex'><SiComma color='' size={20} className='text-[#FBA710]' />
                                <SiComma size={20} className='text-[#FBA710]' /></div>
                        </div>
                        <p className='text-[#5B5A5A] pt-4'>{item.desc}</p>
                        <img src={line} alt="" />
                        <div className='flex items-center gap-3'>
                            <img src={item.img} alt="" className='h-12' />
                            <div>
                                <p className='text-lg'>{item.name} </p>
                                <p className='text-[#5B5A5A]'>{item.professional}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>


        </div></div>
    )
}

export default ClientsTestimonial