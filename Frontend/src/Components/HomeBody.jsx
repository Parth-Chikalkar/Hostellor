import React from 'react';
import { assets } from '../AssetsExp/export';

function HomeBody({ t }) {
  localStorage.clear();

  return (
    <>
      <div className={`flex flex-col gap-10 h-fit pb-10 transition-all duration-300 ${t ? 'bg-[#0b1a2d] text-white' : 'bg-white text-blue-950'}`}>

   
        <div
          className={`md:mx-10 mx-2 rounded-2xl md:p-10 p-5 border-2 transition-all duration-300 ${
            t
              ? 'bg-[#032a5c] border-blue-500 shadow-lg shadow-blue-500/30'
              : 'bg-blue-100 border-blue-400 shadow-md'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            How to use <span className='text-purple-800 text-glow-xl text-shadow-lg '>"Hostellor"</span> 
          </h2>
          <p className="text-lg leading-tight  mb-6 text-center max-w-3xl mx-auto">
            Our hostel system is designed to make your experience seamless and organized.
            You can easily browse through hostel blocks, explore rooms, and view details of your roommates.
            Simply log in, select your block and room, and the system will display all relevant information.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div
              className={`p-5 rounded-lg ${
                t ? 'bg-[#0f376b]' : 'bg-blue-200'
              } hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="font-semibold text-xl mb-2">Explore Rooms</h3>
              <p>Browse hostel blocks and floors to find your assigned room.</p>
            </div>

            <div
              className={`p-5 rounded-lg ${
                t ? 'bg-[#0f376b]' : 'bg-blue-200'
              } hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="font-semibold text-xl mb-2">View Roommates</h3>
              <p>See who’s sharing your room with just one click.</p>
            </div>

            <div
              className={`p-5 rounded-lg ${
                t ? 'bg-[#0f376b]' : 'bg-blue-200'
              } hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="font-semibold text-xl mb-2"> Manage Info</h3>
              <p>Log in to update or verify your hostel-related information easily.</p>
            </div>
          </div>
        </div>


        <div
          className={`md:mx-10 mx-2 rounded-2xl md:p-10 p-5 border-2 transition-all duration-300 ${
            t
              ? 'bg-[#79421b] border-orange-500 shadow-lg shadow-orange-500/30'
              : 'bg-orange-100 border-orange-400 shadow-md'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Visual Tour of the Hostel Blocks
          </h2>
          <p className="text-lg leading-tight mb-8 text-center max-w-3xl mx-auto">
            Get a glimpse of your hostel layout — from the blocks to the floors and room details.
            Below are real screenshots from the system showcasing the design and functionality.
          </p>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <div className="h-56 w-full rounded-xl overflow-hidden bg-white/30 backdrop-blur-md border border-dashed border-orange-400 flex items-center justify-center text-orange-200 text-lg font-medium">
            <img src={assets[4]} className='w-full h-full object-fit ' alt="" />
            </div>
            <div className="h-56 w-full rounded-xl overflow-hidden bg-white/30 backdrop-blur-md border border-dashed border-orange-400 flex items-center justify-center text-orange-200 text-lg font-medium">
              <img src={assets[2]} className='w-full h-full object-cover ' alt="" />
            </div>
            <div className="h-56 w-full rounded-xl overflow-hidden bg-white/30 backdrop-blur-md  border border-dashed border-orange-400 flex items-center justify-center text-orange-200 text-lg font-medium">
             <img src={assets[3]} className='w-full h-full object-cover ' alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBody;
