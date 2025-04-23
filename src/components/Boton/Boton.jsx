const Boton = ({texto, onClick, estilo, type=null}) => {
    return (
            <button type={type} className={estilo} onClick={onClick}>{texto}</button>
    )
}

export default Boton;