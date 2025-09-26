import {especialidades} from '../../servicios/especialidades'
import { useNavigate } from "react-router-dom"
import { useAccion } from "../../Context/AccionContext";
const Card = () => {
    const {cambioEstado} = useAccion()
    const navigate = useNavigate()
    const navegar = (id)=>{
       if(id==1){
        cambioEstado()
        navigate('desarrollo')
       } 
    }

    return (
        <section className='grid grid-cols-1 md:grid-cols-3 gap-5 px-7' data-aos="zoom-in">
            {especialidades.map(e=>
                <div key={e.id} onClick={()=>navegar(e.id)} className='flex bg-white flex-col px-4 py-4 transition-transform hover:scale-110 cursor-pointer  md:py-10  rounded-xl gap-3 items-center shadow-xl shadow-gray-400'>
                    <p>{e.logo}</p>
                    <h4 className='text-center text-[#001f3f] font-bold text-2xl'>{e.titulo}</h4>
                    <p className='text-gray-600 text-center'>{e.descipcion}</p>
                </div>
            )}
        </section>
    )
}

export default Card