


import React, { useState, useEffect } from 'react';
import Reporte from './Reporte';

function App() {
  const [reportes, setReportes] = useState(() => {
    const data = localStorage.getItem('reportes');
    return data ? JSON.parse(data) : [];
  });

  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    localStorage.setItem('reportes', JSON.stringify(reportes));
  }, [reportes]);

  const agregarReporte = (e) => {
    e.preventDefault();

    if (categoria === '' || descripcion.trim() === '') {
      alert('Todos los campos son obligatorios');
      return;
    }

    const nuevoReporte = {
      categoria,
      descripcion,
    };

    setReportes([...reportes, nuevoReporte]);

    setCategoria('');
    setDescripcion('');
  };

  const eliminarReporte = (index) => {
    const nuevos = reportes.filter((_, i) => i !== index);
    setReportes(nuevos);
  };

  return (
    <div
      style={{
        padding: '30px',
        fontFamily: 'Arial',
        maxWidth: '700px',
        margin: '40px auto',
        backgroundColor: '#f4f6f8',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#1e3a5f',
          marginBottom: '25px',
        }}
      >
        Reportes Ciudadanos
      </h1>

      <form
        onSubmit={agregarReporte}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          marginBottom: '30px',
        }}
      >
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        >
          <option value="">Selecciona una categoría</option>
          <option value="Alumbrado público">Alumbrado público</option>
          <option value="Baches">Baches</option>
          <option value="Fugas de agua">Fugas de agua</option>
          <option value="Seguridad">Seguridad</option>
          <option value="Recolección de basura">
            Recolección de basura
          </option>
        </select>

        <textarea
          placeholder="Describe el problema"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          rows="4"
          style={{
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            resize: 'none',
          }}
        />

        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#1e3a5f',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Agregar Reporte
        </button>
      </form>

      {reportes.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          No hay reportes registrados.
        </p>
      ) : (
        reportes.map((r, index) => (
          <Reporte
            key={index}
            categoria={r.categoria}
            descripcion={r.descripcion}
            onEliminar={() => eliminarReporte(index)}
          />
        ))
      )}
    </div>
  );
}

export default App;
