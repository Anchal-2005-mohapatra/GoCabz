import React, { useState } from 'react';
import { RiArrowRightLine } from "react-icons/ri";
import logo from "../../Assets/Images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Enquire from "../home/Enquire";
const Navbar = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    const [openModal, setOpenModal]= useState(false);
       const handleFaceBook = ()=>{
            window.open('https://www.facebook.com/','_blank')
        }; 
           const handleInsta = ()=>{
            window.open('https://www.instagram.com/','_blank')
        };    
const toggleModel = ()=>{
    setOpenModal(!openModal)
}
    return (
        <div className='sticky top-0 bg-white shadow-lg z-50 w-full '>
            <div className=' block md:hidden lg:hidden xl:hidden'>
                <div className='flex items-center justify-between px-6 pb-1'>
                    <img src={logo} alt="" className='bg-cover bg-center h-16 md:h-20 ' />
                    <GiHamburgerMenu size={20} onClick={() => setMenu(true)} />

                </div>
                <Sidebar menu={menu}  onClose={() => setMenu(false)} navigate={navigate} />

            </div>

            <div className='hidden md:flex items-center justify-between md:px-8 lg:px-9 text-xs sm:text-sm md:text-md lg:text-lg text-white py-2 gap-3 bg-[#0E5A00]'>
                <div className='flex items-center gap-2'>
                    <p className='italic ' >For Tour Booking Call Us On</p>
                    <RiArrowRightLine />
                    <a href="no">+91 824 968 6752</a></div>
                <ul className='flex gap-4'>
                    <li >
                        <div className='bg-white/20 h-10 w-10 rounded-full flex items-center justify-center'>
                            <FaFacebookF onClick={handleFaceBook}/> </div>     </li>
                    <li> <div className='bg-white/20 h-10 w-10 rounded-full flex items-center justify-center'><FaInstagram  className='' onClick={handleInsta}/>
                    </div></li>

                </ul>

            </div>

            {/* for large screen. */}
            <div className='hidden md:flex lg:flex xl:flex px-6 md:px-8 lg:px-9  justify-between items-center w-full'>

                <div> <img src={logo} alt="" className='bg-cover bg-center h-16 md:h-20 pb-2 ' /></div>
                <div>
                    <ul className='flex items-center gap-5 md:gap-6 lg:gap-8'>
                        <NavLink to="/" className={({ isActive }) =>
                            `cursor-pointer ${isActive ? "text-blue-500" : "text-[#595959]"}`} >
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => `cursor-pointer ${isActive ? "text-blue-500" : "text-[#595959]"}`} >
                            About Us
                        </NavLink>

                        <NavLink to="/tour" className={({ isActive }) =>
                            ` ${isActive ? "text-blue-500" : "text-[#595959]"}`} >
                            Tour
                        </NavLink>

                        <NavLink to="/gallery" className={({ isActive }) =>
                            `cursor-pointer ${isActive ? "text-blue-500" : "text-[#595959]"}`} >
                            Gallery
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) =>
                            `cursor-pointer ${isActive ? "text-blue-500" : "text-[#595959]"}`} >
                            Contact
                        </NavLink>
                    </ul>

                </div>
                <div>
                    <button className='bg-[#FBA710] text-white px-3 py-2 rounded'onClick={toggleModel}>Enquire Now</button>
                    <Enquire open={openModal} onClose={()=>setOpenModal(false)}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;