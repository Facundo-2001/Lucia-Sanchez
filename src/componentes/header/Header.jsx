import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../nav/Nav.jsx'; // Importamos el componente Nav
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Este efecto hace que el menú móvil se cierre automáticamente al cambiar de página
  useEffect(() => {
    setMenuAbierto(false);
  }, [location]);

  const irAlInicio = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Además fuerza a la pantalla a ir arriba
    setMenuAbierto(false); // Cierra el menú por precaución
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="main-header">
      <div className="header-logo" onClick={irAlInicio} style={{ cursor: 'pointer' }}>
        <img src="/logos/LogoHeader.png" alt="Kontra Korriente Logo" className="header-logo-img" />
      </div>

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