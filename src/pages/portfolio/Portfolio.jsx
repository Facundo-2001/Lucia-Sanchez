import React from 'react';
import './Portfolio.css';

// Array con los datos de los proyectos del portfolio.
// Puedes añadir o modificar proyectos fácilmente aquí.
const portfolioItems = [
  {
    title: 'Dandara',
    description: 'Aquí va la descripción detallada del trabajo realizado para el proyecto Dandara.',
    imageUrl: '/imagenes/portfolio/dandara.jpg', // Reemplaza con la ruta a tu imagen
  },
  {
    title: 'Miranda',
    description: 'Aquí va la descripción detallada del trabajo realizado para el proyecto Miranda.',
    imageUrl: '/imagenes/portfolio/miranda.jpg', // Reemplaza con la ruta a tu imagen
  },
  {
    title: 'Tutankamon',
    description: 'Aquí va la descripción detallada del trabajo realizado para el proyecto Tutankamon.',
    imageUrl: '/imagenes/portfolio/tutankamon.jpg', // Reemplaza con la ruta a tu imagen
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {portfolioItems.map((item, index) => (
        <React.Fragment key={item.title}>
          <article className="portfolio-item">
            <div className="portfolio-text">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="portfolio-image">
              <img src={item.imageUrl} alt={`Imagen del proyecto ${item.title}`} />
            </div>
          </article>
          {index < portfolioItems.length - 1 && <hr className="portfolio-separator" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Portfolio;