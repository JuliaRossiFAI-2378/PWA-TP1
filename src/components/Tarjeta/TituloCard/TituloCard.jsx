import { useState } from 'react'
import Input from '../../Input/Input.jsx'
import styles from '../tarjeton.module.css'


const TituloCard = ({titulo, estado}) => {
  const [tituloActual, setTituloActual] = useState(titulo)
  return (<Input onChange={setTituloActual} value={tituloActual} lectura={estado!="edit"} estilo={`${estado!="edit" ? styles.inputEscondido : ""} ${styles.titulo}`} />)
} 
export default TituloCard