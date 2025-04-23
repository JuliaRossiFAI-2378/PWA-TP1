import React from 'react';
import styles from './Busqueda.module.css';
import Input from '../Input/Input';
const Busqueda = ({ terminoBusqueda, setTerminoBusqueda, criterio, setCriterio }) => {
    return (
        <div className={styles.busquedaContainer}>
            <Input
                type="text"
                placeholder="Ingrese título o director"
                value={terminoBusqueda}
                onChange={(event) => setTerminoBusqueda(event.target.value)}
                estilo={styles.busquedaInput}
            />
            <select value={criterio} onChange={(event) => setCriterio(event.target.value)} className={styles.busquedaSelect}>
                <option value="ambos">Ambos</option>
                <option value="titulo">Título</option>
                <option value="director">Director</option>
            </select>
        </div>
    );
};

export default Busqueda;