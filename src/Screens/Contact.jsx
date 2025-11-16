import React,{useEffect} from 'react';
import bg from "../Assets/Contact/bg.png";
import location from "../Assets/Contact/location.png";
import email from "../Assets/Contact/mail.png";
import phone from "../Assets/Contact/phone.png";
import profile from "../Assets/Contact/profile.png";
import mail from "../Assets/Contact/email.png";
import call from "../Assets/Contact/call.png";
import msg from "../Assets/Contact/msg.png";
import departure from "../Assets/Contact/departure.png";
import calender from "../Assets/Contact/calender.png";
import children from "../Assets/Contact/children.png";
import people from "../Assets/Contact/man.png";
import SpecialOffer from "../components/home/SpecialOffer";
// import bg1 from "../Assets/Images/bg.png"
// import bg2 from "../Assets/Images/bg1.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
        AOS.init({
            once:false,
            duration:1000,
            delay:200,
            offset:100
        })
    },[]);
    return (
        <div>
            <div className='bg-cover bg-center w-full h-[250px] lg:h-[316px] flex  flex-col items-center justify-center' style={{ backgroundImage: `url(${bg})` }}>
                <p className='text-black text-3xl font-medium'>Contact Us</p>
                <span className='text-[#292929] font-semibold'>Home / Cotact Us</span>
            </div>

            <div className='px-6 md:px-8 lg:px-9'>
                <div className='flex flex-col items-center justify-center gap-2 py-4'>
                    <p className='text-3xl font-bold py-2'>Stay Connected</p>
                    <p className='text-[#595959] text-sm min-w-[300px] text-center '>  We’d love to hear from you! Whether you're looking to book an appointment or have questions about our services, feel free to reach out to us.</p>
                </div>

                <div className=' w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

                    <div className='bg-[#E9B301] p-2 md:p-4 lg:p-8 flex flex-col justify-center gap-5 text-white'data-aos="fade-down">
                        <div className='grid gap-2 md:flex md:gap-3 items-center '>
                            <div><img src={location} alt="" className='h-14 bg-cover bg-center' /></div>
                            <div className='w-[200px]'>
                                <p className='text-[#FFFFFF] text-lg font-bold'>Address</p>
                                <p className='text-[#FFFFFFCC]'>Gpo, Plot No 298, Unit-6, Biju Patnaik International Airport-Aerodrome, Ekamra Rd, Ganga Nagar, Bhubaneswar, Odisha 751020</p>
                            </div>
                        </div>
                        <div className='grid gap-2 md:flex md:gap-3 items-center'>
                            <div><img src={email} alt="" className='h-14' /></div>
                            <div>
                                <p className='text-[#FFFFFF] text-lg font-bold'>Email</p>
                                <p className='text-[#FFFFFFCC]'>rameshbarad264@gmail.com</p>
                            </div>
                        </div>
                        <div className='grid gap-2 md:flex md:gap-3 items-center'>
                            <div><img src={phone} alt="" className='h-14' /></div>
                            <div>
                                <p className='text-[#FFFFFF] text-lg font-bold'>Phone</p>
                                <p className='text-[#FFFFFFCC]'>+91 824 968 6752</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#FFFBEF] p-2 md:p-4 lg:p-8 flex flex-col justify-center gap-4'data-aos="fade-down">
                        <p className='text-[#212020] text-2xl font-bold shadow-[#00000026]'>Get In Touch</p>

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
                        </div>

                        <div className='flex flex-col items-center md:grid md:grid-cols-2 gap-5 lg:grid-cols-2 '>
                            <div className='border border-[#949292] flex bg-white'>
                                <div className='px-3 py-2 border-r border-[#949292]'>
                                    <img src={departure} alt="" className='bg-cover bg-center h-7' />
                                </div>
                                <input type="text" placeholder='Departure City' className='outline-none w-[50%]  px-2 md:px-5 lg:px-6' />
                            </div>
                            <div className='border border-[#949292] flex bg-white'>
                                <div className='px-3 py-2 border-r border-[#949292]'>
                                    <img src={calender} alt="" className='bg-cover bg-center h-7' />
                                </div>
                                <input type="date" placeholder='' className='outline-none w-[50%]  px-2 md:px-5 lg:px-6' />
                            </div>
                            <div className='border border-[#949292] flex bg-white'>
                                <div className='px-3 py-2 border-r border-[#949292]'>
                                    <img src={children} alt="" className='bg-cover bg-center h-7' />
                                </div>
                                <input type="number" placeholder='No. Of Children' className='outline-none w-[50%]  px-2 md:px-5 lg:px-6' />
                            </div>
                            <div className='border border-[#949292] flex bg-white'>
                                <div className='px-3 py-2 border-r border-[#949292]'>
                                    <img src={people} alt="" className='bg-cover bg-center h-7' />
                                </div>
                                <input type="number" placeholder='No. of Adult' className='outline-none w-[50%]  px-2 md:px-5 lg:px-6' />
                            </div>
                           <div className='w-[50%] text-center rounded text-white py-2 px-3 bg-[#FCC101]'><button className=''>Submit</button>
                        </div></div> 

                    </div>
                </div>

                <div className='my-7 w-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.907525551531!2d85.81574189999996!3d20.262669600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a738f7d5382f%3A0xb9c2c6c215787f8a!2sGoCabz1%20Travels%20Bhubaneswar%20Taxi%20Services!5e0!3m2!1sen!2sin!4v1763011193310!5m2!1sen!2sin" title="GoCabz1" width="600" height="450" style={{border:0, width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <SpecialOffer/>
            </div>
        </div>
    )
}

export default Contact;