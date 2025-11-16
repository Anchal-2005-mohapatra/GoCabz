import React, { useEffect } from 'react';
import about from "../Assets/About/about.png";
import Choose from "../components/home/Choose";
import washington from "../Assets/About/wash.png";
import man1 from "../Assets/About/man1.png";
import man2 from "../Assets/About/man2.png";
import man3 from "../Assets/About/man3.png";
import girl1 from "../Assets/About/girl1.png";
import girl2 from "../Assets/About/girl2.png";
import vision from "../Assets/About/vision.png";
import mission from "../Assets/About/mission.png";
import ClientsTestimonial from '../components/home/ClientsTestimonial';
import Vehicle from "../components/home/Vehicle";
import SpecialOffer from "../components/home/SpecialOffer";
import AOS from "aos";
import "aos/dist/aos.css";
const team = [
    {
        id: 1,
        img: man1,
        name: "Rohit Mishra",
        position: "Manager"
    },
    {
        id: 2,
        img: man2,
        name: "Rohit Mishra",
        position: "Manager"
    },
    {
        id: 3,
        img: man3,
        name: "Rohit Mishra",
        position: "Manager"
    },
    {
        id: 4,
        img: girl1,
        name: "Rohit Mishra",
        position: "Manager"
    },
    {
        id: 5,
        img: girl2,
        name: "Rohit Mishra",
        position: "Manager"
    },
]
const About = () => {
    useEffect(()=>{
        window.scrollTo({top:0,
            behavior:'smooth'
        });
        AOS.init({
            once:false,
            offset:100,
            duration:1000,
            delay:200
        });
    },[]);
    return (
        <div>
            <div className='bg-cover bg-center w-full h-[250px] lg:h-[316px] flex  flex-col items-center justify-center' style={{ backgroundImage: `url(${about})` }}>
                <p className='text-black text-3xl font-medium'>About Us</p>
                <span className='text-[#292929] font-semibold'>Home / About Us</span>
            </div>
            <div className='px-6 md:px-8 lg:px-9 flex flex-col gap-2 md:grid  md:grid-cols-2 md:gap-5 py-5'>
                <img src={washington} alt="" className='h-[300px] bg-cover bg-center object-contain ' data-aos="zoom-in"/>
                <div className='space-y-3 pt-8'>
                    <p className='text-[#FCC101] text-sm font-medium'data-aos="fade-down">We are trusted</p>
                    <p className='text-3xl font-medium'data-aos="fade-down">The Wanderer's Guide:
                        Expert Travel Planning</p>
                    <p className='text-[#767676] text-sm'data-aos="fade-down">Our team of experts will work tirelessly to create a customized itinerary that meets your unique needs and preferences, ensuring that every moment is an unforgettable experience.</p>
                    <p className='text-[#767676]'data-aos="fade-down">Don’t miss out on the journey of a lifetime. Book with us today and get ready for an adventure that will leave you breathless!</p>
                    <div className='flex justify-between gap-4'data-aos="fade-down">
                        <div className=''>
                            <p className='text-[#FCC101] text-xl font-medium'>500+</p>
                            <p className='text-[#616161]'>Satisfied Clients </p>
                        </div>
                        <div className='border-r-2 border-[#FCC101]'></div>
                        <div>
                            <p className='text-[#FCC101] text-xl font-medium'>1000+</p>
                            <p className='text-[#616161]'>Place Visited </p>
                        </div>
                        <div className='border-r-2 border-[#FCC101]'></div>
                        <div>
                            <p className='text-[#FCC101] text-xl font-medium'>100%</p>
                            <p className='text-[#616161]'>Positive Reviews </p>
                        </div>
                    </div>
                </div>
            </div>
            <Choose />
            <div>
                <div className='text-center py-3 px-6 md:px-8 lg:px-9'>
                    <p className='text-3xl font-bold py-2'>Meet Our Team</p>
                    <p className='text-[#767676] text-sm md:text-[16px] font-medium'> Our team of experts will work tirelessly to create a customized itinerary that meets your unique needs and preferences, ensuring that every moment is an unforgettable experience.</p>
                    <div>
                        <div className='flex flex-col sm:flex-wrap md:flex-row gap-6 items-center justify-center py-4 '>
                            {team.map((item) => (
                                <div className='space-y-3 ' key={item.id}>
                                    <img src={item.img} alt="" className='h-[200px]'data-aos="flip-right" />
                                    <div className='space-y-2'>
                                        <p className='font-semibold text-lg'>{item.name}</p>
                                        <p className='text-[#666666] text-sm'>{item.position}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className='px-6 md:px-8 lg:px-9'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center gap-3 '>
                    <div className='text-center '>
                        <p className='text-[#FBA710] text-xl font-medium' data-aos="fade-up">VISION</p>
                        <div className=' py-3 space-y-1 flex flex-col items-center'>
                            <hr className='border border-[#FBA710] w-[80%]' />
                            <hr className='border border-[#FBA710] w-[80%]' /></div>
                       
                       <div className='min-w-[200px]'>
                        <p className='text-[#000000B0]' data-aos="fade-up">Our Vision is to expand our service from land to air.To be a trusted leader in the travel industry, known for transforming journeys into unforgettable adventures and creating lifelong memories. We envision a world where travel connects people across cultures, enriches lives, and fosters a deeper understanding of the beauty and diversity around us.</p></div> 
                    </div>
                    <div className='pt-3'>
                        <img src={vision} alt="" className='h-full  bg-cover bg-center object-contain ' data-aos="zoom-in"/>
                    </div>
                </div>

                <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center gap-3 '>
                      <div className='pt-3'>
                        <img src={mission} alt="" className='bg-cover bg-center object-contain' data-aos="zoom-in" />
                    </div>
                    <div className='text-center '>
                        <p className='text-[#FBA710] text-xl font-medium' data-aos="fade-up">Mission</p>
                        <div className='py-3 space-y-1 flex flex-col items-center'>
                            <hr className='border border-[#FBA710] w-[80%]' />
                            <hr className='border border-[#FBA710] w-[80%]' /></div>
                       <div className='min-w-[200px]'>
                        <p className='text-[#000000B0]'data-aos="fade-up">To inspire and empower travelers by offering personalized, seamless, and memorable travel experiences. We aim to bring the world closer to our clients by curating journeys that are enriching, sustainable, and culturally immersive, while ensuring exceptional service and a hassle-free planning process.</p></div> 
                    </div>
                  
                </div>
                <div className='md:hidden lg:hidden xl:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center gap-3 '>
                     
                    <div className='text-center '>
                        <p className='text-[#FBA710] text-xl font-medium'>Mission</p>
                        <div className='py-3 space-y-1 flex flex-col items-center'>
                            <hr className='border border-[#FBA710] w-[80%]' />
                            <hr className='border border-[#FBA710] w-[80%]' /></div>
                        <p className='text-[#000000B0]'>To inspire and empower travelers by offering personalized, seamless, and memorable travel experiences. We aim to bring the world closer to our clients by curating journeys that are enriching, sustainable, and culturally immersive, while ensuring exceptional service and a hassle-free planning process.</p>
                    </div>
                     <div className='pt-3'>
                        <img src={mission} alt="" className='bg-cover bg-center object-contain' />
                    </div>
                  
                </div>
            </div>
<ClientsTestimonial/>
<Vehicle/>
<SpecialOffer/>
        </div>
    )
}

export default About