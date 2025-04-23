import { useState } from 'react';
import Boton from '../Boton/Boton';
import styles from './Formulario.module.css';
import Input from '../Input/Input';

const Formulario = ({ click }) => {
    const [formData, setFormData] = useState({
        titulo: "",
        director: "",
        anio: "",
        genero: "terror",
        rating: "",
        tipo: "pelicula",
        imagen: ""
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const listaActual = JSON.parse(localStorage.getItem("lista") || "[]");
        const nuevaPelicula = {
            ...formData,
            id: Date.now(),
            vista: false
        };
        localStorage.setItem("lista", JSON.stringify([...listaActual, nuevaPelicula]));
        click();
    };

    return (
        <div className={styles.formContainer}>
            <h2>Agregar Película/Serie</h2>
            <form onSubmit={handleSubmit}>
                    <label className={styles.formLabel}>Título:</label>
                    <Input name="titulo" type="text" value={formData.titulo} onChange={handleChange} required />
                    <label className={styles.formLabel}>Director:</label>
                    <Input name="director" type="text" value={formData.director} onChange={handleChange} required/>
                    <label className={styles.formLabel}>Año:</label>
                    <Input name="anio" type="number" value={formData.anio} onChange={handleChange} />
                    <label className={styles.formLabel}>Género:</label>
                    <select name="genero" value={formData.genero} onChange={handleChange} >
                        <option value="terror">Terror</option>
                        <option value="drama">Drama</option>
                        <option value="fantasia">Fantasía</option>
                        <option value="accion">Acción</option>
                        <option value="romance">Romance</option>
                        <option value="documental">Documental</option>
                    </select>
                    <label className={styles.formLabel}>Rating (1-10):</label>
                    <Input name="rating" type="number" min="1" max="10" value={formData.rating} onChange={handleChange} />
                    <p>Tipo:</p>
                    <label htmlFor='tipo'>Pelicula</label>
                    <Input type="radio" name="tipo" value="pelicula" checked={formData.tipo === "pelicula"} onChange={handleChange}/><br/>
                    <label htmlFor='tipo'>Serie</label>
                    <Input type="radio" name="tipo" value="serie" checked={formData.tipo === "serie"} onChange={handleChange}/>
                    <label className={styles.formLabel}>URL de la imagen:</label>
                    <Input name="imagen" type="url" value={formData.imagen} onChange={handleChange} placeholder="https://ejemplo.com/imagen.jpg"/><br/>
                    <Boton texto="Guardar" type="submit" />
                    <Boton texto="Cancelar" type="button" onClick={click} />
            </form>
        </div>
    );
};

export default Formulario;