const Boton = ({texto, onClick, type}) => {
    return (
        <div>
            <button type={type} onClick={onClick}>{texto}</button>
        </div>
    )
}

export default Boton;