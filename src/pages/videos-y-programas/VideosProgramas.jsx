import React from 'react';
import './VideosProgramas.css'; 

const videoItems = [
  {
    id: 'filosofia-y-mas',
    description: 'Maquillaje preparado para la alta intensidad del set de grabación.',
    youtubeId: '6V3Yl64ZqQk'
  },
  {
    id: 'mirta-te-acompaña',
    description: 'Descripcion Mirta',
    youtubeId: 'DEEQ9tbhKdg'
  },
  {
    id: 'perfumo',
    description: 'Descripción del tercer video que completará la primera fila perfectamente.',
    youtubeId: 'n4cVdh3cHDo'
  },
  {
    id: 'miranda',
    description: 'Descripcion Miranda.',
    youtubeId: 'ENxec6SOAyQ'
  },
  {
    id: 'norberto-rodriguez-arian ',
    description: 'Descripcion videoclip.',
    youtubeId: '3S1tqZ0VT-o'
  },
  {
    id: 'dandara',
    description: 'Maquillaje para video clip de Dandara. Enfocandome en destacar su belleza.',
    youtubeId: 'eLjRKb61g6U'
  }
];

const VideosProgramas = () => {
  return (
    <div className="portfolio-subpage-container">
      
      {/* GRILLA PRINCIPAL DE VIDEOS */}
      <div className="videos-grid">
        {videoItems.map((item) => (
          <div className='video-card' key={item.id}>
            
            <div className='video-responsive-frame'>
              <iframe 
                src={`https://www.youtube.com/embed/${item.youtubeId}`} 
                title="Portfolio Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="video-description">{item.description}</p>

          </div>
        ))}
      </div>

    </div>
  );
};

export default VideosProgramas;