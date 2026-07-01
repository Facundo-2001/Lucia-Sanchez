import React, { useEffect, useRef, useState } from 'react';
import './SobreMi.css';

const trabajos = [
  {
    year: '2011',
    description: 'Filosofia...',
    imageUrl: '../src/assets/sobre-mi/timeline/filosofia-y-mas.jpg',
  },
  {
    year: '2011 - 2021',
    description: 'Mirta Te Acompaña',
    imageUrl: '../src/assets/sobre-mi/timeline/mirta-te-acompaña.jpg',
  },
  {
    year: '2011',
    description: 'Descripción del trabajo o proyecto realizado en 2021.',
    imageUrl: '/imagenes/trabajos/trabajo-3.jpg',
  },
  {
    year: '2012',
    description: 'Descripción del trabajo o proyecto realizado en 2021.',
    imageUrl: '/imagenes/trabajos/trabajo-3.jpg',
  },
  {
    year: '2013',
    description: 'Descripción del trabajo o proyecto realizado en 2021.',
    imageUrl: '/imagenes/trabajos/trabajo-3.jpg',
  },
  {
    year: '2021 - Actualidad',
    description: 'Descripción del trabajo o proyecto realizado en 2021.',
    imageUrl: '/imagenes/trabajos/trabajo-3.jpg',
  },
  {
    year: '2022',
    description: 'Dandara: Phone - Video Clip.',
    imageUrl: '../src/assets/sobre-mi/timeline/dandara-phone.jpeg',
  },
  {
    year: '2023',
    description: 'Huerta Organica con Paula Colombini',
    imageUrl: '../src/assets/sobre-mi/timeline/huerta-paula-colombini.jpeg',
  },
  {
    year: '2026',
    description: 'Tutankamon - Jefa de Maquillaje',
    imageUrl: '../src/assets/sobre-mi/timeline/tutankamon.jpg',
  },
];

const TimelineItem = ({ trabajo, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  /* DETECTAR SCROLL VERTICAL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 } // INCIA CUANDO DETECTA 25% DEL ELEMENTO
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // PAR == DERECHA, IMPAR == IZQUIERDA
  const side = index % 2 === 0 ? 'right' : 'left';

  return (
    <div
      ref={itemRef}
      className={`timeline-row ${side} ${isVisible ? 'revealed' : ''}`}
    >
      <div className="timeline-dot"></div>

      <article className="timeline-card">
        <div className="timeline-image-wrapper">
          <img src={trabajo.imageUrl} alt={`Trabajo del año ${trabajo.year}`} className="timeline-imagen" />
        </div>
        <div className="timeline-info">
          <span className="timeline-year">{trabajo.year}</span>
          <p>{trabajo.description}</p>
        </div>
      </article>
    </div>
  );
};

const SobreMi = () => {
  return (
    <div className="sobre-mi-container">
      <h1 className="main-title">UN POCO DE MI HISTORIA</h1>
      
      <section className="sobre-mi-intro">
        <div className="intro-texto">
          <p>
            Inicié mi camino en la estética en el año 2008, formándome en cosmetología y como maquilladora social. La búsqueda de mi 
            perfeccionamiento técnico me llevó al Instituto Superior de Arte del Teatro Colón, donde cursé Caracterización Teatral 
            y sumé conocimientos de FX. Cuentó con una trayectoria en productoras de televisión por cable. Mantengo una actualización 
            constanate en nuevas tecnologías de maquillaje, lo que me llevó en 2020 a graduarme como Maquilladora Profesional con 
            Mabby Autino, expandiendo mi perfil hacia el maquillaje editorial y de pasarela. Desde entonces, acompaño a los mejores 
            diseñadores argentinos en propuestas que van desde desfiles y eventos hasta alfombras rojas.
          </p>
        </div>
        <div className="intro-imagen">
          <img src="../src/assets/sobre-mi/lucia-sanchez-pfp-1.jpeg" alt="Foto de perfil de Lucia Sanchez" />
        </div>
      </section>

      <hr className="sobre-mi-separator" />

      <section className="timeline-section">
        <h2>Experiencia</h2>
        
        <div className="timeline-vertical-container">
          <div className="timeline-center-line"></div>

          {trabajos.map((trabajo, index) => (
            <TimelineItem key={index} trabajo={trabajo} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SobreMi;