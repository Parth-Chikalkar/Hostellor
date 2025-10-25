import React from 'react';
import { Link } from 'react-router-dom';

function Err() {
  return (
    <div className="flex items-center justify-center md:mb-7 mb-67 h-[500px] ">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-orange-500 mb-6 animate-pulse">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found !  </h2>
        <p className=" mb-6">
          Oops! Something went wrong on our end. Please try again later.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold shadow-lg transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Err;
