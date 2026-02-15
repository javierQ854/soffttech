import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import React,{ useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import {Outlet } from 'react-router-dom';
function App() {
   useEffect(() => {
    AOS.init({ duration: 1000, once: false,mirror:true }); // global para toda la landing
  }, []);
  return(
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>

    </div>
    
  )
}

export default App
