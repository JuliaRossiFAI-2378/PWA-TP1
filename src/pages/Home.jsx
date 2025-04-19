import { useEffect, useState } from 'react'
import Boton from '../components/Boton/Boton'
import Titulo from '../components/Titulo/Titulo'
import Formulario from '../components/Formulario/Formulario'
import Tarjeta from '../components/Tarjeta/tarjeton'

const Home = () => {
    //vistas, no vistas?, formulario
    //necesitamos una pagina para no vistas o seria parte de la logica del filtro?
    const [pagina, setPagina] = useState("vistas");
    const mostrarFormulario = () => {
        pagina === "vistas" ?  setPagina("formulario")
        : setPagina("vistas")
        ;
    }
    
    
    let storage = localStorage.getItem("lista");
    storage = JSON.parse(storage)
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
                {!(storage === null) ? storage.map((peli, index) => (
                    <Tarjeta peliserie={peli} key={index}/>
                )) : <p>No ha subido ninguna peliserie</p>} 
            </div>
        )
    }
    
}
export default Home;