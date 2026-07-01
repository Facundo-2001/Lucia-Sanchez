import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolio-main-wrapper'> 
      <h1 className='portfolio-page-title'>Portfolio</h1>   
      
      <div className='portfolio-grid-covers'>
        
        {/* PORTADA 1: VIDEOS Y PROGRAMAS */}
        <Link to="/videos-y-programas" className='portfolio-cover-card video-cover'>
          <div className="cover-overlay">
            <h2>Video Clips & Programas</h2>
          </div>
        </Link>

        {/* PORTADA 2: EVENTOS */}
        <Link to="/eventos" className='portfolio-cover-card eventos-cover'>
          <div className="cover-overlay">
            <h2>Eventos</h2>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Portfolio;