import styles from '../tarjeton.module.css' // Esto no es una buena practica. Cada modulo es para cada archivo de componente

const generosDisponibles = ["terror", "drama", "fantasia", "accion", "romance", "documental"];

const Generos = ({ genero, modoEdicion, onChange}) => {

  return (
      <div className="generos-container">
          {modoEdicion ? (
            <><span className={styles.etiqueta} >Género: </span>
              <select value={genero} onChange={onChange} className={styles.inputEdicion} >
                  {generosDisponibles.map(g => (
                      <option key={g} value={g}>
                          {g.charAt(0).toUpperCase() + g.slice(1)} 
                      </option>
                  ))}
              </select></>
          ) : (
              <><span className={styles.etiqueta} >Género: </span><span>{genero.charAt(0).toUpperCase() + genero.slice(1)}</span></>
          )}
      </div>
  );
};

export default Generos;