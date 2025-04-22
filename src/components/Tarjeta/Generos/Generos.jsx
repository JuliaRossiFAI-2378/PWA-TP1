const Generos = ({ genero, modoEdicion, onChange }) => {
  const generosDisponibles = [
      "comedia", "accion", "aventura", "fantasia", "suspenso", "animacion"
  ];

  return (
      <div className="generos-container">
          {modoEdicion ? (
              <select
                  value={genero}
                  onChange={(e) => onChange(e.target.value)}
              >
                  {generosDisponibles.map(g => (
                      <option key={g} value={g}>
                          {g.charAt(0).toUpperCase() + g.slice(1)} 
                      </option>
                  ))}
              </select>
          ) : (
              <span>Género: {genero.charAt(0).toUpperCase() + genero.slice(1)}</span>
          )}
      </div>
  );
};

export default Generos;