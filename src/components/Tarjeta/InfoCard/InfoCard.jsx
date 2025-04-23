import Input from '../../Input/Input.jsx'
import Info from './Info.jsx'
import Tipo from '../Tipo/Tipo.jsx'

const InfoCard = ({ datos, estado}) => {
  return (
    <div className="info-card">
     <Info datos={datos.director} estadoCard={estado} texto={"Director"} placeholder="Director" onChange={(e) => handleChange('director', e.target.value)} />
     <Info datos={datos.anio} estadoCard={estado} texto={"Año"} placeholder="Año" onChange={(e) => handleChange('anio', e.target.value)} />
     <Info datos={datos.rating} estadoCard={estado} texto={"Rating"} type="number" min="1" max="10" placeholder="1-10" onChange={(e) => handleChange('rating', e.target.value)} />
     <Tipo datos={datos.tipo} estadoCard={estado} onChangePeli={() => handleChange('tipo', 'pelicula')} onChangeSerie={() => handleChange('tipo', 'serie')} />
    </div>
  );
};

export default InfoCard;