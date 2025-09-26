import { proyectos } from "../../servicios/proyectos"
const DesarrolloWeb = ()=>{
    return (
        <section id="desarrolladores" className="pt-14">
                <div className="flex m-5">
                    {proyectos.map(proyecto=>(
                        <div className="p-5 shadow-md shadow-[#001f3f]/40 rounded-2xl w-80 flex flex-col justify-center items-center gap-5">
                            <h3 className="text-center lg:text-3xl font-bold text-[#001f3f]">{proyecto.titulo}</h3>
                            <img src={proyecto.imagen} alt="Musical" />
                            <p className="font-semibold text-[#001f3f]">{proyecto.descripcion}</p>
                            <a className="hover:bg-[#008080] hover:text-white hover:scale-110 transition-transform text-[#008080] border px-5 rounded border-[#008080]" target="_blank" rel="noopener noreferrer" href="https://javierq854.github.io/MusicPage/">Ver</a>
                        </div>
                    ))}
                    
                </div>
        </section>
    )
}

export default DesarrolloWeb