import React, { useState, useEffect } from 'react';
import Reporte from './Reporte';

function App() {
  
  const [reportes, setReportes] = useState(() => {
  const data = localStorage.getItem("reportes");
  return data ? JSON.parse(data) : [];
});;

  
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  

  useEffect(() => {
  localStorage.setItem("reportes", JSON.stringify(reportes));
  }, [reportes]);

  const agregarReporte = (e) => {
  e.preventDefault();

  if (titulo.trim() === '' || descripcion.trim() === '') {
    alert("Todos los campos son obligatorios");
    return;
  }

  setReportes([...reportes, { titulo, descripcion }]);
  setTitulo('');
  setDescripcion('');
};

  return (
    
    <div style={{
        padding: '20px',
        fontFamily: 'Arial',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#ffffff',
        color: '#333',
        borderRadius: '10px'
     }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Reportes Ciudadanos</h1>

      
      <form
        onSubmit={agregarReporte}
        style={{
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
        }}>

        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          style={{ padding: '8px' }}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          style={{ padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px' }}>Agregar Reporte</button>
      </form>

      
    {reportes.map((r, index) => (
    <Reporte
      key={index}
      titulo={r.titulo}
      descripcion={r.descripcion}
      onEliminar={() => {
      const nuevos = reportes.filter((_, i) => i !== index);
      setReportes(nuevos);
     }}
     />
     ))}  
    </div>
  );
}

export default App;
