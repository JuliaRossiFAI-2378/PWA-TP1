const InfoCard = ({ datos, modoEdicion, onChange }) => {
  return (
      <div className="info-card">
          {modoEdicion ? (
              <>
                  <div className="info-group">
                      <label>Director:</label>
                      <input
                          type="text"
                          value={datos.director}
                          onChange={(e) => onChange('director', e.target.value)}
                      />
                  </div>
                  <div className="info-group">
                      <label>Año:</label>
                      <input
                          type="number"
                          value={datos.anio}
                          onChange={(e) => onChange('anio', e.target.value)}
                      />
                  </div>
                  {}
              </>
          ) : (
              <>
                  <p>Director: {datos.director}</p>
                  <p>Año: {datos.anio}</p>
                 
              </>
          )}
      </div>
  );
};

export default InfoCard;