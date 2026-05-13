import React from 'react';

function Reporte({ categoria, descripcion, onEliminar }) {
  return (
    <div
  style={{
    backgroundColor: '#ffffff',
    border: '1px solid #dcdcdc',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
    color: '#333',
  }}
>
      <h3 style={{ color: '#1e3a5f' }}>
        {categoria}
      </h3>

      <p>
        {descripcion}
      </p>

      <button
        onClick={onEliminar}
        style={{
          marginTop: '10px',
          padding: '8px 12px',
          backgroundColor: '#d9534f',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Reporte;