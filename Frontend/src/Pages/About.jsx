import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function About({ t, s }) {
  return (
    <div className={t ? 'bg-[#0b1a2d] text-white min-h-screen flex flex-col' : ' text-orange-900 min-h-screen flex flex-col'}>
      <Navbar t={t} s={s} />

      <main className="flex-grow mx-2 md:mx-auto  mb-7 max-w-6xl  px-4 border-1 rounded-md py-16 flex flex-col gap-6">
        <h1 className="text-4xl font-bold mb-4">{t ? 'About Hostellor' : 'About Hostellor'}</h1>
        <p className={t ? 'text-gray-300' : 'text-blue-950'}>
          Welcome to <span className="font-semibold">Hostellor</span> — your one-stop solution for hostel room management. 
          Here you can check room availability, see your roommates, and manage your hostel information efficiently.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Features</h2>
        <ul className={`list-disc ml-6 space-y-2 ${t ? "text-white" :"text-blue-950"} `}>
          <li>Check hostel rooms by block and floor.</li>
          <li>View roommates’ details in each room.</li>
          <li>Login/Logout functionality for personalized experience.</li>
          <li>Light/Dark theme toggle for better accessibility.</li>
          <li>Responsive design for mobile and desktop.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Contact</h2>
        <p className={t ? 'text-gray-300' : 'text-blue-950'}>
          For inquiries or support, visit the <Link to="/contact" className="text-blue-500 hover:underline">Contact Page</Link>.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default About;
