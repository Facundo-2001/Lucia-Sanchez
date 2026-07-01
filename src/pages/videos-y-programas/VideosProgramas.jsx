import React from 'react';
import './VideosProgramas.css'; 

const videoItems = [
  {
    id: 'dandara',
    title: 'DANDARA',
    description: 'Maquillaje para video clip.',
    youtubeId: 'eLjRKb61g6U'
  }
];

const VideosProgramas = () => {
  return (
    <div className="portfolio-subpage-container">
      <h1 className="subpage-title">Video Clips & Programas</h1>

      <div>
        <img className="images-container"  src="../src/assets/portfolio/dandara/dandara-1.jpeg" alt="" />
      </div>
      
      <div className="videos-grid">
        {videoItems.map((item) => (
          <div className='video-card' key={item.id}>
            <h3>{item.title}</h3>
            <div className='video-responsive-frame'>
              <iframe 
                src={`https://www.youtube.com/embed/${item.youtubeId}`} 
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosProgramas;