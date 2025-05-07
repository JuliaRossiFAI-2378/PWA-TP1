import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import styles from './Ordenamiento.module.css';

const Ordenamiento = ({ criterioOrden, setCriterioOrden, direccionOrden, setDireccionOrden }) => {
  const toggleDireccion = () => {
    setDireccionOrden(prev => prev === "asc" ? "desc" : "asc");
  };

  return (
    <div className={styles.ordenamientoContainer}>
      <div className={styles.ordenamientoGroup}>
        <label>Ordenar por:</label>
        <select value={criterioOrden} onChange={(event) => setCriterioOrden(event.target.value)} className={styles.selectOrden}>
          <option value="none">Sin orden</option>
          <option value="anio">Año</option>
          <option value="rating">Rating</option>
        </select>
      </div>

{/* aca podrian haber usado su componente de boton */}
      {criterioOrden !== 'none' && (
        <button 
          onClick={toggleDireccion}
          className={styles.botonDireccion}
          aria-label={`Cambiar dirección a ${direccionOrden === 'asc' ? 'descendente' : 'ascendente'}`}
        >
          {direccionOrden === 'asc' ? (
            <ArrowUp size={20} className={styles.icono} />
          ) : (
            <ArrowDown size={20} className={styles.icono} />
          )}
        </button>
      )}
    </div>
  );
};

export default Ordenamiento;