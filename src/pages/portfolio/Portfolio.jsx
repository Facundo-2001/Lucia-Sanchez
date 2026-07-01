import React from 'react';
import './Portfolio.css';

// 1. LISTA DE VIDEOS: Para agregar más, solo copias un bloque { ... } y lo pegas abajo
const videoItems = [
  {
    id: 'dandara',
    title: 'DANDARA',
    description: 'Maquillaje para video clip.',
    youtubeId: 'eLjRKb61g6U' // El código del final de tu link de YouTube
  },
  {
    id: 'miranda',
    title: 'MIRANDA',
    description: 'Aquí va la descripción detallada del trabajo realizado para Miranda.',
    youtubeId: 'AQUÍ_ID_VIDEO_2'
  }
];

// 2. LISTA DE FOTOS: Para agregar más fotos, haces lo mismo aquí
const pictureItems = [
  {
    id: 'foto1',
    title: 'TUTANKAMON',
    description: 'Descripción de la sesión de fotos.',
    imageUrl: '/imagenes/portfolio/foto1.jpg' // Tu ruta de imagen
  },
  {
    id: 'foto2',
    title: 'Pictures 2',
    description: 'Descripción de otra sesión de fotos.',
    imageUrl: '/imagenes/portfolio/foto2.jpg'
  }
];

const Portfolio = () => {
  return (
    <div className='portfolio-main-wrapper'>
      <h1 className='portfolio-page-title'>MI PORTFOLIO</h1>
      
      <div className='portfolio-columns-container'>
        
        <section className='portfolio-column video-column'>
          <h2>Video Clips</h2>
          <div className='column-content'>
            
            {videoItems.map((item) => (
              <div className='video-item' key={item.id}>
                <h3>{item.title}</h3>
                <div className='video-responsive'>
                  <iframe 
                    src={`https://www.youtube.com/embed/${item.youtubeId}`} 
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}

          </div>
        </section>

        <section className='portfolio-column picture-column'>
          <h2>EVENTOS</h2>
          <div className='column-content'>
            
            {pictureItems.map((item) => (
              <article className='picture-item' key={item.id}>
                <div className='picture-text'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className='portfolio-image'>
                  <img src={item.imageUrl} alt={`Imagen de ${item.title}`} />
                </div>
              </article>
            ))}

          </div>
        </section>

      </div>
    </div>
  );
};

export default Portfolio;