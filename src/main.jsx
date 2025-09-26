import { StrictMode,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const Inicio = lazy(()=>import('./Pages/Inicio'))
const DesarrolloWeb = lazy(()=>import('./Pages/DesarrolloWeb'))
import AccionContext from './Context/AccionContext.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AccionContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Inicio/>}/>
            <Route path='desarrollo' element={<DesarrolloWeb/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AccionContext>
  </StrictMode>,
)
