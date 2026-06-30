import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Arfw</Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre-mi">Sobre Mí</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;