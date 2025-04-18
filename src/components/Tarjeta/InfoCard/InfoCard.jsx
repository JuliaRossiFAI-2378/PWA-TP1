import Input from '../../Input/Input.jsx'
import Info from './Info.jsx'


const InfoCard = ({datos, estado}) => {
    
  return (<div>
    <Info datos={datos.director} estadoCard={estado} texto={"Director"}/>
    <Info datos={datos.anio} estadoCard={estado} texto={"Año"}/>
    <Info datos={datos.rating} estadoCard={estado} texto={"Rating"}/>
    <Info datos={datos.tipo} estadoCard={estado} texto={"Tipo"}/>
    </div>
  )
} 
export default InfoCard