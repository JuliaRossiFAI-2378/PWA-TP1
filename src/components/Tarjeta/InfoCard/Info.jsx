import Input from '../../Input/Input.jsx'
import styles from '../tarjeton.module.css'

const Info = ({datos, estadoCard, texto, onChange, ...props}) => {
  return (<div><span className={styles.etiqueta} >{texto+": "}</span><Input onChange={onChange} value={datos} lectura={estadoCard!="edit"} estilo={`${estadoCard!="edit" ? styles.inputEscondido : ""} ${styles.info}`} {...props} /></div>)
} 
export default Info