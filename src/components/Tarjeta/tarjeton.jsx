import { useState } from 'react';
import styles from './tarjeton.module.css';
import Boton from '../Boton/Boton';
import Imagen from './Imagenes/Imagenes.jsx';
import Info from './Info/Info.jsx';
import Tipo from './Tipo/Tipo.jsx'
import Generos from './Generos/Generos.jsx'
import TituloCard from './TituloCard/TituloCard.jsx';

const Tarjeta = ({ peliserie, onToggleVista, onEliminar, onGuardarEdicion, esVista }) => {
    const [tipoCard, setTipoCard] = useState("view");
    const [iconoEstado, setIconoEstado] = useState(esVista ? "vista" : "no-vista");
    const [datosEditados, setDatosEditados] = useState({...peliserie});

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

    const Confirmacion = () =>
        tipoCard==="confirm" ?
        <div>
            <div className={styles.confirmCard}>
                <h3>¿Eliminar {peliserie.titulo}?</h3>
                <button className={styles.eliminar} onClick={HandleClickConfirm}>
                    Confirmar
                </button>
                <button onClick={HandleClickCancelar}>
                    Cancelar
                </button>
            </div>
            <img className={styles.mascara} src="./src/assets/mascara.png" onClick={HandleClickCancelar}></img>
        </div>
        : null
    ;


    return (
        <div className={styles.tarjeta}>

            <Confirmacion/>

            <Imagen datos={peliserie.imagen} icono={obtenerImagenEstado()} onClickIcono={manejarClickVista} />
            
            <TituloCard titulo={datosEditados.titulo} estadoCard={tipoCard} onChange={(evento) => handleChange('titulo', evento.target.value)} />
            
            <div className={styles.datosTarjeta} >
                <Info datos={datosEditados.director} estadoCard={tipoCard} texto={"Director"} placeholder="Director" onChange={(evento) => handleChange('director', evento.target.value)} />
                <Info datos={datosEditados.anio} estadoCard={tipoCard} texto={"Año"} placeholder="Año" onChange={(evento) => handleChange('anio', evento.target.value)} />
                <Generos genero={datosEditados.genero} modoEdicion={tipoCard === "edit"} onChange={(evento) => handleChange('genero', evento.target.value)} />
                <Info datos={datosEditados.rating} estadoCard={tipoCard} texto={"Rating"} type="number" min="1" max="10" placeholder="1-10" onChange={(evento) => handleChange('rating', evento.target.value)} />
                <Tipo datos={datosEditados.tipo} estadoCard={tipoCard} onChangePeli={() => handleChange('tipo', 'pelicula')} onChangeSerie={() => handleChange('tipo', 'serie')} />
            </div>

                {/* Botones */}
            
            <div className={styles.botones}>
                        {tipoCard === "edit" ? (
                            <>
                                <Boton texto="Cancelar" onClick={HandleClickCancelar} estilo={styles.secondaryButton} />
                                <Boton texto="Guardar" onClick={HandleClickGuardar} estilo={styles.primaryButton} />
                            </>
                        ) : (
                            <>
                                <Boton texto="Editar" onClick={HandleClickEditar} estilo={styles.secondaryButton} />
                                <Boton texto="Eliminar" onClick={HandleClickEliminar} estilo={styles.tertiaryButton} />
                            </>
                        )}
            </div>


        </div>
        )
}

export default Tarjeta;