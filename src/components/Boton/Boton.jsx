import styles from '../Tarjeta/tarjeton.module.css'

const Boton = ({texto, onClick, estilo, type=null}) => {// estilo se escribe como styles. y el nombre del estilo
    return (
            <button type={type} className={estilo} onClick={onClick}>{texto}</button>
    )
}

export default Boton;