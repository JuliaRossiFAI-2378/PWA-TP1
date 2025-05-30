import styles from '../tarjeton.module.css'



const Imagen = ({datos, icono, onClickIcono}) =>
    <div className={styles.imagenContainer} >
      <img src={datos} className={styles.imagenPelicula} />
      <div onClick={onClickIcono} className={styles.iconoVista} >
        <img src={icono}/>
      </div>
    </div>
;

export default Imagen