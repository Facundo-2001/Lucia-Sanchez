import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// 🌟 CORRECCIÓN: Eliminamos los imports de las imágenes que apuntaban a la carpeta public.

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Sección Izquierda: Logo y Contacto */}
        <div className="footer-section footer-logo-contact">
          {/* 🌟 Ruta de texto directa en el src */}
          <img src="/assets/haeder/lucia-sanchez-logo.webp" alt="Logo" className="footer-logo" />
          <a href="mailto:lusanchezmua@gmail.com" className="footer-email">lusanchezmua@gmail.com</a>
        </div>

        {/* Sección Central: Columnas de enlaces */}
        <div className="footer-section footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">HOME</h4>
            <Link to="/">MAIN PAGE</Link>
            <Link to="/">-</Link>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">PORTFOLIO</h4>
            <Link to="/videos-y-programas">VIDEOCLIPS & PROGRAMAS</Link>
            <Link to="/eventos">EVENTOS</Link>
          </div>
        </div>

        {/* Sección Derecha: Redes Sociales */}
        <div className="footer-section footer-social">
          <a href="https://www.instagram.com/lusanchez.makeup?igsh=MTkzMG13aWhqOWZzYg==" target="_blank" rel="noopener noreferrer" className="social-link">
            {/* 🌟 Ruta de texto directa en el src */}
            <img src="/assets/footer/instagram-logo.webp" alt="Instagram" className="footer-icon" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;