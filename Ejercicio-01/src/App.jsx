// App.jsx

// Importa los componentes que vas a utilizar
import React from 'react';
import Titulo from './components/Titulo';
import ListaUsuarios from './components/ListaUsuarios';
import './components/ListaUsuarios.css';
import Botones from './components/Botones';
import './App.css';

// Define el componente principal de la aplicación.
const App = () => {
  // El componente retorna el JSX de toda la página.
  return (
    // Usa 'ContenedorPrincipal' para envolver todo el contenido.
    // Esto asegura que todos los elementos dentro se centren en la pantalla.
    <div className="ContenedorPrincipal">
      {/* Los componentes que se van a centrar se colocan aquí dentro.
        El orden en que los pongas es el orden en que aparecerán.
      */}
      <Titulo />
      <ListaUsuarios />
      <Botones />
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado.
export default App;