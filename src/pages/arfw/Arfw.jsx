import React from 'react';
import Carrusel from '../../componentes/carrusel/Carrusel.jsx';
import './Arfw.css';


const imagenesHome = [
  '/assets/home/makeup-arfw.webp',
  '/assets/home/makeup-arfw-2.webp',
  '/assets/home/makeup-arfw-3.webp'
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