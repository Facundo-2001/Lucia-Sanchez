import React, { useState, useEffect } from 'react';
import './Carrusel.css';

const Carrusel = ({ imagenes, intervalo = 5000 }) => {
  const [indiceActual, setIndiceActual] = useState(0);

  // Efecto para manejar el pase automático de las imágenes
  useEffect(() => {
    // Si no hay imágenes, no hacemos nada
    if (!imagenes || imagenes.length === 0) return;

    // Configuramos el temporizador
    const timer = setInterval(() => {
      setIndiceActual((prevIndice) => 
        // Si estamos en la última imagen, volvemos a la primera (0), sino pasamos a la siguiente
        prevIndice === imagenes.length - 1 ? 0 : prevIndice + 1
      );
    }, intervalo);

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(timer);
  }, [imagenes, intervalo]);

  if (!imagenes || imagenes.length === 0) {
    return null;
  }

  return (
    <div className="carrusel-container">
      {imagenes.map((imagen, index) => (
        <div
          key={index}
          className="carrusel-slide"
          style={{ opacity: index === indiceActual ? 1 : 0 }}
        >
          <img src={imagen} alt={`Slide ${index + 1}`} className="carrusel-imagen" />
        </div>
      ))}

      {/* Indicadores (puntitos) opcionales para saber en qué imagen estamos */}
      <div className="carrusel-indicadores">
        {imagenes.map((_, index) => (
          <span
            key={index}
            className={`carrusel-punto ${index === indiceActual ? 'activo' : ''}`}
            onClick={() => setIndiceActual(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
