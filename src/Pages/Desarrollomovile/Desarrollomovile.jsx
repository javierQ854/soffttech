import { proyectosMovile } from "../../servicios/proyectosMovile"
const Desarrollomovile = () => {
    return(
        <section id="desarrolladoresMovile" className="pt-14">
                <div className="flex flex-col m-5 gap-10 lg:flex-row">
                    {proyectosMovile.map(proyecto=>(
                        <div key={proyecto.id} className="p-5 shadow-md shadow-[#001f3f]/40 rounded-2xl flex-col flex justify-center items-center gap-5">
                            <h3 className="text-center lg:text-3xl font-bold text-[#001f3f]">{proyecto.titulo}</h3>
                            <img src={proyecto.imagen} alt="Musical" />
                            <p className="font-semibold text-[#001f3f]">{proyecto.descripcion}</p>
                            <a className="hover:bg-[#008080] hover:text-white hover:scale-110 transition-transform text-[#008080] border px-5 rounded border-[#008080]" target="_blank" rel="noopener noreferrer" href={proyecto.url}>Ver</a>
                        </div>
                    ))}
                    
                </div>
        </section>
    )
}
export default Desarrollomovile