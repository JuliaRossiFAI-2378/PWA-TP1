import { useState } from 'react'
const Input = ({idInput, nombre, tipo}) => {
    const [valorInput, setValorInput] = useState("");

    const cambio = (evento) => {
        setValorInput(evento.target.value);
    } 
    
    return (
        <input value={valorInput} onChange={cambio} id={idInput} name={nombre} type={tipo}/>
    )
}
export default Input;