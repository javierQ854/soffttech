import { StrictMode,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const Inicio = lazy(()=>import('./Pages/Inicio'))
const DesarrolloWeb = lazy(()=>import('./Pages/DesarrolloWeb'))
const DesarrolloMovile = lazy(()=>import('./Pages/Desarrollomovile'))
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Inicio/>}/>
            <Route path='desarrollo' element={<DesarrolloWeb/>}/>
            <Route path='desarrolloMovile' element={<DesarrolloMovile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
