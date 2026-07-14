import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '/assets/header/lucia-sanchez-logo.png';
import instagramIcon from '/assets/footer/instagram-logo.webp';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Sección Izquierda: Logo y Contacto */}
        <div className="footer-section footer-logo-contact">
          <img src={logo} alt="Logo" className="footer-logo" />
          <a href="mailto:lusanchezmua@gmail.com" className="footer-email">lusanchezmua@gmail.com</a>
        </div>

        {/* Sección Central: Columnas de enlaces */}
        <div className="footer-section footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">ARFW</h4>
            <Link to="/">-</Link>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Portfolio</h4>
            <Link to="/portfolio">-</Link>
          </div>
        </div>

        {/* Sección Derecha: Redes Sociales */}
        <div className="footer-section footer-social">
          <a href="https://www.instagram.com/lusanchez.makeup?igsh=MTkzMG13aWhqOWZzYg==" target="_blank" rel="noopener noreferrer" className="social-link">
            {/* Aquí podrías usar un componente de icono SVG si lo tienes */}
            <img src={instagramIcon} alt="Instagram" className="footer-icon" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
