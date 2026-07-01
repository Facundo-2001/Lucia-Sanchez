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
        <li className="nav-item">
          <Link to="/portfolio">PORTFOLIO</Link>
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