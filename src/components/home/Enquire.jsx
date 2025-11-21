import React from 'react'
import profile from "../../Assets/Contact/profile.png";
import mail from "../../Assets/Contact/email.png";
import call from "../../Assets/Contact/call.png";
import msg from "../../Assets/Contact/msg.png";
import departure from "../../Assets/Contact/departure.png";
import calender from "../../Assets/Contact/calender.png";
import children from "../../Assets/Contact/children.png";
import people from "../../Assets/Contact/man.png";
import { RxCross2 } from "react-icons/rx";

const Enquire = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div className='fixed  inset-0 bg-black/40 backdrop-blur-sm flex ' onClick={onClose}>
      <div className='flex w-full  items-center justify-center'>
        <div className='bg-[#FFFBEF] p-2 flex   '  >
          <div className='relative w-full h-[50%] p-6 inset-0 '>
            <div className='text-right'>
              <button className='' onClick={onClose}><RxCross2 size={20} className=''/></button>
            </div>
          
            <div className='grid gap-5 py-3 '>
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
              <input type="date" placeholder='' className='outline-none w-[80%]  px-2 md:px-5 lg:px-6' />
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
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Enquire