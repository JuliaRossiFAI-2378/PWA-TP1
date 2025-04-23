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
                    <Input name="titulo" type="text" value={formData.titulo} onChange={handleChange} required estilo={styles.input} />
                    <label className={styles.formLabel}>Director:</label>
                    <Input name="director" type="text" value={formData.director} onChange={handleChange} required estilo={styles.input} />
                    <label className={styles.formLabel}>Año:</label>
                    <Input name="anio" type="number" value={formData.anio} onChange={handleChange} estilo={styles.input} />
                    <label className={styles.formLabel}>Género:</label>
                    <select name="genero" value={formData.genero} onChange={handleChange} className={styles.select} >
                        <option value="terror">Terror</option>
                        <option value="drama">Drama</option>
                        <option value="fantasia">Fantasía</option>
                        <option value="accion">Acción</option>
                        <option value="romance">Romance</option>
                        <option value="documental">Documental</option>
                    </select>
                    <label className={styles.formLabel}>Rating (1-10):</label>
                    <Input name="rating" type="number" min="1" max="10" value={formData.rating} onChange={handleChange} className={styles.input} />        
                    <div className={styles.radioContainer}>
                        <p className={styles.radioTitle} >Tipo:</p>
                        <div className={styles.radioGroup}>
                            <Input type="radio" name="tipo" value="pelicula" id="nameP" checked={formData.tipo === "pelicula"} onChange={handleChange} estilo={styles.radioOptions} /><br/>
                            <label htmlFor='tipoP' className={styles.radioLabel} >Pelicula</label>
                            <Input type="radio" name="tipo" value="serie" id="nameS" checked={formData.tipo === "serie"} onChange={handleChange} estilo={styles.radioOptions} />
                            <label htmlFor='tipoS' className={styles.radioLabel} >Serie</label>
                        </div>
                    </div>
                    <label className={styles.formLabel}>URL de la imagen:</label>
                    <Input name="imagen" type="url" value={formData.imagen} onChange={handleChange} placeholder="https://ejemplo.com/imagen.jpg" estilo={styles.input} /><br/>
                    <div className={styles.buttonGroup} >
                        <Boton texto="Guardar" type="submit" estilo={styles.primaryButton} />
                        <Boton texto="Cancelar" type="button" onClick={click}  estilo={styles.secondaryButton} />
                    </div>
            </form>
        </div>
    );
};

export default Formulario;