import React from 'react'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '../../API/api';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';


function Login({s,t}) {
   const [prn , setprn] = useState('');
   const [password , setpassword] = useState('');
   const navigate = useNavigate();
   const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await api.post('/users/login',{ prn , password});
      
      if(res.data.succes){
        toast.success(res.data.message);
      localStorage.setItem("token" ,res.data.token);
      navigate('/')
      }
      else{
        toast.error(res.data.message);}
    
    } catch (error) {
       toast.error(error);
       
    }
   }
  return (
   
    <div className={`${t ? 'bg-[#0b1a2d] ' : 'bg-white text-blue-950'}`}>
      <Navbar s={s} t={t} />
      <div className={` ${t ? "text-white shadow-sm shadow-purple-500" : "bg-purple-50" }  p-5 rounded-2xl border border-purple-300 shadow-lg w-96 h-96 mx-auto md:mt-16 mt-28 flex flex-col items-center justify-center`}>
        <h1 className='font-semibold text-3xl text-purple-700 mb-6 drop-shadow-sm'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-full gap-4 px-4'>
          <input
            type="number"
            name='prn'
            placeholder='PRN'
            required
            onChange={(e)=>setprn(e.target.value)}
            className='p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400'
          />
          <input
            type="password"
            name="password"
            required
             onChange={(e)=>setpassword(e.target.value)}
            placeholder="Password"
            className='p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400'
          />
          <button
            type='submit'
            className='mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl shadow-md transition duration-300 ease-in-out'
          >
            Login
          </button>
          <p className='text-sm mx-auto '>Don't have an acc ? <Link className='text-purple-700' to='/register'>Register</Link></p>
        </form>
      </div>
      <div className='md:mb-20 mb-68'></div>

      <Footer/>
    </div>
  )
}

export default Login
