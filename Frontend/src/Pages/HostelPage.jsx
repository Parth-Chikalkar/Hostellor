import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Err from '../Components/Err';

function HostelPage({s,t}) {
  const { no } = useParams();
  const cookie = localStorage.getItem('token');

  const rooms = Array.from({ length: 30 }, (_, i) => i + 1);
  const roomsPerFloor = 10;
  const floors = [];
  for (let i = 0; i < rooms.length; i += roomsPerFloor) {
    floors.push(rooms.slice(i, i + roomsPerFloor));
  }
const nav = useNavigate()
 useEffect(()=>{
    if(!cookie){
        nav('/login');
    }
}, [cookie, nav])


  return (
   
      <div className={`${t ? 'bg-[#0b1a2d] text-white' : 'bg-white text-blue-950'}`}>

      
      <Navbar s={s} t={t} />
      {(no >=5 && no <=8) ?     
      <div className={`${t ? 'bg-[#0b1a2d] text-white' : 'bg-purple-100 text-blue-950'} md:mx-10 mx-1 my-10 p-5 rounded-lg  flex items-center justify-center flex-col border border-purple-500`}>
        <h1 className='text-2xl font-bold mb-6 text-purple-800'>
          Hostel Block D{no}
        </h1>

       
        <div className={`mb-6 p-4 ${t?"border-1 border-amber-100 text-white":"bg-purple-50 "} flex items-center flex-col rounded-lg shadow-sm`}>
          <h2 className='text-purple-700 font-semibold mb-3'>Floor 1</h2>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {floors[0].map((room) => (
              <Link key={room} to={`/hostel/${no}/${room}`}>
              <div
                key={room}
                className={`flex items-center justify-center h-16 w-16 ${t?"bg-amber-100":"bg-white/70"} backdrop-blur-sm rounded-lg shadow-md text-purple-700 font-semibold hover:scale-105 transition-all duration-300`}
              >
                {room}
              </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Floor 2 */}
        <div className={`mb-6 p-4 ${t?"border-1 border-amber-100 text-white":"bg-purple-50 "} flex items-center flex-col rounded-lg shadow-sm`}>
          <h2 className='text-purple-700 font-semibold mb-3'>Floor 2</h2>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {floors[1].map((room) => (
                <Link key={room} to={`/hostel/${no}/${room}`}>
              <div
                key={room}
                className={`flex items-center justify-center h-16 w-16 ${t?"bg-amber-100":"bg-white/70"} backdrop-blur-sm rounded-lg shadow-md text-purple-700 font-semibold hover:scale-105 transition-all duration-300`}>
                {room}
              </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Floor 3 */}
        <div className={`mb-6 p-4 ${t?"border-1 border-amber-100 text-white":"bg-purple-50 "} flex items-center flex-col rounded-lg shadow-sm`}>
          <h2 className='text-purple-700 font-semibold mb-3'>Floor 3</h2>
          <div className='flex items-center justify-center flex-wrap gap-4'>
            {floors[2].map((room) => (
                <Link key={room} to={`/hostel/${no}/${room}`}>
              <div
                key={room}
                className={`flex items-center justify-center h-16 w-16 ${t?"bg-amber-100":"bg-white/70"} backdrop-blur-sm rounded-lg shadow-md text-purple-700 font-semibold hover:scale-105 transition-all duration-300`}>
                {room}
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>  :
      (
        <Err/>
      )
}
      <Footer/>
      </div>
    
  );
}

export default HostelPage;
