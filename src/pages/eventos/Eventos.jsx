import React from 'react';
import './Eventos.css'; 

const pictureItems = [
  {
    id: 'foto1',
    title: 'TUTANKAMON',
    description: 'Descripción de la sesión de fotos.',
    imageUrl: '/imagenes/portfolio/foto1.jpg'
  }
  // ... puedes agregar más aquí
];

const Eventos = () => {
  return (
    /* Mismo contenedor para mantener la simetría y los márgenes en toda la web */
    <div className="portfolio-subpage-container">
      <h1 className="subpage-title">Eventos</h1>
      
      <div className="eventos-grid">
        {pictureItems.map((item) => (
          <article className='eventos-card' key={item.id}>
            <div className='eventos-image-wrapper'>
              <img src={item.imageUrl} alt={`Imagen de ${item.title}`} />
            </div>
            <div className='eventos-card-text'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Eventos;