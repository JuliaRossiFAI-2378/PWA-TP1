const Boton = ({texto, onClick, val}) => {
    return (
        <div>
            <button onClick={onClick}>{texto}</button>
        </div>
    )
}

export default Boton;