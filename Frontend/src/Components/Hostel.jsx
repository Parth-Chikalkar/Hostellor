import React from 'react'

function Hostel({ hos ,t }) {
  return (
    <div
      className={`
        w-56 h-40 
        flex flex-col items-center justify-center
       ${t ? "bg-amber-50" : "bg-white/70"}  backdrop-blur-sm
        border border-purple-300 
        rounded-2xl shadow-lg 
        hover:shadow-purple-300/50 hover:scale-105 
        transition-all duration-300
        
      '`}
    >
      <h2 className='text-2xl font-bold text-purple-800 mb-1'>
        Block {hos}
      </h2>
      <p className='text-lg text-purple-600 font-medium tracking-wide'>
        Hostel
      </p>
    </div>
  )
}

export default Hostel
