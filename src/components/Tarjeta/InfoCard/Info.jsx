import { useState } from 'react'
import Input from '../../Input/Input.jsx'
import styles from '../tarjeton.module.css'

const Info = ({datos, estadoCard, texto}) => {
  const [categoria, setCategoria] = useState(datos)

  return (<p>{texto+": "}<Input onChange={setCategoria} value={categoria} lectura={estadoCard!="edit"} estilo={`${estadoCard!="edit" ? styles.inputEscondido : ""} ${styles.info}`} /></p>)
} 
export default Info