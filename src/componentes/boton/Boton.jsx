import React from 'react';
import './Boton.css';
import { Link } from 'react-router-dom';

const Boton = ({ texto, to, alHacerClic, tipo = "primario" }) => {
  // Si tiene la prop 'to', es un link de navegación
  if (to) {
    return (
      <Link to={to} className={`btn-generico ${tipo}`}>
        {texto}
      </Link>
    );
  }

  // Si no, es un botón normal con una función
  return (
    <button className={`btn-generico ${tipo}`} onClick={alHacerClic}>
      {texto}
    </button>
  );
};

export default Boton;