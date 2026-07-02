import React, { useState } from 'react';
import './Eventos.css';

// Array de fotos: Solo cargas las direcciones de tus imágenes de Git
const fotosGaleria = [
  { id: 1, url: '../src/assets/portfolio/eventos/tutankamos-01.jpg' },
  { id: 2, url: '../src/assets/portfolio/eventos/tutankamos-03.jpg' },
  { id: 3, url: '../src/assets/portfolio/eventos/tutankamos-04.jpg' }
  { id: 4, url: '../src/assets/portfolio/eventos/tutankamos-05.jpg' }
  { id: 5, url: '../src/assets/portfolio/eventos/tutankamos-06.jpg' }
  { id: 6, url: '../src/assets/portfolio/eventos/tutankamos-07.jpg' }
  { id: 7, url: '../src/assets/portfolio/eventos/tutankamos-08.jpg' }
  { id: 8, url: '../src/assets/portfolio/eventos/tutankamos-09.jpg' }
  { id: 9, url: '../src/assets/portfolio/eventos/tutankamos-10.jpg' }
  { id: 10, url: '../src/assets/portfolio/eventos/tutankamos-11.jpg' }
  { id: 11, url: '../src/assets/portfolio/eventos/tutankamos-12.jpg' }
  { id: 12, url: '../src/assets/portfolio/eventos/arfw-01.jpg' }
  { id: 13, url: '../src/assets/portfolio/eventos/arfw-02.jpg' }
  { id: 14, url: '../src/assets/portfolio/eventos/arfw-03.jpg' }
  { id: 15, url: '../src/assets/portfolio/eventos/arfw-04.jpg' }
];

const Galeria = () => {
  const [imagenActiva, setImagenActiva] = useState(null);

  return (
    <div className="galeria-section-container">
      
      <div className="galeria-grid">
        {fotosGaleria.map((foto) => (
          <div 
            className="galeria-item-card" 
            key={foto.id}
            onClick={() => setImagenActiva(foto)}
          >
            <div className="galeria-img-wrapper">
              <img src={foto.url} alt="Trabajo de portfolio" />
              <div className="galeria-item-overlay">
              </div>
            </div>
          </div>
        ))}
      </div>

      {imagenActiva && (
        <div className="lightbox-overlay" onClick={() => setImagenActiva(null)}>
          <button className="lightbox-close-btn" onClick={() => setImagenActiva(null)}>&times;</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={imagenActiva.url} alt="Trabajo de portfolio ampliado" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;