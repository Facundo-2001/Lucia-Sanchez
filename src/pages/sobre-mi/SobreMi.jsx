import React, { useEffect, useRef, useState } from 'react';
import './SobreMi.css';
import imgFilosofia from '/assets/sobre-mi/timeline/filosofia-y-mas.jpg';
import imgMirta from '/assets/sobre-mi/timeline/mirta-te-acompaña.jpg';
import imgPerfumo from '/assets/sobre-mi/timeline/roberto-perfumo.jpg';
import imgNorberto from '/assets/sobre-mi/timeline/norberto-rodriguez-arian-ultimo-round.JPG';
import imgArfw from '/assets/sobre-mi/timeline/arfw.jpg';
import imgDandara from '/assets/sobre-mi/timeline/dandara-phone.jpeg';
import imgHuerta from '/assets/sobre-mi/timeline/huerta-paula-colombini.jpeg';
import imgTutankamon from '/assets/sobre-mi/timeline/tutankamon.jpg';
import imgPerfil from '/assets/sobre-mi/lucia-sanchez-pfp-1.jpeg';

const trabajos = [
  {
    year: '2011',
    description: 'Filosofia Aquí y Ahora',
    imageUrl: imgFilosofia,
  },
  {
    year: '2011 - 2023',
    description: 'Mirta Te Acompaña',
    imageUrl: imgMirta,
  },
  {
    year: '2011',
    description: 'Perfumo y El Mejor Ejemplar',
    imageUrl: imgPerfumo,
  },
  {
    year: '2012',
    description: 'Perfecta - Agapornis ft.Miranda',
    imageUrl: null,
  },
  {
    year: '2013',
    description: 'El Ultimo Round - Norberto Rodriguez Arian',
    imageUrl: imgNorberto,
  },
  {
    year: '2021 - Actualidad',
    description: 'Argentina Fashion Week',
    imageUrl: imgArfw,
  },
  {
    year: '2022',
    description: 'Phone - Dandara',
    imageUrl: imgDandara,
  },
  {
    year: '2023',
    description: 'Huerta Organica con Paula Colombini',
    imageUrl: imgHuerta,
  },
  {
    year: '2026',
    description: 'Tutankamon - Jefa de Maquillaje',
    imageUrl: imgTutankamon,
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
          {trabajo.imageUrl ? (
            <img src={trabajo.imageUrl} alt={`Trabajo del año ${trabajo.year}`} className="timeline-imagen" />
          ) : (
            <div className="timeline-imagen-placeholder"></div>
          )}
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
          <img src={imgPerfil} alt="Foto de perfil de Lucia Sanchez" />
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