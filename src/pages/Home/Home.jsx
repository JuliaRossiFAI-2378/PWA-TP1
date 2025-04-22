import { useEffect, useState } from 'react';
import Boton from '../../components/Boton/Boton';
import Titulo from '../../components/Titulo/Titulo';
import Formulario from '../../components/Formulario/Formulario';
import Tarjeta from '../../components/Tarjeta/tarjeton';
import Busqueda from '../../components/Busqueda/Busqueda';
import Contador from '../../components/Contador/Contador';
import Filtros from '../../components/Filtros/Filtros';
import Ordenamiento from '../../components/Ordenamiento/Ordenamiento';

const Home = () => {
    const [pagina, setPagina] = useState("vistas");
    const [terminoBusqueda, setTerminoBusqueda] = useState('');
    const [criterioBusqueda, setCriterioBusqueda] = useState('ambos');
    const [mostrarVistas, setMostrarVistas] = useState(true);
    const [peliculas, setPeliculas] = useState([]);
    const [filtros, setFiltros] = useState({
        genero: "Todos",
        tipo: "Todos"
    });
    const [criterioOrden, setCriterioOrden] = useState("none");
    const [direccionOrden, setDireccionOrden] = useState("asc");

    // Cargar películas al iniciar
    useEffect(() => {
        const cargarPeliculas = () => {
            const storage = localStorage.getItem("lista");
            if (storage) {
                const peliculasStorage = JSON.parse(storage);
                const peliculasCompletas = peliculasStorage.map(peli => ({
                    ...peli,
                    id: peli.id || Date.now(),
                    vista: peli.vista || false,
                    anio: Number(peli.anio) || 0,
                    rating: Number(peli.rating) || 0
                }));
                setPeliculas(peliculasCompletas);
            }
        };
        cargarPeliculas();
    }, [pagina]);

    // Función para ordenar 
    const ordenarPeliculas = (peliculas) => {
        if (criterioOrden === "none") return [...peliculas];
        
        return [...peliculas].sort((a, b) => {
            const valorA = a[criterioOrden];
            const valorB = b[criterioOrden];
            
            if (direccionOrden === "asc") {
                return valorA - valorB;
            } else {
                return valorB - valorA;
            }
        });
    };

    // Filtrar películas
    const peliculasFiltradas = peliculas.filter(pelicula => {
        // Filtro por estado (vistas/por vee)
        if (mostrarVistas && !pelicula.vista) return false;
        if (!mostrarVistas && pelicula.vista) return false;
        
        // Filtro por género
        if (filtros.genero !== "Todos" && pelicula.genero !== filtros.genero) {
            return false;
        }
        
        // Filtro por tipo
        if (filtros.tipo !== "Todos" && pelicula.tipo !== filtros.tipo) {
            return false;
        }
        
        // Filtro por búsqueda
        const terminoLower = terminoBusqueda.toLowerCase();
        if (criterioBusqueda === 'titulo') {
            return pelicula.titulo?.toLowerCase().includes(terminoLower);
        } else if (criterioBusqueda === 'director') {
            return pelicula.director?.toLowerCase().includes(terminoLower);
        }
        return (
            pelicula.titulo?.toLowerCase().includes(terminoLower) ||
            pelicula.director?.toLowerCase().includes(terminoLower)
        );
    });

    // Ordenar películas filtradas
    const peliculasFiltradasYOrdenadas = ordenarPeliculas(peliculasFiltradas);

    const mostrarFormulario = () => {
        setPagina(pagina === "vistas" ? "formulario" : "vistas");
    };

    const toggleVista = (id) => {
        const nuevasPeliculas = peliculas.map(peli => 
            peli.id === id ? { ...peli, vista: !peli.vista } : peli
        );
        localStorage.setItem("lista", JSON.stringify(nuevasPeliculas));
        setPeliculas(nuevasPeliculas);
    };

    const eliminarPelicula = (id) => {
        const nuevasPeliculas = peliculas.filter(peli => peli.id !== id);
        localStorage.setItem("lista", JSON.stringify(nuevasPeliculas));
        setPeliculas(nuevasPeliculas);
    };

    const handleGuardarEdicion = (datosEditados) => {
        const nuevasPeliculas = peliculas.map(peli => 
            peli.id === datosEditados.id ? { 
                ...datosEditados,
                anio: Number(datosEditados.anio),
                rating: Number(datosEditados.rating)
            } : peli
        );
        localStorage.setItem("lista", JSON.stringify(nuevasPeliculas));
        setPeliculas(nuevasPeliculas);
    };

    const handleFiltroChange = (filtro, valor) => {
        setFiltros(prev => ({
            ...prev,
            [filtro]: valor
        }));
    };

    if (pagina === "formulario") {
        return <Formulario click={mostrarFormulario} />;
    }

    return (
        <div className="contenido">
            <Titulo titulo="TP1 PWA" />
            
            {/* Controles superiores */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '20px',
                flexWrap: 'wrap',
                gap: '10px'
            }}>
                <Boton 
                    texto="Cargar Película/Serie" 
                    onClick={mostrarFormulario}
                    estilo={{ padding: '10px 20px', backgroundColor: '#6200ea', color: 'white' }}
                />
                
                <Busqueda 
                    terminoBusqueda={terminoBusqueda}
                    setTerminoBusqueda={setTerminoBusqueda}
                    criterio={criterioBusqueda}
                    setCriterio={setCriterioBusqueda}
                />
            </div>
            
            {}
            <div style={{ 
                display: 'flex', 
                gap: '10px', 
                marginBottom: '20px',
                justifyContent: 'center'
            }}>
                <Boton 
                    texto="Vistas" 
                    onClick={() => setMostrarVistas(true)}
                    estilo={mostrarVistas ? { 
                        backgroundColor: '#6200ea', 
                        color: 'white',
                        padding: '10px 20px'
                    } : {
                        padding: '10px 20px'
                    }}
                />
                <Boton 
                    texto="Por Ver" 
                    onClick={() => setMostrarVistas(false)}
                    estilo={!mostrarVistas ? { 
                        backgroundColor: '#6200ea', 
                        color: 'white',
                        padding: '10px 20px'
                    } : {
                        padding: '10px 20px'
                    }}
                />
            </div>

            {}
            <Filtros 
                filtros={filtros}
                onFiltroChange={handleFiltroChange}
            />

            {}
            <Ordenamiento 
                criterioOrden={criterioOrden}
                setCriterioOrden={setCriterioOrden}
                direccionOrden={direccionOrden}
                setDireccionOrden={setDireccionOrden}
            />

            <Contador 
                peliculas={peliculasFiltradas} 
                mostrarVistas={mostrarVistas}
                filtros={filtros}
                
            />
            
            {}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px',
                padding: '10px'
            }}>
                {peliculasFiltradasYOrdenadas.length > 0 ? 
                    peliculasFiltradasYOrdenadas.map((peli) => (
                        <Tarjeta 
                            key={peli.id}
                            peliserie={peli}
                            onToggleVista={() => toggleVista(peli.id)}
                            onEliminar={() => eliminarPelicula(peli.id)}
                            onGuardarEdicion={handleGuardarEdicion}
                            esVista={peli.vista}
                        />
                    )) : 
                    <div style={{
                        gridColumn: '1 / -1',
                        textAlign: 'center',
                        padding: '40px',
                        color: '#666'
                    }}>
                        <p>No se encontraron {mostrarVistas ? 'vistas' : 'por ver'} que coincidan con los filtros</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Home;