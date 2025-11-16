import React, { useEffect } from 'react';
import bg from "../Assets/Gallery/bg.png";
import img1 from "../Assets/Gallery/img1.png";
import img2 from "../Assets/Gallery/img2.png";
import img3 from "../Assets/Gallery/img3.png";
import img4 from "../Assets/Gallery/img4.png";
import img5 from "../Assets/Gallery/img5.png";
import img6 from "../Assets/Gallery/img6.png";
import img7 from "../Assets/Gallery/img7.png";
import img8 from "../Assets/Gallery/img8.png";
import img9 from "../Assets/Gallery/img9.png";
import img10 from "../Assets/Gallery/img10.png";
import img11 from "../Assets/Gallery/img11.png";
import img12 from "../Assets/Gallery/img12.png";
import img13 from "../Assets/Gallery/img13.png";
import img14 from "../Assets/Gallery/img14.png";
import img15 from "../Assets/Gallery/img15.png";
import img16 from "../Assets/Gallery/img16.png";
import img17 from "../Assets/Gallery/img17.png";
import img18 from "../Assets/Gallery/img18.png";
import img19 from "../Assets/Gallery/img19.png";
import img20 from "../Assets/Gallery/img20.png";
import img21 from "../Assets/Gallery/img21.png";
import img22 from "../Assets/Gallery/img22.png";
import img23 from "../Assets/Gallery/img23.png";
import img24 from "../Assets/Gallery/img24.png";
import img25 from "../Assets/Gallery/img25.png";
import img26 from "../Assets/Gallery/img26.png";
import img27 from "../Assets/Gallery/img27.png";
import AOS from "aos";
import "aos/dist/aos.css";
import SpecialOffer from '../components/home/SpecialOffer';
const gallery = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    },
    {
        id: 5,
        img: img5
    },
    {
        id: 6,
        img: img6
    },
    {
        id: 7,
        img: img7
    },
    {
        id: 8,
        img: img8
    },
    {
        id: 9,
        img: img9
    },
    {
        id: 10,
        img: img10
    },
    {
        id: 11,
        img: img11
    },
    {
        id: 12,
        img: img12
    },
    {
        id: 13,
        img: img13
    },
    {
        id: 14,
        img: img14
    },
    {
        id: 15,
        img: img15
    },
    {
        id: 16,
        img: img16
    },
    {
        id: 17,
        img: img17
    },
    {
        id: 18,
        img: img18
    },
    {
        id: 19,
        img: img19
    },
    {
        id: 20,
        img: img20
    },
    {
        id: 21,
        img: img21
    },
    {
        id: 22,
        img: img22
    },
    {
        id: 23,
        img: img23
    },
    {
        id: 24,
        img: img24
    },
    {
        id: 25,
        img: img25
    },
    {
        id: 26,
        img: img26
    },
    {
        id: 27,
        img: img27
    },
]
const Gallery = () => {
    useEffect(()=>{
         window.scrollTo({
            top:0,
            behavior:'smooth'
        });
        AOS.init({
            once:false,
            duration:1000,
            offset:100,
            delay:100
        })
    })
    return (
        <div>
            <div className='bg-cover bg-center flex flex-col items-center justify-center w-full h-[250px] lg:h-[316px]' style={{ backgroundImage: `url(${bg})` }}>

                <p className='text-black text-3xl font-medium'>Our Gallery</p>
                <span className='text-[#292929] font-semibold'>Home / Our Gallery</span>

            </div>
            <div className='py-7'>
                <p className='text-2xl font-bold text-center'>“We do not remember days, we remember moments.”</p>
                <div className='px-6 md:px-8 lg:px-9  py-7 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3' >
{gallery.map((item)=>(
    <div key={item.id}>
        <img src={item.img} alt="" className=' bg-center bg-cover ' data-aos="flip-up" data-sos-anchor-placement="top-bottom"/>
        </div>
))}
                </div>
            </div>
            <SpecialOffer/>
        </div>
    )
}

export default Gallery;