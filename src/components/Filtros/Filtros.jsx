import React from 'react';
import styles from './Filtros.module.css';

const Filtros = ({ filtros, onFiltroChange }) => {
    const generos = ["Todos", "terror", "drama", "fantasia", "accion", "romance", "documental"]; 
    const tipos = ["Todos", "pelicula", "serie"];

    return (
        <div className={styles.filtrosContainer}>
            <div className={styles.filtroGroup}>
                <label>Género:</label>
                <select
                    value={filtros.genero}
                    onChange={(event) => onFiltroChange('genero', event.target.value)}
                    className={styles.selectFiltro}
                >
                    {generos.map(genero => (
                        <option key={genero} value={genero}>
                            {genero === "Todos" ? "Todos los géneros" : genero.charAt(0).toUpperCase() + genero.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.filtroGroup}>
                <label>Tipo:</label>
                <select
                    value={filtros.tipo}
                    onChange={(event) => onFiltroChange('tipo', event.target.value)}
                    className={styles.selectFiltro}
                >
                    {tipos.map(tipo => (
                        <option key={tipo} value={tipo}>
                            {tipo === "Todos" ? "Todos los tipos" : tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filtros;
