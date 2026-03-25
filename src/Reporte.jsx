import React from 'react';

function Reporte({ titulo, descripcion, onEliminar }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '5px'
    }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      <button onClick={onEliminar} style={{ marginTop: '10px' }}>
        Eliminar
      </button>
    </div>
  );
}

export default Reporte;