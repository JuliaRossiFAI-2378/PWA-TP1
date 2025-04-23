import Input from '../../Input/Input.jsx'
import styles from '../tarjeton.module.css'

const Tipo = ({datos, estadoCard, onChangePeli, onChangeSerie}) =>
    estadoCard==="view" ?
    <div className={styles.campo} ><span className={styles.etiqueta} >{"Tipo: "}</span>{datos}</div>:
    <div className={styles.campo}>
        <span className={styles.etiqueta} >Tipo:</span>
        <Input type="radio" name="tipoP" value="pelicula" checked={datos==="pelicula"} onChange={onChangePeli} />
        <label htmlFor="tipoP">Pelicula</label>
        <Input type="radio" name="tipoS" value="serie" checked={datos==="serie"} onChange={onChangeSerie} />
        <label htmlFor="tipoS">Serie</label>
    </div>
    ;

export default Tipo;