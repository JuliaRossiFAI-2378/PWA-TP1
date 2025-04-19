import { useState } from 'react'
import Boton from '../components/Boton/Boton'
import Titulo from '../components/Titulo/Titulo'
import Formulario from '../components/Formulario/Formulario'

const Home = () => {
    //vistas, no vistas?, formulario
    //necesitamos una pagina para no vistas o seria parte de la logica del filtro?
    const [pagina, setPagina] = useState("vistas");
    const mostrarFormulario = () => {
        pagina === "vistas" ?  setPagina("formulario")
        : setPagina("vistas")
        ;
    }
    
    if(pagina === "formulario"){
        return (
            <div>
                <Formulario click={mostrarFormulario}/>
            </div>
        )
    }else if(pagina === "vistas"){
        return(
            <div>
                <Titulo titulo="TP1 PWA" />
                <Boton texto="Cargar Pelicula" onClick={mostrarFormulario}/>     
            </div>
        )
    }
    
}
export default Home;