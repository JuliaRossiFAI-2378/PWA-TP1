import React from 'react';
import './Busqueda.css';

const Busqueda = ({ terminoBusqueda, setTerminoBusqueda, criterio, setCriterio }) => {
    return (
        <div style={{ width: '60%', maxWidth: '500px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Podes buscar por título o director"
                    value={terminoBusqueda}
                    onChange={(e) => setTerminoBusqueda(e.target.value)}
                    style={{
                        padding: '8px 12px',
                        flex: 1,
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px'
                    }}
                />
                <select
                    value={criterio}
                    onChange={(e) => setCriterio(e.target.value)}
                    style={{
                        padding: '8px 12px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        cursor: 'pointer'
                    }}
                >
                    <option value="ambos">Ambos</option>
                    <option value="titulo">Título</option>
                    <option value="director">Director</option>
                </select>
            </div>
        </div>
    );
};

export default Busqueda;