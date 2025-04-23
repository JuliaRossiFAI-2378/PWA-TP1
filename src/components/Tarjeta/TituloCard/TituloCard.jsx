import styles from '../tarjeton.module.css'
import Input from '../../Input/Input';

const TituloCard = ({titulo, estadoCard, onChange}) => 
  estadoCard==="edit" ?
  <Input type="text" value={titulo} className={styles.inputEdicion} placeholder="Título" onChange={onChange} /> :    
  <h3 className={styles.tituloPelicula}>
    {titulo}
  </h3>
;


export default TituloCard;