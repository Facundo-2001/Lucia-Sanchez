import React from 'react';
import Carrusel from '../../componentes/carrusel/Carrusel.jsx';
import './Arfw.css';

// Define aquí las rutas a las imágenes que quieres mostrar en el carrusel.
const imagenesHome = [
  '/imagenes/imagen-carrusel-1.jpg', // Reemplaza con la ruta a tu imagen 1
  '/imagenes/imagen-carrusel-2.jpg', // Reemplaza con la ruta a tu imagen 2
  '/imagenes/imagen-carrusel-3.jpg', // Reemplaza con la ruta a tu imagen 3
];

const Arfw = () => {
  return (
    <div className="arfw-container">
      <div className="arfw-intro">
        <h1>Lucia Sanchez</h1>
        <p>makeup artist</p>
      </div>

      <Carrusel imagenes={imagenesHome} />
    </div>
  );
};

export default Arfw;