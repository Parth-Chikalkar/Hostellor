import React from 'react'
import { Link } from 'react-router-dom'
import Hostel from './Hostel'

function HomeBody02({t}) {
  return (
    <div className={`flex flex-col gap-2   pb-9 ${t ? 'bg-[#0b1a2d] text-white' : 'bg-white text-blue-950'}`}>
    <div className={`md:mx-10 mx-2  gap-4 py-6 flex flex-wrap md:justify-between justify-center items-center md:px-20 ${t ? 'bg-[#0b1a2d]  ' : ' bg-purple-100  text-blue-950 '} items-center rounded-lg  min-h-[500px]  border-1 border-purple-500`}>
      <Link to='/hostel/5'>
       <Hostel t={t} hos = {5}/>
      </Link>
      <Link to='/hostel/6'>
      <Hostel t={t} hos = {6}/>
      
      </Link>
       <Link to='/hostel/7'>
       <Hostel t={t} hos = {7}/>
       
       
       </Link>
        <Link to='/hostel/8'>
       <Hostel t={t} hos = {8}/>
       
       
       </Link>
    </div>
    </div>
  )
}

export default HomeBody02