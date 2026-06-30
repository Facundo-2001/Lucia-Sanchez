import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from '../nav/Nav.jsx'; // Importamos el componente Nav
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Este efecto hace que el menú móvil se cierre automáticamente al cambiar de página
  useEffect(() => {
    setMenuAbierto(false);
    window.scrollTo(0, 0); // Asegura que la vista suba al cambiar de página
  }, [location]);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="main-header">
      <Link to="/" className="header-logo">
        <img src="/logos/LogoHeader.png" alt="Logo de Lucia Sanchez" className="header-logo-img" />
      </Link>

      {/* Botón Hamburguesa (solo visible en móviles por CSS) */}
      <div className={`hamburger-menu ${menuAbierto ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Contenedor del Nav que reacciona al estado menuAbierto */}
      <div className={`nav-container ${menuAbierto ? 'open' : ''}`}>
        <Nav />
      </div>

    </header>
  );
};

export default Header;