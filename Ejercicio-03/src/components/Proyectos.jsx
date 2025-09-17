import React from "react";       // Importa React para poder usar JSX
import Boton from "./Boton";     // Importa el componente Boton que creamos
import "./Proyectos.css"         // Importa los estilos específicos de la tarjeta

// Componente Tarjeta
// Props que recibe:
// - titulo: el título de la tarjeta
// - descripcion: texto descriptivo dentro de la tarjeta
// - botonTexto: texto que se mostrará en el botón
// - tipo: define el color del botón según el tipo de tarjeta
const Proyectos = ({ titulo, descripcion, botonTexto, tipo }) => {
  const handleClick = () => {
    console.log(`Explorando proyecto: ${titulo}`); // ✅ mensaje en consola
  };

  return (
        <div className="proyecto">
        {/* Título de la tarjeta */}
        <h2 className="text-white">{titulo}</h2>
        
        {/* Descripción o contenido de la tarjeta */}
        <p>{descripcion}</p>
        
        {/* Botón reutilizable */}
        {/* 
            Pasamos:
            - texto: lo que se mostrará en el botón
            - tipo: para que Boton pueda elegir el color
            - onClick: función que ejecutará al hacer clic
        */}
        <Boton texto={botonTexto} tipo={tipo} onClick={handleClick} />
        </div>
  );
};

export default Proyectos;          // Exporta el componente para usarlo en App.jsx u otros archivos
