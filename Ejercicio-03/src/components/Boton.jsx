import React from "react";        // Importa React, necesario para JSX
import "./Boton.css";              // Importa los estilos generales del botón

// Componente Boton
// Recibe 3 props:
// - texto: lo que se muestra en el botón
// - tipo: para definir el color según el tipo de tarjeta
// - onClick: función que se ejecuta al hacer clic
const Boton = ({ texto, tipo, onClick }) => {

  // Definimos los colores posibles según el tipo de tarjeta
  const coloresPorTipo = {
    Naranja: "#ff7f50",  // Naranja 
    Verde: "#28a745",   // Verde
    Azul: "#3476b8ff",    // Azul
    Gris: "#6c757d"     // Gris
  };

  // Escogemos el color de fondo según la prop tipo
  // Si no se pasa tipo, usamos 'gris'
  const colorFondo = coloresPorTipo[tipo] || coloresPorTipo.Gris;

  // Retorna el botón en JSX
  return (
    <button
      className="boton"                     // Clase general para estilos en CSS
      style={{ backgroundColor: colorFondo, color: "#fff" }} // Color dinámico según tipo
      onClick={onClick}                     // Acción al hacer clic
    >
      {texto}                               {/* Texto visible en el botón */}
    </button>
  );
};

export default Boton;                       // Exporta el componente para usarlo en otras partes
