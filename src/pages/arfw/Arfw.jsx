import React from 'react';
import Carrusel from '../../componentes/carrusel/Carrusel.jsx';
import './Arfw.css';

// Define aquí las rutas a las imágenes que quieres mostrar en el carrusel.
const imagenesHome = [
  '../src/assets/home/makeup-arfw.jpeg', // Reemplaza con la ruta a tu imagen 1
  '../src/assets/home/makeup-arfw-2.jpeg', // Reemplaza con la ruta a tu imagen 2
  '../src/assets/home/makeup-arfw-3.jpeg', // Reemplaza con la ruta a tu imagen 3
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