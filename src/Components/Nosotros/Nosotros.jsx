
const Nosotros = () => {
    return (
        <section id="nosotros" className="py-15">
            <div className="flex gap-10 flex-col justify-center items-center max-w-5xl mx-auto px-3">
                <h3 className="text-3xl text-center md:text-4xl font-bold  text-[#001f3f]">Quiénes Somos</h3>
                <div className="flex flex-col md:flex-row-reverse md:justify-center items-center gap-10">
                    <img className=" w-70 rounded-2xl " src="./nosotros.png" alt="Nosotros" />
                    <p className="text-gray-600 text-center lg:text-justify">En SofftTech, no solo creamos software; 
                        construimos el futuro digital de tu negocio. 
                        Somos una empresa apasionada por la tecnologia, 
                        contamos con un grupo de desarrolladores, analistas y visionarios expertos, 
                        dedicados a transformar tus ideas en soluciones tecnológicas innovadoras y de alto rendimiento.<br/><br/>
                        Nuestra misión es potenciar el crecimiento de tu empresa a través de la tecnología. 
                        Nos especializamos en brindar servicios de desarrollo de software de vanguardia, 
                        diseñados para superar tus expectativas y abordar los desafíos más complejos del mercado actual.</p>
                </div>

            </div>
        </section>
    )
}


export default Nosotros