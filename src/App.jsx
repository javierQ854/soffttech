import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Baner from './Components/Banner/Baner'
import Nosotros from './Components/Nosotros'
import Especialidades from './Components/Especialidades/Especialidades'
import Contacto from './Components/Contacto/Contacto'
import Footer from './Components/footer/Footer'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [count, setCount] = useState(0)
   useEffect(() => {
    AOS.init({ duration: 1000, once: false,mirror:true }); // global para toda la landing
  }, []);
  return(
    <div>
      <Header/>
      <Baner/>
      <Nosotros/>
      <Especialidades/>
      <Contacto/> 
      <Footer/>
    </div>
    
  )
}

export default App
