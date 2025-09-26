import { createContext,useContext,useState } from "react"
const contexto = createContext()
const AccionContext = ({children}) =>{
    const [estado,setEstado] = useState(()=>{
        const guardaEstado = localStorage.getItem('estado')
        return guardaEstado ? JSON.parse(guardaEstado):false
    })

    const cambioEstado = () =>{
        const nuevoEstado = !estado
        setEstado(nuevoEstado)
        localStorage.setItem('estado',JSON.stringify(nuevoEstado))
    } 
    const valores = {
        estado,
        cambioEstado
    }
    return(
        <contexto.Provider value={valores}>
            {children}
        </contexto.Provider>
    )
}
export default AccionContext
export const useAccion = () => useContext(contexto)