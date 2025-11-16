import React from 'react';
import logo from "../../Assets/Images/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='px-6 md:px-8 lg:px-9 grid grid-cols-1 md:flex md:flex-1 items-center justify-around gap-5 md:gap-3 my-6'>
                <div>
                    <h1 className='text-[#0E5A00] font-bold text-lg'>QUICK LINKS</h1>
                    <ul className='space-y-2'>
                        <li className='text-[#FBA710]'>Home</li>
                        <li className='text-[#FBA710]'>About Us</li>
                        <li className='text-[#FBA710]'>Tour</li>
                        <li className='text-[#FBA710]'>Gallery</li>
                    </ul>
                </div>

                <div className='space-y-2 md:text-center'>
                    <div className='flex  justify-start md:items-center md:justify-center'>
                        <img src={logo} alt="" className=' bg-cover bg-center h-24' /></div>
                  <div className='w-[200px]'>
                    <p className='text-[#FBA710] text-sm  '>At Go Cabz we’re passionate about crafting memorable travel experiences tailored to your interests. From adventurous treks to serene getaways, we’re here to help you explore the world with ease and excitement.</p></div>  
                    <div className='flex gap-4 justify-start md:items-center md:justify-center '>
                        <div className='bg-[#154604] rounded-full flex items-center justify-center h-7 w-7'>
                            <FaFacebookF size={18} color='white' /></div>
                        <div className='bg-[#154604] rounded-full flex items-center justify-center h-7 w-7'><FaTwitter size={18} color='white' /></div>
                        <div className='bg-[#154604] rounded-full flex items-center justify-center h-7 w-7'><FaInstagram size={18} color='white' /></div>
                        <div className='bg-[#154604] rounded-full flex items-center justify-center h-7 w-7'><FaYoutube size={18} color='white' /></div>
                        <IoLogoPinterest size={32} className='text-[#154604]' />
                    </div>
                </div>
                
                <div>
                    <h2 className='text-[#0E5A00] text-lg font-bold'>CONTACT US</h2>
                    <div className='space-y-1'>
                        <div className='flex items-center gap-4'>
                            <FaLocationDot color='#0E5A00' size={20} className='' />
                            <p className='text-[#FBA710] w-[200px]'>Gpo, Plot No 298, Unit-6, Biju Patnaik International Airport-Aerodrome, Ekamra Rd, Ganga Nagar, Bhubaneswar, Odisha 751020</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <IoIosMail color='#0E5A00' size={25} />
                            <p className='text-[#FBA710]'>rameshbarad264@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <FaPhoneAlt color='#0E5A00' size={20} />
                            <p className='text-[#FBA710]'>+91 824 968 6752</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#0E5A00] text-white flex flex-col justify-center items-center sm:flex-row sm:justify-between   md:items-center py-3 md:justify-between w-full px-6 md:px-8 lg:px-9'>
                <p>© GoCabz  All Rights Reserved.</p>
                <p>Design & Developed by WEB_BOCKET</p>
            </div>

        </>
    )
}

export default Footer