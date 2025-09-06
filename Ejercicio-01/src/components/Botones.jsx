// Importa la librería de React. Aunque no se usa directamente en este código,
// es una buena práctica y, en versiones anteriores de React, era obligatorio
// para que el JSX funcionara correctamente.
import React from 'react';

// Define un componente funcional llamado "Botones". En React,
// los componentes son funciones que devuelven elementos de la interfaz de usuario.
const Botones = () => {

  // Define un array (una lista) con los nombres de los botones que se van a crear.
  const botones = ['Aceptar', 'Cancelar', 'Eliminar'];

  // Define un objeto JavaScript para los estilos CSS. Esta es una forma de
  // aplicar estilos en línea (inline) en React.
  const estilosBoton = {
    // Espacio interno del botón.
    padding: '10px 20px',
    // Espacio externo alrededor del botón.
    margin: '5px',
    // Quita el borde predeterminado.
    border: 'none',
    // Redondea las esquinas.
    borderRadius: '5px',
    // Cambia el cursor al pasar el mouse.
    cursor: 'pointer',
    // Pone el texto en negrita.
    fontWeight: 'bold',
  };

  // Define un objeto que asigna un color hexadecimal a cada nombre de botón.
  // Esto permite cambiar el color de fondo de cada botón de forma dinámica.
  const coloresBoton = {
    Aceptar: '#00ff00',
    Cancelar: '#f0ad4e',
    Eliminar: '#d9534f',
  };

  // El componente retorna (devuelve) una estructura de elementos JSX.
  return (
    // 'div' es un contenedor que agrupa a los botones.
    <div>
      {/*
        El método 'map()' itera (recorre) el array 'botones'.
        Por cada elemento ('btn'), crea un nuevo elemento <button>.
      */}
      {botones.map((btn) => (

        // Se crea un elemento HTML <button>.
        <button
          // La 'key' es una propiedad especial en React que ayuda a identificar
          // de forma única cada elemento de una lista, mejorando el rendimiento.
          key={btn}
          // La propiedad 'style' aplica los estilos en línea.
          // Se usa el 'spread operator' (...) para copiar todos los estilos de 'estilosBoton'.
          // Luego, se añade o sobrescribe el color de fondo usando el objeto 'coloresBoton'
          // y el color del texto a blanco.
          style={{ ...estilosBoton, backgroundColor: coloresBoton[btn], color: '#fff' }}
          // El 'onClick' es un 'event handler' (manejador de eventos).
          // Ejecuta una función 'alert' cuando se hace clic en el botón.
          onClick={() => alert('Presionaste un boton')}
        >
          {/* El texto del botón se toma de cada elemento del array. */}
          {btn}
        </button>
      ))}
    </div>
  );
};

// Exporta el componente 'Botones' como la exportación por defecto de este archivo.
// Esto permite que otros archivos lo puedan importar y usar.
export default Botones;