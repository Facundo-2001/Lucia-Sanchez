import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">ARFW</Link>
        </li>
        <li className="dropdown-item">
            {/* El link principal que los lleva a la portada del portfolio */}
            <Link to="/portfolio" className="dropdown-trigger">
              PORTFOLIO <span className="arrow"></span>
            </Link>
            
            {/* La lista desplegable con tus subítems */}
            <ul className="dropdown-menu">
              <li>
                <Link to="/videos-y-programas">Video Clips & Programas</Link>
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