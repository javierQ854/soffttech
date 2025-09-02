import Card from "../Card/Card"
const Especialidades = () => {
    return (
        <div className="bg-gray-100 py-10 scroll-mt-10 md:scroll-mt-25" id="servicios" >
            <section className="container mx-auto flex gap-7 justify-center items-center flex-col">
                <h3 className="text-3xl text-center md:text-4xl font-bold  text-[#001f3f]">Nuestras Especialidades</h3>
                <Card />
            </section>
        </div>
    )
}

export default Especialidades