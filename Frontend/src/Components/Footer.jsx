import React from 'react';

function Footer() {
  return (
    <footer className=" w-full  bg-[#0b1a2d] flex items-center justify-between text-white  py-6 shadow-inner ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left opacity-90">
          © {new Date().getFullYear()} <span className="font-semibold">Hostellor</span> — All rights reserved.
        </p>

       
      </div>
    </footer>
  );
}

export default Footer;
