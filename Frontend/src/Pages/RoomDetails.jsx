import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Roomie from '../Components/Roomie';
import api from '../../API/api';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';
import Err from '../Components/Err';
import Nodata from '../Components/Nodata';

function RoomDetails({s,t}) {
  const { no, room } = useParams();
  const [roomi,setroomi] = useState(null);
  const [loading,setloading] = useState(false);
  const cookie = localStorage.getItem('token');
   const getRoomie = async ()=>{
    setloading(true);
    const res = await api.get('/users/roomDetails',{params: {no,room}});
    if(res.data.succes){
      setroomi(res.data.roomies);
      setloading(false);
    }
   }
const nav = useNavigate()
 useEffect(()=>{
    if(!cookie){
        nav('/login');
    }
}, [cookie, nav])

   useEffect(()=>{
          getRoomie();
   },[no, room]);
   
  

  return (
    <div className={`${t ? 'bg-[#0b1a2d] text-white' : 'bg-white text-blue-950'}`}>
 <Navbar s={s} t={t} />
    {room>=1 && room<=36 && no>=5 && no<=8 ? 
      <>
     

      <div className={`${t ? 'bg-[#0b1a2d]  text-white' : 'bg-orange-100 text-blue-950'} md:mx-10 mx-1 mt-10 p-5 rounded-lg  min-h-[550px]   mb-45 flex flex-col items-center border border-orange-500`}>
        <h1 className='text-2xl font-bold mb-6 text-orange-800'>
          Hostel Block D{no} - Room {room}
        </h1>


        <div className='p-6 bg-orange-50  rounded-lg shadow-md w-full flex flex-col items-center'>
          <div className='text-orange-700 font-semibold text-xl mb-3'>
            Room {room} people 
          </div>

          {loading ? <Loader/> : 

          <div className='w-fit flex md:flex-row flex-col  gap-10 items-center justify-between'>
            {roomi===null || roomi.length ===0 ? (
<Nodata/>
) : (
  roomi.map((r, index) => <Roomie key={ index} roomie={r} />)
)}

                 
          </div>
}

          <Link to={`/hostel/${no}`} className='mt-6 px-6 py-2 bg-orange-200 text-orange-800 font-semibold rounded-lg shadow hover:bg-orange-300 transition'>
            Back to Block D{no}
          </Link>
        </div>
      </div>
      
     </>
      : <Err/>}
      <Footer/>
   </div>

  );

}

export default RoomDetails;
