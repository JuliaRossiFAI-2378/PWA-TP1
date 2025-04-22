import React from 'react';
import styles from './Contador.module.css';

const Contador = ({ 
  peliculas, 
  mostrarVistas, 
  filtros
  
}) => {
    // Función para contar pelis/series por género y tipo
    const contarPorGeneroYTipo = () => {
        const conteo = { 
            total: 0,
            totalPeliculas: 0,
            totalSeries: 0
        };
        
        peliculas.forEach(peli => {
            // aca los mismos filtros que home , esta bien? 
            if (mostrarVistas && !peli.vista) return;
            if (!mostrarVistas && peli.vista) return;
            if (filtros.genero !== "Todos" && peli.genero !== filtros.genero) return;
            if (filtros.tipo !== "Todos" && peli.tipo !== filtros.tipo) return;
            
            conteo.total++;
            
            // Contar por tipo
            if (peli.tipo === 'pelicula') {
                conteo.totalPeliculas++;
            } else if (peli.tipo === 'serie') {
                conteo.totalSeries++;
            }
            
            // Contar por género
            const genero = peli.genero || 'sin género';
            if (!conteo[genero]) {
                conteo[genero] = { total: 0, peliculas: 0, series: 0 };
            }
            conteo[genero].total++;
            
            if (peli.tipo === 'pelicula') {
                conteo[genero].peliculas++;
            } else {
                conteo[genero].series++;
            }
        });

        return conteo;
    };

    const estadisticas = contarPorGeneroYTipo();

    return (
        <div className={styles.contadorContainer}>
            <div className={styles.header}>
                <h3 className={styles.titulo}>
                    {mostrarVistas ? 'Contenido Visto' : 'Contenido por Ver'}
                    <span className={styles.total}>{estadisticas.total}</span>
                </h3>
                {}
            </div>
            
            <div className={styles.resumen}>
                <span>Películas: {estadisticas.totalPeliculas}</span>
                <span>Series: {estadisticas.totalSeries}</span>
            </div>
            
            <div className={styles.generosContainer}>
                {Object.entries(estadisticas).map(([key, value]) => {
                    if (key === 'total' || key === 'totalPeliculas' || key === 'totalSeries') return null;
                    
                    return (
                        <div key={key} className={styles.generoItem}>
                            <span className={styles.generoNombre}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}:
                            </span>
                            <div className={styles.detalleTipo}>
                                <span>Películas: {value.peliculas}</span>
                                <span>Series: {value.series}</span>
                                <span className={styles.generoCantidad}>Total: {value.total}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Contador;