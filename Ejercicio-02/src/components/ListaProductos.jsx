import React from "react"; // Importa React, necesario para usar JSX
import "./ListaProductos.css";

// Componente ListaProductos
// Este componente recibe un prop llamado 'productos'.
// En React, un prop (abreviatura de property, propiedad en inglés) 
// es básicamente un dato que le pasás a un componente desde afuera 
// para que ese componente lo use.
// NOTA: El array no se define dentro del componente para mantenerlo reutilizable.
// De esta forma, podemos usar el mismo componente con cualquier lista de productos.// Array de productos definido en App.jsx en lugar de dentro del componente

const ListaProductos = ({ productos }) => {
  return (
    <ol className="lista-productos"> {/* Lista ordenada */}
      {productos.map((producto, index) => ( // Recorre el array de productos
        <li key={index}>{producto}</li> // Cada producto se muestra en un <li> con key única
      ))}
    </ol>
  );
};

export default ListaProductos; // Exporta el componente para usarlo en otros archivos
