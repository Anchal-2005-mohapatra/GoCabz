import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tour from "../Assets/Tour/tou.avif";
import dhauli from "../Assets/ViewDetails/dhauli.jpg";
import chilika from "../Assets/ViewDetails/chilika.jpg";
import goplapur from '../Assets/Tour/gopalpur.png';
import jagannath from "../Assets/Tour/jagannath.png";
import ram from "../Assets/Tour/Ram.png";
import iskon from "../Assets/Tour/iskon.png";
import calender from "../Assets/ViewDetails/calender.png";
import people from "../Assets/ViewDetails/people.png";
import person from "../Assets/ViewDetails/person.png";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import location from "../Assets/ViewDetails/location.png";
import profile from "../Assets/Contact/profile.png";
import mail from "../Assets/Contact/email.png";
import call from "../Assets/Contact/call.png";
import departure from "../Assets/Contact/departure.png";
import calender1 from "../Assets/Contact/calender.png";
const alltour = [
    {
        id: 1,
        description: "Discover the Historical Significance of DhauliGiri",
        img: dhauli,
        place: "Dhauligiri, Bhubaneswar",
        famous: " We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit.",

    },
    {
        id: 2,
        description: "Explore the Wonders of Chilika Lake",
        img: chilika,
        place: "Chilika Lake, Odisha",
        famous: "We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 3,
        description: "Relax and Unwind at Gopalpur Sea Beach",
        img: goplapur,
        place: "Gopalpur Sea Beach",
        famous: "We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 4,
        description: "Discover the Spiritual Significance of Jagannath Temple",
        img: jagannath,
        place: "Jagannath Temple, Puri",
        famous: "We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 5,
        description: "Explore the Divine Beauty of Ram Mandir, Bhubaneswar",
        img: ram,
        place: "Ram Mandir, Bhubaneswar",
        famous: " We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 6,
        description: "Discover the Spiritual Essence of ISKCON Temple, Bhubaneswar",
        img: iskon,
        place: "Iskcon Temple, Bhubaneswar",
        famous: " We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },

]

const ViewDetails = () => {
    const { id } = useParams();
    const pid = Number(id)
    const [product, setProduct] = useState(null);
    const [items, setItems] = useState({});

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        // const find = alltour.includes((p)=>p.id===pid);
        // console.log(find);
        const findProduct = alltour.find((p) => p.id === pid);
        console.log(findProduct);
        setProduct(findProduct);
        localStorage.setItem('viewProduct', JSON.stringify(findProduct));
        console.log(localStorage);
        const get = localStorage.getItem("viewProduct");
        if (get) {
            setItems(JSON.parse(get));
        }
    }, [pid]);
    if (!product) {
        return <div> no list </div>
    }
    return (
        <>
            <div className='bg-cover bg-center w-full h-[250px] lg:h-[316px] flex  flex-col items-center justify-center' style={{ backgroundImage: `url(${tour})` }} >
                <p className='text-black text-3xl font-medium'>Our Tour</p>
                <span className='text-[#292929] font-semibold'>Home / Our Tour</span>
            </div>

            <div className='px-6 md:px-8 lg:px-9 py-2'>
                <div className='flex flex-col md:flex-row gap-4 '>
                    <div className=' flex flex-col gap-2  w-full md:w-[60%] pr-2'>
                        <div className=''>
                            <ul className='flex flex-col gap-2  '>
                                <p className='text-2xl font-bold'>{items.description} </p>
                                <img src={items.img} alt="" className='max-h-[300px] bg-cover bg-center w-full  object-cover' />
                               
                            </ul>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-1 md:gap-3'>
                            <div className='flex items-center gap-2'>
                                <img src={calender} alt="" className='h-10 md:h-14' />
                                <div className='tracking-tighter'>
                                    <p className='font-medium '>Duration</p>
                                    <p className='text-gray-700 text-sm'>9 days</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={people} alt="" className='h-10 md:h-14' />
                                <div >
                                    <p className='font-medium '>Max People</p>
                                    <p className='text-gray-700 text-sm'>20</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={person} alt="" className='h-10 md:h-14' />
                                <div >
                                    <p className='font-medium '>Min Age</p>
                                    <p className='text-gray-700 text-sm'>12+</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={location} alt="" className='h-10 md:h-14' />
                                <div >
                                    <p className='font-medium '>Pick Up</p>
                                    <p className='text-gray-700 text-sm'>Airport</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[40%] flex flex-col gap-5 '>
                        <div className='bg-[#FBA710] py-3 flex flex-col gap-3 items-center justify-center'>
                            <span className='text-white'> <span className='text-2xl font-bold'>₹649</span> <span>/per person</span></span>
                            <span className='flex items-center gap-2'>
                                <span><FaStar color='white' />
                                </span>
                                <span><FaStar color='white' />

                                </span>
                                <span><FaStar color='white' />

                                </span>
                                <span><FaRegStar color='white' />

                                </span>
                                <span><FaRegStar color='white' />

                                </span>
                            </span>
                        </div>

                        <button className='bg-[#0E5A00] text-white font-bold text-2xl py-1 px-4 w-full '>BOOKING</button> <div className='border border-[#949292] flex bg-white'>
                            <div className='px-3 py-2 border-r border-[#949292]'>
                                <img src={profile} alt="" className='bg-cover bg-center h-7' />
                            </div>
                            <input type="text" placeholder='Name' className='outline-none  px-2 md:px-5 lg:px-6' />
                        </div>

                        <div className='border border-[#949292] flex bg-white'>
                            <div className='px-3 py-2 border-r border-[#949292]'>
                                <img src={mail} alt="" className='bg-cover bg-center h-6' />
                            </div>
                            <input type="text" placeholder='Email' className='outline-none px-2 md:px-5 lg:px-6 ' />
                        </div>

                        <div className='border border-[#949292] flex bg-white'>
                            <div className='px-3 py-2 border-r border-[#949292]'>
                                <img src={call} alt="" className='bg-cover bg-center h-7' />
                            </div>
                            <input type="text" placeholder='Phone' className='outline-none  px-2 md:px-5 lg:px-6 ' />
                        </div>
                        <div className='border border-[#949292] flex bg-white'>
                            <div className='px-3 py-2 border-r border-[#949292]'>
                                <img src={calender1} alt="" className='bg-cover bg-center h-7 pr-1' />
                            </div>
                            <input type="date" placeholder='' className='outline-none w-full px-4 md:px-5 lg:px-6 ' />
                        </div>
                        <div className='border border-[#949292] flex bg-white '>
                            <div className='px-3 py-2 border-r border-[#949292]'>
                                <img src={departure} alt="" className='bg-cover bg-center h-7' />
                            </div>
                            <input type="text" placeholder='Departure City' className='outline-none w-[50%]  px-2 md:px-5 lg:px-6' />
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className='px-6 md:px-8 lg:px-9'>
                <p className='font-bold  text-center py-6 text-2xl'>ViewDetails</p>
                <div className='flex flex-col items-center justify-center'>
                    <img src={product.img} alt="" className='max-h-[300px] bg-cover bg-center' />
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <p className='font-medium text-lg'>{product.place}</p>
                        <p className='max-w-[400px] text-center text-sm text-gray-600'>{product.famous}</p>
                        <button className='bg-orange-200 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 hover:text-black'>Book The Trip</button>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default ViewDetails;