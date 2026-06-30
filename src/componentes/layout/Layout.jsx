import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      
      <main className="layout-content">
        {/* Aquí es donde se renderizarán las páginas (Home, SobreMi, etc.) */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;