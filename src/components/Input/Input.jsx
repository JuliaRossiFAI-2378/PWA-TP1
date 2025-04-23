import React from 'react';
import Styles from './Input.module.css'

const Input  = ({onChange, estilo, lectura=false, ...props}) => {//tenemos un callback como parametro


    return <input className={estilo}//aca enviamos styles. y el nombre de la clase que queramos usar
     readOnly={lectura} onChange={onChange} {...props} />
}

export default Input;