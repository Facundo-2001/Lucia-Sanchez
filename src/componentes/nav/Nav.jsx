import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [dropdownAbierto, setDropdownAbierto] = useState(false);

  const handleDropdownClick = (e) => {
    // 🌟 CONTROL ESTRICTO: Solo interceptamos el click si la pantalla es móvil
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Evita que el Link navegue a /portfolio en celulares
      setDropdownAbierto(!dropdownAbierto); // Abre/cierra la solapa
    }
    // En PC (pantallas > 768px), no hace nada de esto, permitiendo que el <Link to="/portfolio"> funcione de forma nativa
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">INICIO</Link>
        </li>
        <li className={`dropdown-item ${dropdownAbierto ? 'active' : ''}`}>
          {/* El Link apunta a /portfolio de forma nativa */}
          <Link to="/portfolio" className="dropdown-trigger" onClick={handleDropdownClick}>
            PORTFOLIO <span className="arrow"></span>
          </Link>
          
          <ul className="dropdown-menu">
            <li>
              <Link to="/videos-y-programas">VideoClips & Programas</Link>
            </li>
            <li>
              <Link to="/eventos">Eventos</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/sobre-mi">SOBRE MI</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto">CONTACTO</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;