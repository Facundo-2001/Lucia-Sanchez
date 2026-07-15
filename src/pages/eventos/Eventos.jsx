import React, { useState } from 'react';
import './Eventos.css';

// Array de fotos: Solo cargas las direcciones de tus imágenes de Git
const fotosGaleria = [
  { id: 1, url: 'assets/portfolio/eventos/tutankamos-01.webp' },
  { id: 2, url: 'assets/portfolio/eventos/tutankamos-03.webp' },
  { id: 3, url: 'assets/portfolio/eventos/tutankamos-04.webp' },
  { id: 4, url: 'assets/portfolio/eventos/tutankamos-05.webp' },
  { id: 5, url: 'assets/portfolio/eventos/tutankamos-06.webp' },
  { id: 6, url: 'assets/portfolio/eventos/tutankamos-07.webp' },
  { id: 7, url: 'assets/portfolio/eventos/tutankamos-08.webp' },
  { id: 8, url: 'assets/portfolio/eventos/tutankamos-09.webp' },
  { id: 9, url: 'assets/portfolio/eventos/tutankamos-10.webp' },
  { id: 10, url: 'assets/portfolio/eventos/tutankamos-11.webp' },
  { id: 11, url: 'assets/portfolio/eventos/tutankamos-12.webp' },
  { id: 12, url: 'assets/portfolio/eventos/arfw-01.webp' },
  { id: 13, url: 'assets/portfolio/eventos/arfw-02.webp' },
  { id: 14, url: 'assets/portfolio/eventos/arfw-03.webp' },
  { id: 15, url: 'assets/portfolio/eventos/arfw-04.webp' }
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