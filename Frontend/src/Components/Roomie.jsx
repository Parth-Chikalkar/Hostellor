import React from 'react'

function Roomie({roomie}) {
  return (
   <div className='p-4 bg-orange-200 rounded-lg shadow-md w-64 flex flex-col gap-3'>
  <div className='text-orange-800 font-bold text-lg'>{roomie.name}</div>
  <div className='bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm text-orange-700'>
    PRN: {roomie.prn}
  </div>
  <div className='bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm text-orange-700'>
    Address: {roomie.address}
  </div>
  <div className='bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm text-orange-700'>
    Guardian No: {roomie.gaurdianNo}
  </div>
  <div className='bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm text-orange-700'>
    Phone No: {roomie.phNo}
  </div>
</div>

  )
}

export default Roomie