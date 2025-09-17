import React, { useState } from "react";
import Boton from "./Boton";          // Importamos tu botón reutilizable
import "./Boton.css";         // Importamos los estilos del botón

// Componente que recibe un array de temas
const Intereses = ({ temas }) => {
  // Estado para controlar qué botones están seleccionados
  const [activo, setActivo] = useState(Array(temas.length).fill(false));

  // Función que se ejecuta al hacer clic en un botón
  const handleClick = (index) => {
    const nuevoActivo = [...activo];  // Copiamos el array de estado
    nuevoActivo[index] = !nuevoActivo[index]; // Cambiamos el estado del botón clickeado
    setActivo(nuevoActivo);           // Actualizamos el estado
  };

  return (
      <div className='d-flex align-items-center flex-direction-row justify-content-center flex-wrap gap-5'>
      {temas.map((tema, index) => (
        // Usamos React.Fragment con key porque key no se pasa como prop
        <React.Fragment key={index}> 
          <Boton
            className="boton-peque"               // Clase para estilos específicos
            texto={tema}  
            tipo={activo[index] ? "Naranja" : "Gris"} // Color según si está activo
            onClick={() => handleClick(index)}         // Función al hacer clic
          />
        </React.Fragment>
      ))}
      </div>
  );
};

export default Intereses;
