import React from 'react';
import './SobreMi.css';

// Array con los datos de tu experiencia.
// Añade o modifica tus trabajos aquí.
const trabajos = [
  {
    year: '2023',
    description: 'Descripción del trabajo o proyecto realizado en 2023.',
    imageUrl: '/imagenes/trabajos/trabajo-1.jpg', // Reemplaza con la ruta a tu imagen
  },
  {
    year: '2022',
    description: 'Descripción del trabajo o proyecto realizado en 2022.',
    imageUrl: '/imagenes/trabajos/trabajo-2.jpg', // Reemplaza con la ruta a tu imagen
  },
  {
    year: '2021',
    description: 'Descripción del trabajo o proyecto realizado en 2021.',
    imageUrl: '/imagenes/trabajos/trabajo-3.jpg', // Reemplaza con la ruta a tu imagen
  },
  // Puedes añadir más trabajos aquí...
];

const SobreMi = () => {
  return (
    <div className="sobre-mi-container">
      {/* Sección de Introducción */}
      <section className="sobre-mi-intro">
        <div className="intro-texto">
          <h1>Sobre Mí</h1>
          <p>
            Inicié mi camino en la estética en el año 2008, formándome en cosmetología y como maquilladora social. La búsqueda de mi 
            perfeccionamiento técnico me llevó al Instituto Superior de Arte del Teatro Colón, donde cursé Caracterización Teatral 
            y sumé conocimientos de FX. Cuento con una trayectoria en productoras de televisión por cable. Mantengo una actualización 
            constante en nuevas tecnologías de maquillaje, lo que me llevó en 2020 a graduarme como Maquilladora Profesional con 
            Mabby Autino, expandiendo mi perfil hacia el maquillaje editorial y de pasarela. Desde entonces, acompaño a los mejores 
            diseñadores argentinos en propuestas que van desde desfiles y eventos hasta alfombras rojas.
          </p>
        </div>
        <div className="intro-imagen">
          <img src="../src/assets/sobre-mi/lucia-sanchez-pfp-1" alt="Foto de perfil de Lucia Sanchez" />
        </div>
      </section>

      <hr className="sobre-mi-separator" />

      {/* Sección de Línea de Tiempo */}
      <section className="timeline-section">
        <h2>Experiencia</h2>
        <div className="timeline">
          {trabajos.map((trabajo, index) => (
            <div key={index} className="timeline-item">
              <img src={trabajo.imageUrl} alt={`Trabajo del año ${trabajo.year}`} className="timeline-imagen" />
              <div className="timeline-info">
                <p>{trabajo.description}</p>
                <span className="timeline-year">{trabajo.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SobreMi;