import { useState } from 'react';
import Boton from '../Boton/Boton';

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.titulo || !formData.director) {
            alert("Por favor complete título y director");
            return;
        }

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
        <div style={{
            maxWidth: '500px',
            margin: '20px auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Agregar Película/Serie</h2>
            
            <form onSubmit={handleSubmit}>
                {}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Título:</label>
                    <input
                        name="titulo"
                        type="text"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    />
                </div>

                {}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Director:</label>
                    <input
                        name="director"
                        type="text"
                        value={formData.director}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    />
                </div>

                {}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Año:</label>
                    <input
                        name="anio"
                        type="number"
                        value={formData.anio}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    />
                </div>

                {}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Género:</label>
                    <select
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    >
                        <option value="terror">Terror</option>
                        <option value="drama">Drama</option>
                        <option value="fantasia">Fantasía</option>
                        <option value="accion">Acción</option>
                        <option value="romance">Romance</option>
                        <option value="documental">Documental</option>
                    </select>
                </div>

                {}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Rating (1-10):</label>
                    <input
                        name="rating"
                        type="number"
                        min="1"
                        max="10"
                        value={formData.rating}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    />
                </div>

                {}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Tipo:</label>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <label>
                            <input
                                type="radio"
                                name="tipo"
                                value="pelicula"
                                checked={formData.tipo === "pelicula"}
                                onChange={handleChange}
                            /> Película
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="tipo"
                                value="serie"
                                checked={formData.tipo === "serie"}
                                onChange={handleChange}
                            /> Serie
                        </label>
                    </div>
                </div>

                {}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>URL de la imagen:</label>
                    <input
                        name="imagen"
                        type="url"
                        value={formData.imagen}
                        onChange={handleChange}
                        placeholder="https://ejemplo.com/imagen.jpg"
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    />
                </div>

                {}
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                    <Boton
                        texto="Guardar"
                        type="submit"
                        estilo={{
                            padding: '10px 20px',
                            backgroundColor: '#4CAF50',
                            color: 'white'
                        }}
                    />
                    <Boton
                        texto="Cancelar"
                        type="button"
                        onClick={click}
                        estilo={{
                            padding: '10px 20px',
                            backgroundColor: '#f44336',
                            color: 'white'
                        }}
                    />
                </div>
            </form>
        </div>
    );
};

export default Formulario;