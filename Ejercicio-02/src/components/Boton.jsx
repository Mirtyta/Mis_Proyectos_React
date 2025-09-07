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
    superoferta: "#ff7f50",      // Naranja para super ofertas
    ofertaEstacion: "#28a745",   // Verde para ofertas de temporada
    recomendacion: "#1e90ff",    // Azul para recomendaciones
    defecto: "#6c757d"           // Gris si no se define tipo
  };

  // Escogemos el color de fondo según la prop tipo
  // Si no se pasa tipo, usamos 'defecto'
  const colorFondo = coloresPorTipo[tipo] || coloresPorTipo.defecto;

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
