import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function MobileNav({ cookie, t, closeMenu }) {
  return (
    <div
      className={`absolute z-10 top-20 right-4 left-4 mx-auto flex flex-col items-center gap-4 rounded-lg p-4 shadow-md transition-all duration-300 ${
        t ? 'bg-[#032a5c] text-white border-2 border-zinc-200 shadow-sm shadow-zinc-200' : 'bg-orange-100 border-2 border-orange-500 shadow-sm shadow-orange-600 text-blue-950'
      }`}
    >
         <Link
        to="/"
        onClick={closeMenu}
        className="hover:text-orange-600 font-semibold transition"
      >
        Home
      </Link>
      <hr className={`w-3/4 ${
          t ? 'border-gray-500 opacity-70' : 'border-orange-300 opacity-70'
        }`} />
      <Link
        to="/about"
        onClick={closeMenu}
        className="hover:text-orange-600 font-semibold transition"
      >
        About
      </Link>
      <hr className={`w-3/4 ${
          t ? 'border-gray-500 opacity-70' : 'border-orange-300 opacity-70'
        }`} />

      <Link
        to="/contact"
        onClick={closeMenu}
        className="hover:text-orange-600 font-semibold transition"
      >
        Contact
      </Link>
        <hr className={`w-3/4 ${
          t ? 'border-gray-500 opacity-70' : 'border-orange-300 opacity-70'
        }`} />

      {cookie ? (
        <button
          onClick={() => {
           localStorage.removeItem("token");window.location.reload();toast.error("Logged Out !");
          }}
          className="text-red-500 w-full md:w-fit hover:shadow-md transition border border-red-500 rounded-md px-3 py-1 font-semibold"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          onClick={closeMenu}
          className={`border rounded-md w-full  md:w-fit flex items-center justify-center px-3 py-1 font-semibold transition ${
            t
              ? 'text-white border-white hover:text-orange-400'
              : 'text-blue-950 border-blue-950 hover:text-orange-600'
          }`}
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default MobileNav;
