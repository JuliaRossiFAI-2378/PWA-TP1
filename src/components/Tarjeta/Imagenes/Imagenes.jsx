import styles from '../tarjeton.module.css'



const Imagenes = ({datos, estadoImg, clickHandler, hoverHandler}) =>//notita: los handlers son callbacks
    <div className={styles.imagenes}>
      <img className={styles.imagen} src={datos}></img>
      <img className={styles.imagen} src={estadoImg} onClick={clickHandler} onMouseEnter={()=>hoverHandler({tipo:"entra"})} onMouseLeave={()=>hoverHandler({tipo:"sale"})}></img>
    </div>
  ;

export default Imagenes