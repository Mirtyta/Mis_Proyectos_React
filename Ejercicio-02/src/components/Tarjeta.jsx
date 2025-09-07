import React from "react";       // Importa React para poder usar JSX
import Boton from "./Boton";     // Importa el componente Boton que creamos
import "./Tarjeta.css";          // Importa los estilos específicos de la tarjeta

// Componente Tarjeta
// Props que recibe:
// - titulo: el título de la tarjeta
// - descripcion: texto descriptivo dentro de la tarjeta
// - botonTexto: texto que se mostrará en el botón
// - tipo: define el color del botón según el tipo de tarjeta
// - onClick: función que se ejecuta al presionar el botón
const Tarjeta = ({ titulo, descripcion, botonTexto, tipo, onClick }) => {
  return (
    // Contenedor principal de la tarjeta
    <div className="tarjeta">
      
      {/* Título de la tarjeta */}
      <h2>{titulo}</h2>
      
      {/* Descripción o contenido de la tarjeta */}
      <p>{descripcion}</p>
      
      {/* Botón reutilizable */}
      {/* 
          Pasamos:
          - texto: lo que se mostrará en el botón
          - tipo: para que Boton pueda elegir el color
          - onClick: función que ejecutará al hacer clic
      */}
      <Boton texto={botonTexto} tipo={tipo} onClick={onClick} />
    </div>
  );
};

export default Tarjeta;          // Exporta el componente para usarlo en App.jsx u otros archivos
