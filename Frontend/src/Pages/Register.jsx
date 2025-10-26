import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import api from '../../API/api';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';

function Register({s,t}) {
  const [prn , setprn] = useState('');
  const [name , setname] = useState('');
  const [address , setaddress] = useState('');
  const [hostelNo , sethostelNo] = useState('');
  const [roomNo , setroomNo] = useState('');
  const [gaurdianNo , setgaurdianNo] = useState('');
  const [password , setpassword] = useState('');
  const [phNo , setphNo] = useState(''); 
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
try {
    const res = await api.post("/users/signup",{prn , name , address , hostelNo , roomNo , gaurdianNo , password ,phNo});
    toast.success(res.data.message); 
    if(res.data.succes){
 localStorage.setItem("token" ,res.data.token);
    navigate('/');
    }
   
  
} catch (error) {
 toast.error("Error happened , try again later !")  
}
finally{
  setLoading(false);
}
  }
  return (
    
 
    <div className={`${t ? 'bg-[#0b1a2d] ' : 'bg-white text-blue-950'} `}>
    
      <Navbar s={s} t={t}/>
      <div className={` ${t ? "text-white shadow-sm shadow-orange-500" : "bg-orange-50" }  mb-7 p-5 rounded-2xl border border-orange-300 shadow-lg md:w-1/2 mx-2 md:mx-auto mt-10 flex flex-col items-center justify-center`}>
        <h1 className='font-semibold text-3xl text-orange-700 mb-6 drop-shadow-sm'>Register</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-full gap-4 md:px-4'>
        <div className='flex md:flex-nowrap flex-wrap  flex-shrink-0 gap-4 w-full'>
            <div className='flex gap-3 w-full flex-col '>
            <input
            type="number"
            name='prn'
            onChange={(e)=>setprn(e.target.value)}
            placeholder='PRN'
            required
            className='p-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400'
          />
            <input
            type="text"
            name='name'
            placeholder='Name'
            onChange={(e)=>setname(e.target.value)}
            required
            className='p-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400'
          />
          
  <select
  name="hostelNo"
  required
  onChange={(e) => sethostelNo(e.target.value)}
  className="p-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-400 placeholder-gray-400  appearance-none"
  defaultValue=""
 
>
  <option value="" disabled>
    Select Hostel No
  </option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
</select>

          <input
            type="number"
            name="password"
            required
             onChange={(e)=>setroomNo(e.target.value)}
            placeholder="Room No"
            min={1}
            max={36}
            className='p-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400'
          />
          <input
            type="password"
            name="password"
            required
             onChange={(e)=>setpassword(e.target.value)}
            placeholder="Password"
            className='p-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400'
          />
          </div>
          
          <div className='flex gap-3 w-full flex-col '>
            <input
            type="number"
            name="gaurdianNo"
             onChange={(e)=>setgaurdianNo(e.target.value)}
            required
            placeholder="Gaurdian No"
            className='p-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400'
          />
           <input
            type="number"
            name="Phone No"
             onChange={(e)=>setphNo(e.target.value)}
            required
            placeholder="Phone No"
            className='p-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400'
          />
          <textarea
            type="text"
            name="address"
             onChange={(e)=>setaddress(e.target.value)}
            required
            placeholder="Address"
            className='p-3 h-full resize-none border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400'
          />
           
          
          </div>
        </div>
          <button
            type='submit'
            className={`${loading ? "bg-orange-400" :"bg-orange-600"} mt-4  hover:bg-orange-700 text-white font-semibold py-2 rounded-xl shadow-md transition duration-300 ease-in-out`}>
            {loading ? "Registering.. " :"Register"}
          </button>
          <p className='text-sm mx-auto '>Go Back <Link className='text-orange-700' to='/'>Home</Link></p>
        </form>
      </div>
      <Footer/>
  </div>
  )
}

export default Register