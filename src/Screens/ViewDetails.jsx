import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tour from "../Assets/ViewDetails/tour-details.png";
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
import msg from "../Assets/Contact/msg.png";
import departure from "../Assets/Contact/departure.png";
import calender1 from "../Assets/Contact/calender.png";
import girl from "../Assets/ViewDetails/girl.jpg";
import boy from "../Assets/ViewDetails/boy.jpg";
import ClientsTestimonial from "../components/home/ClientsTestimonial";
import SpecialOffer from '../components/home/SpecialOffer';

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
    const [active, setActive] = useState(false);
    const [display, setDisplay] = useState(null);

    const description = (
        <div>
            <p>Experience the serene beauty of Gopalpur Sea Beach, a tranquil seaside destination on the Bay of Bengal. Known for its golden sands, gentle waves, and charming sunsets, Gopalpur is perfect for a relaxing getaway. </p>
        </div>
    );
    const program = (
        <div className=''>
            <p className='font-bold text-xl '>Program <span className='text-gray-400 text-sm'>(5 days)</span></p>
            <p className='py-2 '>This five-day journey to Gopalpur Sea Beach includes leisure activities, beach fun, local cuisine, and a glimpse into the rich history of this coastal town. Enjoy stunning sea views, indulge in water sports, and unwind in a peaceful environment.</p>
            <div className='hover:bg-amber-100 md:rounded-full grid grid-cols-1 md:grid-cols-3  gap-4 rounded-lg px-2  py-4'>
                <div className='flex items-center justify-center h-[80px] w-[80px]  rounded-full  bg-[#0E5A00] text-white'>
                    <div className='flex flex-col items-center justify-center'><p>Day</p>
                        <p>1</p></div>
                </div>
                <div className='min-w-[200px] col-span-2 '>
                    <p className='font-bold text-xl '>Arrival at Berhampur & Transfer to Gopalpur </p>
                    <p className=''>Arrive at Berhampur Railway Station and transfer to your beach resort at Gopalpur. Take a leisurely walk along the beach and enjoy the sunset over the Bay of Bengal.</p>
                </div>
            </div>
            <div className='hover:bg-amber-100 md:rounded-full grid grid-cols-1 md:grid-cols-3  gap-4 rounded-lg px-2  py-4'>
                <div className='flex items-center justify-center h-[80px] w-[80px]  rounded-full  bg-[#0E5A00] text-white'>
                    <div className='flex flex-col items-center justify-center'><p>Day</p>
                        <p>2</p></div>
                </div>
                <div className='min-w-[200px] col-span-2 '>
                    <p className='font-bold text-xl '>Beach Day & Water Sports </p>
                    <p className=''>Spend the day at Gopalpur Beach with a variety of water activities, including surfing, jet skiing, and paddleboarding. Relax on the sun-kissed sands and enjoy fresh seafood from local vendors.</p>
                </div>
            </div>
            <div className='hover:bg-amber-100 md:rounded-full grid grid-cols-1 md:grid-cols-3  gap-4 rounded-lg px-2  py-4'>
                <div className='flex items-center justify-center h-[80px] w-[80px]  rounded-full  bg-[#0E5A00] text-white'>
                    <div className='flex flex-col items-center justify-center'><p>Day</p>
                        <p>3</p></div>
                </div>
                <div className='min-w-[200px] col-span-2 '>
                    <p className='font-bold text-xl '>Visit to Gopalpur Lighthouse & Local Market </p>
                    <p className=''>Explore the historic Gopalpur Lighthouse for panoramic views of the coastline. Later, visit the local market for traditional handicrafts, seafood, and souvenirs.</p>
                </div>
            </div>
            <div className='hover:bg-amber-100 md:rounded-full grid grid-cols-1 md:grid-cols-3  gap-4 rounded-lg px-2  py-4'>
                <div className='flex items-center justify-center h-[80px] w-[80px]  rounded-full  bg-[#0E5A00] text-white'>
                    <div className='flex flex-col items-center justify-center'><p>Day</p>
                        <p>4</p></div>
                </div>
                <div className='min-w-[200px] col-span-2 '>
                    <p className='font-bold text-xl '>Excursion to Rushikulya Turtle Sanctuary</p>
                    <p className=''>Take a half-day trip to the nearby Rushikulya Turtle Sanctuary, famous for the nesting of Olive Ridley turtles. Learn about local conservation efforts and enjoy a picnic by the sea.</p>
                </div>
            </div>
            <div className='hover:bg-amber-50 md:rounded-full grid grid-cols-1 md:grid-cols-3  gap-4 rounded-lg px-2  py-4'>
                <div className='flex items-center justify-center h-[80px] w-[80px]  rounded-full  bg-[#0E5A00] text-white'>
                    <div className='flex flex-col items-center justify-center'><p>Day</p>
                        <p>5</p></div>
                </div>
                <div className='min-w-[200px] col-span-2 '>
                    <p className='font-bold text-xl '>Departure from Gopalpur </p>
                    <p className=''>Enjoy a final morning at the beach, soaking in the calm and refreshing breeze. Check out from the resort and transfer back to Berhampur Railway Station for your journey home.</p>
                </div>
            </div>


        </div>
    );
    const review = (
        <div>
            <div className='flex flex-col md:flex-row p-8 bg-slate-50 items-center gap-4 border-2 group hover:bg-[#d7ffbb] mb-8 transition all duration-300 ease-in-out'>
                <div className='w-24 h-24 p-8 text-center rounded-full bg-[#d7ffbb] font-bold text-2xl group-hover:bg-white transition all duration-300 ease-in-out'>
                    <p>4.7</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold'>Excellent</h1>
                    <p>Gopalpur Sea Beach offers a peaceful retreat with its golden sands, serene waters, and breathtaking sunsets—ideal for relaxation and scenic beauty.</p>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='font-medium text-2xl  py-3'>2 Reviews</p>
                <div className='flex gap-5 '>
                    <img src={girl} alt="" className='h-20 rounded-full' />
                    <div className='border px-3 py-3'>
                        <div className='space-y-3'>
                            <p>Tanya Chakraborty</p>
                            <span className='flex items-center gap-2'>
                                <span><FaStar color='green' />
                                </span>
                                <span><FaStar color='green' />

                                </span>
                                <span><FaStar color='green' />

                                </span>
                                <span><FaStar color='green' />

                                </span>
                                <span><FaRegStar color='green' />

                                </span>
                            </span>
                            <p>Absolutely loved the peaceful atmosphere and the local seafood. The beach was clean, and the water sports added a fun twist to the trip!</p>
                            <button className='bg-[#0E5A00] hover:bg-[#033b00] text-white px-3 py-2 text-sm font-bold'>Reply</button>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 '>
                    <img src={boy} alt="" className='h-20 rounded-full' />
                    <div className='border px-3 py-3'>
                        <div className='space-y-3'>
                            <p>Aditya Kumar Behera</p>
                            <span className='flex items-center gap-2'>
                                <span><FaStar color='green' />
                                </span>
                                <span><FaStar color='green' />

                                </span>
                                <span><FaStar color='green' />

                                </span>
                                <span><FaStar color='green' />

                                </span>
                                <span><FaRegStar color='green' />

                                </span>
                            </span>
                            <p>A great destination for a short beach vacation. The lighthouse view was stunning, and the turtle sanctuary visit was a unique experience.</p>
                            <button className='bg-[#0E5A00] hover:bg-[#033b00] text-white px-3 py-2 text-sm font-bold'>Reply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className='font-medium text-2xl  py-3'>Leave a Review</p>
                <form action="">
                    <div className='grid gap-5 '>
                        <div className='border border-[#949292] flex bg-white'>
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
                            <input type="text" placeholder='Phone' className='outline-none  px-2 md:px-5 lg:px-6' />
                        </div>

                        <div className='border border-[#949292] flex bg-white'>
                            <div className='px-3 py-2 border-r border-[#949292]'>
                                <img src={msg} alt="" className='bg-cover bg-center h-7' />
                            </div>
                            <input type="text" placeholder='Message' className='outline-none  px-2 md:px-5 lg:px-6' />
                        </div>
                        <button className='bg-[#0E5A00] text-white w-full hover:bg-[#033b00] py-3 px-4'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
        ;
    const map = (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.820433550266!2d85.8205946!3d20.266280599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a738f7d5382f%3A0xb9c2c6c215787f8a!2sGoCabz1%20Travels%20Bhubaneswar%20Taxi%20Services!5e0!3m2!1sen!2sin!4v1763699481841!5m2!1sen!2sin" title="gocabz" className='w-full' height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
    const buttons = [
        { id: 1, label: 'DESCRIPTION', content: description },
        { id: 2, label: 'PROGRAM', content: program },
        { id: 3, label: 'REVIEW', content: review },
        { id: 4, label: 'MAP', content: map },
    ];

    const handleClick = (id, content) => {
        setActive(id);
        setDisplay(content)
    };
    const { id } = useParams();
    const pid = Number(id)
    // const [product, setProduct] = useState(null);

    const [items, setItems] = useState({});
    const [mayLike, setMayLike] = useState(alltour);

    useEffect(() => {
        const half = Math.ceil(alltour.length / 2);
        setMayLike(alltour.slice(0, half))
    }, []);




    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        // const find = alltour.includes((p)=>p.id===pid);
        // console.log(find);
        const findProduct = alltour.find((p) => p.id === pid);
        console.log(findProduct);
        // setProduct(findProduct);
        localStorage.setItem('viewProduct', JSON.stringify(findProduct));
        console.log(localStorage);
        const get = localStorage.getItem("viewProduct");
        if (get) {
            setItems(JSON.parse(get));
        }
    }, [pid]);
    // if (!product) {
    //     return <div> no list </div>
    // }
    if (!items) {
        return <div>
            there is no list
        </div>
    }
    return (
        <>
            <div className='object-cover bg-cover bg-center w-full h-[250px] lg:h-[316px] flex  flex-col items-center justify-center ' style={{ backgroundImage: `url(${tour})` }} >
                <p className='text-black text-3xl font-medium'>Tour Details</p>
                <span className='text-[#292929] font-semibold'> Home / Tour</span>
            </div>

            <div className='px-6 md:px-8 lg:px-9 py-2'>
                <div className='flex flex-col lg:flex-row gap-6 '>
                    <div className=' flex flex-col gap-2  w-full lg:w-[60%] '>
                        <div className=''>
                            <ul className='flex flex-col gap-2  '>
                                <p className='text-2xl font-bold'>{items.description} </p>
                                <img src={items.img} alt="" className=' bg-cover bg-center w-full max-h-[700px]  object-cover rounded-lg' />

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
                        <div className=''>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 items-center">
                                {buttons.map((button) => (
                                    <p
                                        key={button.id}
                                        onClick={() => handleClick(button.id, button.content)}
                                        className={`px-4 py-3 rounded-md transition-colors duration-200 cursor-pointer font-bold text-2xl' ${active === button.id
                                            ? 'bg-[#0E5A00] text-white'
                                            : 'bg-white text-black hover:bg-gray-200'
                                            }`}
                                    >
                                        {button.label}
                                    </p>

                                ))}
                                <div className='my-5   '>
                                    {display && (
                                        <div className={` px-4 ${display ? "border py-4 border-gray-100" : "border-0"}`}>
                                            {display}
                                        </div>
                                    )}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='lg:w-[40%]  py-6 md:py-20 '>
                        <div className='flex flex-col gap-6'>

                            <div className='bg-[#FBA710] py-6 flex flex-col gap-3 items-center justify-center'>
                                <span className='text-white'> <span className='text-2xl md:text-4xl font-bold'>₹649</span> <span>/per person</span>
                                </span>

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

                            <button className='bg-[#0E5A00] text-white font-bold text-2xl md:text-4xl py-3 px-4 w-full '>BOOKING</button>
                            <div className='border border-[#949292] flex bg-white'>
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
                        <div className='mt-10'>
                            <button className='bg-[#0E5A00] hover:bg-[#0E5A00] rounded px-6 py-3 font-medium text-white w-full md:w-1/3 lg:w-1/4 text-lg md:text-xl'>Submit</button>
                        </div>

                    </div>
                </div>
            </div >

            <ClientsTestimonial />

            <div className='px-6 md:px-8 py-4 lg:px-9'>

                <div className='grid sm:grid-cols-2  lg:flex gap-5'>
                    {mayLike.map((item, i) => (
                        <div className='' key={item.id}>
                            <img src={item.img} alt="" className='rounded-lg h-[250px] w-full object-cover' />
                            <div className='px-2 space-y-1'><p className='pt-2 font-medium text-lg'>{item.place}</p>
                                <p className=' text-[#767676]'>{item.famous}</p></div>
                        </div>
                    ))}
                </div>
            </div>
            <SpecialOffer />


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