import { useEffect, useState } from 'react'
import Boton from '../components/Boton/Boton'
import Titulo from '../components/Titulo/Titulo'
import Formulario from '../components/Formulario/Formulario'
import Tarjeta from '../components/Tarjeta/tarjeton'

let storage = localStorage.getItem("lista");
storage = JSON.parse(storage)
const Home = () => {
    //listar, vacio, formulario
    const [pagina, setPagina] = useState("");

    const cambiarEstado = () => {
        if (pagina !== "formulario") {
          setPagina("formulario");
        } else if (storage === null) {
          setPagina("vacio");
        } else {
          if (typeof storage === "string") {
            storage = JSON.parse(storage);
          }
          setPagina("vistas");
        }
    }      
    
    console.log(pagina)

    useEffect(() => {//al iniciar la app decide estado inicial
        if(storage === null){
            setPagina("vacio")
        }else{
            setPagina("vistas")
            if (typeof storage === "string") {//se ejecuta 2 veces todo el codigo no se porque
                storage = JSON.parse(storage);
            }
        }
      }, []);
    

   
    if(pagina === "formulario"){
        return (
            <div>
                <Formulario click={cambiarEstado}/>
            </div>
        )
    }else if(pagina === "vistas"){
        return(
            <div>
                <Titulo titulo="TP1 PWA" />
                <Boton texto="Cargar Pelicula" onClick={cambiarEstado}/>    
                {!(storage === null) ? storage.map((peli, index) => (
                    <Tarjeta peliserie={peli} key={index}/>
                )) : <p>No ha subido ninguna peliserie</p>} 
            </div>
        )
    }else{
        return(
        <div>
            <Titulo titulo="TP1 PWA" />
            <Boton texto="Cargar Pelicula" onClick={cambiarEstado}/>    
            <p>No ha subido ninguna peliserie</p>
        </div>
        )
    }
    
}
export default Home;