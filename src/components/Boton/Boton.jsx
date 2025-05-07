const Boton = ({texto, onClick, estilo, type=null}) => {
    //Veo que mandan los estilos del boton por prop. No esta mal si fuera SIEMPRE distinto, pero 
    //en muchos lados mandan boton.secondary, boton.primary, eso me hace entender
    //de que hay variantes de este boton y dado que es la responsabildad del boton
    // saber como renderizar en cada variante, deberia manipularse en este file.


    //const Boton = ({texto, onClick, variant, type=null}) -> con variant = 'primary' | 'secondary' | 'cancelar' o cualquier otro
    // y aca aplicar un estilo u otro dependiendo el variant.

    return (
            <button type={type} className={estilo} onClick={onClick}>{texto}</button>
    )
}

export default Boton;