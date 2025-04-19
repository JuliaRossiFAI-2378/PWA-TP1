import { useState } from 'react'
import styles from './tarjeton.module.css'
import Input from '../Input/Input.jsx'
import TituloCard from './TituloCard/TituloCard.jsx'
import InfoCard from './InfoCard/InfoCard.jsx'
import Generos from './Generos/Generos.jsx'
import Imagenes from './Imagenes/Imagenes.jsx'
import Boton from '../Boton/Boton.jsx'

const Tarjeta = (peliserie) => {

//aca se puede generar clave para la tarjeta si necesitamos
//todavia me falta que esto salga de localstorage
const [datosCard, setDatosCard] = useState(peliserie.peliserie)
//setDatosCard(localstorage.leertarjeta) pa guardar datos


// ./src/assets/notseen.png-  ./src/assets/seen.png-  ./src/assets/hovernotseen.png-  ./src/assets/hoverseen.png-  ./src/assets/edit.png
const [estadoImg, setEstadoImg] = useState(datosCard.vista ? "./src/assets/seen.png" : "./src/assets/notseen.png");

const imgClickHandler = () =>
  estadoImg === "./src/assets/hoverseen.png" ? setEstadoImg("./src/assets/notseen.png") :
  estadoImg === "./src/assets/hovernotseen.png" ? setEstadoImg("./src/assets/seen.png") :
  ""
;

const imgHoverHandler = ({tipo}) =>{
  if(tipoCard==="edit" && tipo==="entra"){
    setEstadoImg("./src/assets/edit.png")
  }else{
    if(tipo==="entra"){
      switch(estadoImg){
        case "./src/assets/seen.png":
          setEstadoImg("./src/assets/hoverseen.png")
          break;
        case "./src/assets/notseen.png":
          setEstadoImg("./src/assets/hovernotseen.png")
          break;
      }
    }else if(tipo==="sale"){
      switch(estadoImg){
        case "./src/assets/hoverseen.png":
          setEstadoImg("./src/assets/seen.png")
          break;
        case "./src/assets/hovernotseen.png":
          setEstadoImg("./src/assets/notseen.png")
          break;
        case "./src/assets/edit.png":
          setEstadoImg("./src/assets/notseen.png")
          break;
      }
    }
  }
}


const imgEditClickHandler = () => "";//un poco de logica faltante :)

const [tipoCard, setTipoCard] = useState("view"); //view/edit/confirm

const HandleClickEditar = () => setTipoCard("edit");

const HandleClickGuardar = () => {
  // var datos = {titulo: refTitulo.current.textContent, info: [refDir.current.textContent, refAnio.current.textContent, refRating.current.textContent, refTipo.current.textContent], genero: refGenero.current.value, img: datosCard.img}
  //toda la logica cochina de cambiar la imagen ;-;
  // setDatosCard(datos);
  //falta guardar datos de estado en el json
  setTipoCard("view")}
;

  //este tiene que forzar una recarga creo
  const HandleClickCancelar = () => setTipoCard("view");

  const HandleClickEliminar = () => setTipoCard("confirm");

  const HandleClickConfirm = () => setTipoCard("view");

  const BotonesCard = () =>
    tipoCard==="edit" ?
    <div className={styles.botones}>
      <Boton texto={"Cancelar"} onClick={HandleClickCancelar} estilo={styles.editar}/>
      
      <Boton texto={"Guardar"} onClick={HandleClickGuardar} estilo={styles.editar}/>
    </div>
    :
    <div className={styles.botones}>
      <Boton texto={"Editar"} onClick={HandleClickEditar} estilo={styles.editar}/>
      <Boton texto={"Eliminar"} onClick={HandleClickEliminar} estilo={styles.eliminar}/>
    </div>
  ;

  const Confirmacion = () => //falta recibir y eliminar datos
    tipoCard==="confirm" ? 
    <div className={styles.confirm}>
      <div className={styles.confirmCard}>
        <h3>Desea eliminar *insertar nombre aca*</h3>
        <button className={styles.eliminar}>Confirmar</button>
        <button onClick={HandleClickConfirm}>Cancelar</button>
      </div>
      <img className={styles.mascara} src="./src/assets/mascara.png" onClick={HandleClickConfirm}></img>
    </div>
    : null
  ;

  return (
    //cada tarjeta necesita su propia clave, esto lo hacemos aca o en el home?
    <div className={styles.tarjeta}>
      <Confirmacion/>
        <Imagenes datos={datosCard.imagen} estadoImg={estadoImg} clickHandler={imgClickHandler} hoverHandler={imgHoverHandler} />
        <div className={styles.texto}>
          <div className={styles.areaTitulo}>
            <TituloCard titulo={datosCard.titulo} estado={tipoCard}  />
          </div>
          <div className={styles.cuerpoTexto}>
            <InfoCard datos={datosCard} estado={tipoCard}/>
            <Generos estado={tipoCard} genero={datosCard.genero}/>
            <BotonesCard/>
          </div>
        </div>
    </div>
  )
}

export default Tarjeta
