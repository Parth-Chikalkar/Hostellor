import React, { useState } from 'react'
import { assets } from "./AssetsExp/export.js";
import { Route, Router, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import HostelPage from './Pages/HostelPage.jsx';
import RoomDetails from './Pages/RoomDetails.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  const [theme , settheme ] = useState(false);
  
  return (
    <div>
      <Routes>
       <Route path='/' element={<Homepage t={theme} s={settheme} />}/>
       <Route path='/login'  element ={<Login t={theme} s={settheme} />}/>
       <Route path='/register'  element={<Register t={theme} s={settheme} />}/>
       <Route path='/hostel/:no'  element={<HostelPage t={theme} s={settheme}  />}/>
       <Route path='/hostel/:no/:room'  element={<RoomDetails t={theme} s={settheme} />}/>
       <Route path='/about'  element={<About t={theme} s={settheme} />}/>
       <Route path='/contact'  element={<Contact t={theme} s={settheme} />}/>
       
        
      </Routes>
      
    </div>
  )
}

export default App