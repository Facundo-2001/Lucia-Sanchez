import React from 'react';
import Carrusel from '../../componentes/carrusel/Carrusel.jsx';
import './Arfw.css';
import img1 from '/assets/home/makeup-arfw.jpeg';
import img2 from '/assets/home/makeup-arfw-2.jpeg';
import img3 from '/assets/home/makeup-arfw-3.jpeg';

// Define aquí las rutas a las imágenes que quieres mostrar en el carrusel.
const imagenesHome = [img1, img2, img3];

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