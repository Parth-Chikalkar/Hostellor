import React, { useState } from 'react';
import { assets } from '../AssetsExp/export';
import { Link } from 'react-router-dom';
import { CiDark } from "react-icons/ci";
import { IoSunny } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import MobileNav from './MobileNav';
import { toast } from 'react-toastify';
function Navbar({ t, s }) {
  const cookie = localStorage.getItem("token");
  const[menu ,setmenu] = useState(false);

  return (
    <div className={`${t ? 'bg-[#0b1a2d] text-white' : 'bg-white text-blue-950'} w-full h-20 pr-3 md:px-4 flex items-center justify-between `}>
      <Link to='/'>
        <img src={ t ? assets[1] : assets[0]} alt="icon" className='h-50 w-fit md:h-60' />
      </Link>

      <div className='flex flex-shrink-0 items-center gap-6'>
        {!t ? (
          <CiDark 
            onClick={() => s(!t)}
            className='h-9 w-9 hover:shadow-md cursor-pointer border border-blue-950 rounded-md px-2 py-1 transition'
          />
        ) : (
          <IoSunny 
            onClick={() => s(!t)}
            className='h-9 w-9 hover:shadow-md cursor-pointer border border-blue-950 rounded-md px-2 py-1 transition'
          />
        )}
          <div className='hidden md:flex gap-6  w-full h-full items-center'>
        {cookie ? (
          
          <button 
            onClick={() => {localStorage.removeItem("token");window.location.reload();toast.error("Logged Out !");}} 
            className='text-red-500 hover:shadow-red-200 shadow transition cursor-pointer md border border-red-500 rounded-md px-2 py-1 font-semibold'
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className={ ` ${t? " text-white border-white" : " text-blue-950 border-blue-950 "}  hover:text-orange-600 border  rounded-md px-2 py-1 font-semibold transition`}>
            Login
          </Link>
        )}

        <Link to="/about" className='hover:text-orange-600 font-semibold transition'>
          About
        </Link>
        <Link to="/contact" className='hover:text-orange-600 font-semibold transition'>
          Contact
        </Link>
        </div>
        <div className='md:hidden '>
          <CiMenuBurger onClick={()=>setmenu(!menu)} className='h-9 w-9 hover:shadow-md cursor-pointer border border-blue-950 rounded-md px-2 py-1 transition'/>
            {menu ? <MobileNav cookie={cookie} t={t}/> : ""}

        </div>
      </div>
    </div>
  );
}

export default Navbar;
