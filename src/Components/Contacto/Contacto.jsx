import Button from "../Buttons/Button"
const Contacto = () => {
    return (
        <section className=" pt-10 bg-[#001f3f] scroll-mt-10" id="contacto">
            <div className="container mx-auto flex gap-10 flex-col justify-center items-center">
                <h4 className="text-white text-3xl md:text-4xl font-bold">Ponte en contacto</h4>
                <div className="bg-white lg:w-200 p-10 md:rounded-xl flex flex-col justify-center items-center">
                    <h5 className="text-gray-600 text-center">Estamos listos para escuchar tu proyecto</h5>
                    <form className="flex flex-col items-center w-full md:w-160 gap-5 p-5">
                        <input className="border-1 w-full rounded-sm border-gray-300 px-4 py-3 " type="text" placeholder="Tu Nombre" />
                        <input className="border-1 w-full rounded-sm border-gray-300 px-4 py-3 " type="text" placeholder="Tu Correo electronico" />
                        <textarea rows={4} className="w-full border-1 rounded-sm border-gray-300 px-4 py-3 " type="" placeholder="Tu Mensaje"></textarea>
                        <div>
                            <Button id={"enviar"} texto={"Enviar mensaje"} />
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacto