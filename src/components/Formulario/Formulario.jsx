import { useEffect, useState } from 'react'
import Boton from '../Boton/Boton';
import Input from '../Input/Input';
const Formulario = ({click}) => {
    let lista = localStorage.getItem("lista")
    
    const [peliserie, setStore] = useState({
        titulo: '',
        director: '',
        anio: '',
        genero: 'comedia',
        rating: '',
        tipo: ''
    })
    const sendForm = () =>{
        if(lista === null){
            lista = JSON.stringify(peliserie)
            //localStorage.setItem("lista", lista)
        }else{
            lista = localStorage.getItem("lista")
            lista = JSON.parse(lista)
            lista = lista.concat(peliserie)
            //localStorage.setItem("lista", lista)
        }
    }
    const change = (event) =>{
        switch(event.target.name){
            case 'titulo':
                setStore({
                    ...peliserie, titulo: event.target.value
                })
            break;
            case 'director':
                setStore({
                    ...peliserie, director: event.target.value
                })
            break;
            case 'anio':
                setStore({
                    ...peliserie, anio: event.target.value
                })
            break;
            case 'genero':
                setStore({
                    ...peliserie, genero: event.target.value
                })
            break;
            case 'rating':
                setStore({
                    ...peliserie, rating: event.target.value
                })
            break;
            case 'tipo':
                setStore({
                    ...peliserie, tipo: event.target.value
                })
            break;
        }
    }
    
    return (
        <div className="card">
        <form>
            <label htmlFor="titulo">Titulo: </label>
            <input type="text" onChange={change} name="titulo" id="titulo" required/> <br/>
            <label htmlFor="director">Director: </label>
            <input type="text" onChange={change} name="director" id="director" required/> <br/>
            <label htmlFor="anio">A&ntilde;o: </label>
            <input type="number" onChange={change} name="anio" id="anio" required/><br/>
            <label htmlFor="genero">Genero: </label>
            <select onChange={change} name='genero'>
                <option value="comedia">Comedia</option>
                <option value="accion">Accion</option>
                <option value="aventura">Aventura</option>
                <option value="fantasia">Fantasia</option>
                <option value="suspenso">Suspenso</option>
                <option value="animacion">Animacion</option>
            </select><br/>
            <label htmlFor="rating">Rating: </label>
            <input type="number" onChange={change} name="rating" id="rating" /><br/>
            <input type="radio" onChange={change} name="tipo" value="pelicula"/>
            <label htmlFor="pelicula">Pelicula</label><br/>
            <input type="radio" onChange={change} name="tipo" value="serie" />
            <label htmlFor="serie">Serie</label><br/>
            <Boton onClick={sendForm}/>
            <Boton texto="volver atras" onClick={click}/>
        </form>    
      </div>
    )
}
export default Formulario;