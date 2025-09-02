// Importa la librería de React, necesaria para la creación de componentes.
import React from 'react';

// Define un componente funcional llamado "Titulo".
// Este componente se encargará de mostrar el encabezado de la página.
const Titulo = () => {
  // Define un objeto de JavaScript con estilos CSS.
  // Es una forma de aplicar estilos directamente en los elementos JSX.
  const estiloTitulo = {
    // Define el tamaño de la fuente.
    fontSize: '2.5rem',
    // Define el color del texto.
    color: '#a81c1cff',
    // Centra el texto horizontalmente.
    textAlign: 'center',
    // Agrega un espacio en la parte inferior del título.
    marginBottom: '20px'
  };

  // El componente retorna un elemento de encabezado (<h1>).
  return (
    // Le aplica los estilos definidos en 'estiloTitulo'.
    <h1 style={estiloTitulo}>
      Mi Primer Proyecto React
    </h1>
  );
};

// Exporta el componente para que pueda ser importado y usado en otros archivos, como App.jsx.
export default Titulo;