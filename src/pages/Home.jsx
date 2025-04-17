import { useState } from 'react'
import Boton from '../components/Boton/Boton'
import Titulo from '../components/Titulo/Titulo'
import Formulario from '../components/Formulario/Formulario'

const Home = () => {
    
    const [wasClicked, setWasClicked] = useState(false);
    const changeClick = () => {
        if(!wasClicked){
            setWasClicked(true);
        }else{
            setWasClicked(false);
        }
    }
    
    if(wasClicked){
        return (
            <div>
                <Formulario click={changeClick}/>
            </div>
        )
    }else{
        return(
            <div>
                <Titulo titulo="TP1 PWA" />
                <Boton texto="Cargar Pelicula" onClick={changeClick}/>     
            </div>
        )
    }
    
}
export default Home;