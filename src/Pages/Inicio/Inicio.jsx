import Baner from '../../Components/Banner'
import Nosotros from '../../Components/Nosotros'
import Especialidades from '../../Components/Especialidades/Especialidades'
import Contacto from '../../Components/Contacto/Contacto'
import Footer from '../../Components/footer/Footer'
const Inicio = ()=>{
    return(
        <section id='inicio'>
            <Baner/>
            <Nosotros/>
            <Especialidades/>
            <Contacto/> 
            <Footer/>
        </section>
    )
}
export default Inicio