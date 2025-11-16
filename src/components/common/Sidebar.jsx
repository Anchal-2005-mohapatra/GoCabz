import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import Enquire from '../home/Enquire';

const Sidebar = ({ menu, onClose, }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-10 duration-300 ${menu ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={onClose}>

                <div className={`fixed right-0 top-0 z-50 w-[70%] md:w-[40%] px-2 py-6 bg-white min-h-screen transform transition-transform duration-700 ease-in-out ${menu ? "translate-x-0" : "translate-x-full"} `}>

                    <div className='flex pb-3 px-4 justify-end'><ImCross onClick={onClose} className='text-right ' /></div>
                    <ul className='grid gap-5 px-3'>
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
                        <div>
                            <button className='bg-[#FBA710] text-white px-3 py-2 rounded' onClick={() => setOpenModal(true)}>Enquire Now</button>
                        </div>
                    </ul>
                </div>
            </div>
            <Enquire open={openModal} onClose={() => setOpenModal(false)} />
        </div>
    )
}

export default Sidebar


