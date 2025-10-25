import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBody from '../Components/HomeBody'
import HomeBody02 from '../Components/HomeBody02';
import Footer from '../Components/Footer';


function Homepage({t,s}) {
  const cookie = localStorage.getItem('token');

  return (
    <>
    <Navbar s={s} t={t}/>
    {cookie ? <HomeBody02 t={t}/> : <HomeBody t={t}/> }
    <Footer/>

    
   
    </>
  )
}

export default Homepage