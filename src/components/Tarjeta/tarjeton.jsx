import { useState } from 'react';
import styles from './tarjeton.module.css';
import Boton from '../Boton/Boton';

const Tarjeta = ({ peliserie, onToggleVista, onEliminar, onGuardarEdicion, esVista }) => {
    const [tipoCard, setTipoCard] = useState("view");
    const [iconoEstado, setIconoEstado] = useState(esVista ? "vista" : "no-vista");
    const [datosEditados, setDatosEditados] = useState({...peliserie});

    const generosDisponibles = ["terror", "drama", "fantasia", "accion", "romance", "documental"];

    const manejarClickVista = () => {
        const nuevoEstado = iconoEstado === "vista" ? "no-vista" : "vista";
        setIconoEstado(nuevoEstado);
        onToggleVista();
    };

    const obtenerImagenEstado = () => {
        switch(iconoEstado) {
            case "vista": return "./src/assets/seen.png";
            case "no-vista": return "./src/assets/notseen.png";
            default: return "./src/assets/notseen.png";
        }
    };

    const HandleClickEditar = () => {
        setTipoCard("edit");
    };

    const HandleClickCancelar = () => {
        setDatosEditados({...peliserie});
        setTipoCard("view");
    };

    const HandleClickGuardar = () => {
        onGuardarEdicion(datosEditados);
        setTipoCard("view");
    };

    const HandleClickEliminar = () => {
        setTipoCard("confirm");
    };

    const HandleClickConfirm = () => {
        onEliminar();
        setTipoCard("view");
    };

    const handleChange = (campo, valor) => {
        setDatosEditados(prev => ({
            ...prev,
            [campo]: valor
        }));
    };

    return (
        <div className={styles.tarjeta}>
            {tipoCard === "confirm" && (
                <div className={styles.confirm}>
                    <div className={styles.confirmCard}>
                        <h3>¿Eliminar {peliserie.titulo}?</h3>
                        <button 
                            className={styles.eliminar} 
                            onClick={HandleClickConfirm}
                        >
                            Confirmar
                        </button>
                        <button onClick={HandleClickCancelar}>
                            Cancelar
                        </button>
                    </div>
                    <div 
                        className={styles.mascara} 
                        onClick={HandleClickCancelar}
                    ></div>
                </div>
            )}
            
            <div className={styles.imagenContainer}>
                {peliserie.imagen && (
                    <img 
                        src={peliserie.imagen} 
                        alt={peliserie.titulo}
                        className={styles.imagenPelicula}
                        onError={(e) => {
                            e.target.src = './src/assets/default-movie.png';
                        }}
                    />
                )}
                
                {tipoCard === "view" && (
                    <div 
                        className={styles.iconoVista}
                        onClick={manejarClickVista}
                        title={iconoEstado === "vista" ? "Marcar como no vista" : "Marcar como vista"}
                    >
                        <img src={obtenerImagenEstado()} alt="Estado de visualización" />
                    </div>
                )}
            </div>
            
            <div className={styles.texto}>
                <div className={styles.areaTitulo}>
                    {tipoCard === "view" ? (
                        <h3 className={styles.tituloPelicula}>{peliserie.titulo}</h3>
                    ) : (
                        <input
                            type="text"
                            value={datosEditados.titulo}
                            onChange={(e) => handleChange('titulo', e.target.value)}
                            className={styles.inputEdicion}
                            placeholder="Título"
                        />
                    )}
                </div>
                
                <div className={styles.cuerpoTexto}>
                    {/* Director */}
                    <div className={styles.campo}>
                        <span className={styles.etiqueta}>Director:</span>
                        {tipoCard === "view" ? (
                            <span className={styles.valor}>{peliserie.director}</span>
                        ) : (
                            <input
                                type="text"
                                value={datosEditados.director}
                                onChange={(e) => handleChange('director', e.target.value)}
                                className={styles.inputEdicion}
                                placeholder="Director"
                            />
                        )}
                    </div>
                    
                    {/* Año */}
                    <div className={styles.campo}>
                        <span className={styles.etiqueta}>Año:</span>
                        {tipoCard === "view" ? (
                            <span className={styles.valor}>{peliserie.anio}</span>
                        ) : (
                            <input
                                type="number"
                                value={datosEditados.anio}
                                onChange={(e) => handleChange('anio', e.target.value)}
                                className={styles.inputEdicion}
                                placeholder="Año"
                            />
                        )}
                    </div>
                    
                    {/* Género */}
                    <div className={styles.campo}>
                        <span className={styles.etiqueta}>Género:</span>
                        {tipoCard === "view" ? (
                            <span className={styles.valor}>
                                {peliserie.genero.charAt(0).toUpperCase() + peliserie.genero.slice(1)}
                            </span>
                        ) : (
                            <select
                                value={datosEditados.genero}
                                onChange={(e) => handleChange('genero', e.target.value)}
                                className={styles.selectEdicion}
                            >
                                {generosDisponibles.map(genero => (
                                    <option key={genero} value={genero}>
                                        {genero.charAt(0).toUpperCase() + genero.slice(1)}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                    
                    {/* Rating */}
                    <div className={styles.campo}>
                        <span className={styles.etiqueta}>Rating:</span>
                        {tipoCard === "view" ? (
                            <span className={styles.valor}>{peliserie.rating}/10</span>
                        ) : (
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={datosEditados.rating}
                                onChange={(e) => handleChange('rating', e.target.value)}
                                className={styles.inputEdicion}
                                placeholder="1-10"
                            />
                        )}
                    </div>
                    
                    {/* Tipo */}
                    <div className={styles.campo}>
                        <span className={styles.etiqueta}>Tipo:</span>
                        {tipoCard === "view" ? (
                            <span className={styles.valor}>
                                {peliserie.tipo === 'pelicula' ? 'Película' : 'Serie'}
                            </span>
                        ) : (
                            <div className={styles.radioGroup}>
                                <label>
                                    <input
                                        type="radio"
                                        name="tipo"
                                        value="pelicula"
                                        checked={datosEditados.tipo === "pelicula"}
                                        onChange={() => handleChange('tipo', 'pelicula')}
                                    />
                                    Película
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="tipo"
                                        value="serie"
                                        checked={datosEditados.tipo === "serie"}
                                        onChange={() => handleChange('tipo', 'serie')}
                                    />
                                    Serie
                                </label>
                            </div>
                        )}
                    </div>
                    
                    {/* Botones */}
                    <div className={styles.botones}>
                        {tipoCard === "edit" ? (
                            <>
                                <Boton texto="Cancelar" onClick={HandleClickCancelar} />
                                <Boton texto="Guardar" onClick={HandleClickGuardar} />
                            </>
                        ) : (
                            <>
                                <Boton texto="Editar" onClick={HandleClickEditar} />
                                <Boton texto="Eliminar" onClick={HandleClickEliminar} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;