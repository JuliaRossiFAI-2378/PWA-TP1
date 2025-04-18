import { useEffect, useState } from 'react'
import Boton from '../Boton/Boton';
import Input from '../Input/Input';
const Formulario = ({click}) => {
    let listaLS = localStorage.getItem("lista")
    const [titulo, setTitulo] = useState("");
    const [director, setDirector] = useState("");
    const [anio, setAnio] = useState("");
    const [genero, setGenero] = useState("");
    const [rating, setRating] = useState("");
    const [tipo, setTipo] = useState("");
    const [imagen, setImagen] = useState("");
    const sendForm = () =>{
        const peliserie = [{
            titulo: titulo,
            director: director,
            anio: anio,
            genero: genero,
            rating: rating,
            tipo: tipo,
            imagen: imagen,
            vista: false
        }]
        let lista = listaLS;
        if(listaLS === null){
            lista = JSON.stringify(peliserie)
            localStorage.setItem("lista", lista)
        }else{
            lista = localStorage.getItem("lista")
            lista = JSON.parse(lista)
            lista = lista.concat(peliserie)
            lista = JSON.stringify(lista)
            localStorage.setItem("lista", lista)
        }
    }
    const handleChange = (event) =>{
        switch(event.target.name){
            case 'genero':
                setGenero(event.target.value)
            break;
            case 'tipo':
                setTipo(event.target.value)
            break;
        }
    }
    return (
        <div className="card">
            <form>
                <label>Titulo: </label>
                <Input onChange={setTitulo} value={titulo} /> <br/>
                <label>Director: </label>
                <Input onChange={setDirector} value={director} /> <br/>
                <label>A&ntilde;o: </label>
                <Input onChange={setAnio} value={anio} /><br/>
                <label>Genero: </label>
                <select onChange={handleChange} name='genero'>
                    <option value="comedia">Comedia</option>
                    <option value="accion">Accion</option>
                    <option value="aventura">Aventura</option>
                    <option value="fantasia">Fantasia</option>
                    <option value="suspenso">Suspenso</option>
                    <option value="animacion">Animacion</option>
                </select><br/>
                <label>Rating: </label>
                <Input onChange={setRating} value={rating} /><br/>
                <input type="radio" onChange={handleChange} name="tipo" value="pelicula"/>
                <label>Pelicula</label><br/>
                <input type="radio" onChange={handleChange} name="tipo" value="serie" />
                <label>Serie</label><br/>
                <label>Url de la imagen: </label>
                <Input onChange={setImagen} value={imagen} />
                <Boton texto="Guardar peliserie" onClick={sendForm} type="submit"/>
                <Boton texto="Volver atras" onClick={click}/>
            </form>
      </div>
    )
}
export default Formulario;



