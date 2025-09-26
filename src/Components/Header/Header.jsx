import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  const [validar, setValidar] = useState(false)
  const enDesarrollo = location.pathname === '/desarrollo'
  
  return (
    <header className="shadow-md fixed w-full bg-white/70 z-50 backdrop-blur-sm">
      <div className="container mx-auto p-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#001f3f]">SofftTech</h1>

        <button
          className="md:hidden"
          onClick={() => setValidar(!validar)}
        >
          <Bars3Icon className="w-6 h-6 text-gray-700" />
        </button>

        <nav className="hidden md:flex md:justify-center md:items-center gap-6 font-semibold text-gray-600">
          <a href={enDesarrollo?'/':"#inicio"} className="hover:text-[#008080]">Inicio</a>
          <div className={enDesarrollo ? 'hidden':'md:flex md:justify-center md:items-center gap-6'}>
            <a href="#nosotros" className="hover:text-[#008080]">Nosotros</a>
            <a href="#servicios" className="hover:text-[#008080]">Servicios</a>
            <a href="#contacto" className="hover:text-[#008080]">Contacto</a>
          </div> 
          
          <button className=" border bg-[#008080] px-3 py-2 text-white cursor-pointer border-none transition-transform hover:scale-105 rounded">Ingreso colaboradores</button>
        </nav>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden overflow-hidden transition-all duration-500 ease-in-out
      ${validar ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
    `}
      >
        <nav className="flex flex-col items-center gap-4 py-4">
          <a href="#inicio" onClick={() => setValidar(false)} className="hover:text-[#008080]">Inicio</a>
          <a href="#nosotros" onClick={() => setValidar(false)} className="hover:text-[#008080]">Nosotros</a>
          <a href="#servicios" onClick={() => setValidar(false)} className="hover:text-[#008080]">Servicios</a>
          <a href="#contacto" onClick={() => setValidar(false)} className="hover:text-[#008080]">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
export default Header;