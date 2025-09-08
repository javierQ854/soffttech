import Button from '../Buttons/Button'
const Baner = () => {
    const servicios = () => {
        const seccion = document.getElementById("servicios");
        seccion?.scrollIntoView();
    }
    const contacto = () => {
        const seccion = document.getElementById("contacto");
        seccion?.scrollIntoView();
    }
    return (
        <section className="h-[95vh] md:h-[85vh] w-full  flex justify-center items-center pt-14" id="inicio">
            <div className=" flex w-full bg-ima bg-[url('/banner.png')] bg-cover bg-center  h-full justify-center items-center flex-col gap-8">
                <div data-aos="fade-right" className='flex flex-col gap-5 md:backdrop-blur-3xl  p-10  rounded-2xl '>
                    <h2 className="font-extrabold text-4xl md:text-5xl pt-5 text-white">Bienvenido a SofftTech</h2>
                    <p className="bg-gradient-to-r from-[#008080] to-[#000569] bg-clip-text text-transparent font-bold text-2xl">Transformamos ideas en soluciones de software de alto impacto. Nuestra tecnología impulsa el futuro.</p>
                    <div className="space-y-3 md:space-x-5 ">
                        <Button direccion={servicios} id={"servicios"} texto={"Nuestros servicios"}></Button>
                        <Button direccion={contacto} texto={"Contactanos"}  ></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Baner