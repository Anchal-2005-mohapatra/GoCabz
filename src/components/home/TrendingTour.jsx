import React,{useEffect} from 'react';
import dhauli from "../../Assets/Tour/dhauli.png";
import chilika from "../../Assets/Tour/chilika.png";
import goplapur from '../../Assets/Tour/gopalpur.png';
import jagannath from "../../Assets/Tour/jagannath.png";
import ram from "../../Assets/Tour/Ram.png";
import iskon from "../../Assets/Tour/iskon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

const tour = [
    {
        id: 1,
        img: dhauli,
        place: "Dhauligiri, Bhubaneswar",
        famous: " We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 2,
        img: chilika,
        place: "Chilika Lake, Odisha",
        famous: "We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 3,
        img: goplapur,
        place: "Gopalpur Sea Beach",
        famous: "We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 4,
        img: jagannath,
        place: "Jagannath Temple, Puri",
        famous: "We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 5,
        img: ram,
        place: "Ram Mandir, Bhubaneswar",
        famous: " We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 6,
        img: iskon,
        place: "Iskcon Temple, Bhubaneswar",
        famous: " We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },

]
const TrendingTour = () => {
    const navigate = useNavigate();
useEffect(()=>{
    AOS.init({
        duration:1000,
        once:false,
        delay:200,
        offset:100
    });
},[])
    return (
        <div className='px-6 md:px-8 lg:px-9 '>
            <div className=''>
                <div className='text-center flex flex-col xl:text-start xl:flex-row  gap-2 md:justify-between items-center' >
                  <div className=''>
                      <p className='text-3xl font-bold py-2'>Trending Tour</p>
                    <p className='text-[#767676] text-sm md:text-[16px] font-medium'> We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit.</p>
                     </div>
                   <div>
                    <button className=' px-3 py-2 rounded border border-[#252525]' onClick={()=>{navigate("/tour")}}>View All </button></div>   
                </div>

                <div className='py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {tour.map((item) => (
                        <div className='' key={item.id} data-aos="flip-right" >
                            <img src={item.img} alt="" className='rounded' />
                            <div className='rounded space-y-4'>
                                <p className='pt-2 font-medium text-lg'>{item.place}</p>
                                <p className='text-[#767676]'>{item.famous}</p>
                                <button className='bg-[#FBA710] px-3 py-2 rounded text-white' onClick={()=>navigate(`/view-details/${item.id}`)}>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingTour;