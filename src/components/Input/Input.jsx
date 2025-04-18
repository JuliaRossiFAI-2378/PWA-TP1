const Input  = ({onChange, value, estilo, lectura=false}) => {//tenemos un callback como parametro

    const handleChange = (evento) => {//campo de input siendo modificado
        onChange(evento.target.value)
    }

    return <input className={estilo}//aca enviamos styles. y el nombre de la clase que queramos usar
     value={value} readOnly={lectura} onChange={handleChange} />
}

export default Input