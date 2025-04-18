import { useState } from 'react';
import styles from '../tarjeton.module.css'

var generos=["Terror", "Drama", "Fantasia", "Accion", "Romance", "Documental"]
//esto lo podemos sacar de local si quieren


const Generos = ({genero, estado}) => {
    const [generoSeleccionado, setGeneroSeleccionado] = useState(genero)

    const handleChange = (evento)=>{
      setGeneroSeleccionado(evento.target.value)
    }

    return estado === "edit" ? 
    <select onChange={handleChange} className={styles.generos} >
    {generos.map((gender) => (//react llora si no le doy keys, pero no necesita en este caso CREO
      <option value={gender}>{gender}</option>
    ))}
    </select>
    : <p>Genero: {generoSeleccionado}</p>
}

export default Generos