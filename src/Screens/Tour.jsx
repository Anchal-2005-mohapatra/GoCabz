import React,{useEffect} from 'react';
import odisha from "../Assets/Destination/odisha.png";
import dolphin from "../Assets/Tour/dolphin.png";
import jagaa from "../Assets/Tour/jagaa.png";
import dhauli from "../Assets/Tour/dhauli1.png";
import lingaraj from "../Assets/Tour/lingaraj.png";
import jirang from "../Assets/Tour/jiranga.png";
import ram from "../Assets/Tour/RamMandir.png";
import AOS from "aos";
import "aos/dist/aos.css";
import tour from "../Assets/Tour/tou.avif";
import TrendingTour from "../components/home/TrendingTour";
import Review from "../components/home/Review";
import Vehicle from "../components/home/Vehicle";
import SpecialOffer from "../components/home/SpecialOffer";
const destination = [
    {
        id: 1,
        img: odisha,
        name: "Konark Temple",
        place: "Puri"

    },
    {
        id: 2,
        img: dolphin,
        name: "Chilika Lake",
        place: "Ganjam"

    },
    {
        id: 3,
        img: jagaa,
        name: "Jagannath Temple",
        place: "Puri"

    },
    {
        id: 4,
        img: dhauli,
        name: "Dhauli Giri",
        place: "Bhubaneswar"

    },
    {
        id: 5,
        img: lingaraj,
        name: "Lingaraj Temple",
        place: "Howrah Bridge"

    },
      {
        id: 6,
        img: jirang,
        name: "Jiranga",
        place: "Gajapati"

    },
      {
        id: 7,
        img: ram,
        name: "Ram Temple",
        place: "Bhubeneswar"

    }

]
const Tour = () => {
    useEffect(() => {
         window.scrollTo({
            top:0,
            behavior:'smooth'
        });
        AOS.init({
            duration: 1500,
            delay: 200,
            once: false,
            offset: 100
        })
    })
    return (

        <div>
            <div className='bg-cover bg-center w-full h-[250px] lg:h-[316px] flex  flex-col items-center justify-center'style={{ backgroundImage: `url(${tour})` }} >
                  <p className='text-black text-3xl font-medium'>Our Tour</p>
                <span className='text-[#292929] font-semibold'>Home / Our Tour</span>
            </div>
            <div className=''>
                <p className='text-center text-3xl font-bold py-2'>Top Destination</p>
                <div className='px-6 md:px-8 lg:px-9 grid grid-cols-1  gap-6 sm:grid-cols-2 md:grid-cols-4 py-5 xl:flex flex-1  md:gap-5 items-center justify-between'>
                    {destination.map((item) => (
                        <div key={item.id} className='flex flex-col items-center justify-center ' >
                            <img src={item.img} alt="" className='bg-cover  bg-center h-40 w-40 md:h-32 md:w-32 lg:h-[190px] lg:w-[200px]' data-aos="flip-left" />
                            <div className=' text-center'>
                                <p className='text-lg font-medium w-[180px]'>{item.name}</p>
                                <p className='text-[#666666] font-medium'>{item.place}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

<TrendingTour/>
<Review/>
<Vehicle />
< SpecialOffer />

        </div>


    )
}

export default Tour;