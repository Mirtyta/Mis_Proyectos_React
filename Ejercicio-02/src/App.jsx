import React from "react"; // Importa React, necesario para JSX
import ListaProductos from "./components/ListaProductos"; // Importa el componente ListaProductos
import Tarjeta from "./components/Tarjeta";             // Importa el componente Tarjeta
import "./App.css";
import miLogo from "./assets/logo.png"; // Importá tu logo (puede ser .png o .svg)

function App() {
  // Array de productos definido en App.jsx
  // RAZÓN: Definido aquí para mantener ListaProductos reutilizable con cualquier array.
  const productos = ['Manzanas', 'Peras', 'Naranjas'];

  return (
    <div>
      {/* Título de bienvenida */}
      <h1 className="titulo-principal">Ejercicio-02 🚀</h1>

      {/* Texto o descripción */}
      <p className="read-the-docs">
        Este es mi proyecto con React + Vite.  
        Podés ver más en mi perfil de GitHub<a href="https://github.com/Mirtyta/Mis_Proyectos_React" target="_blank" rel="noopener noreferrer"><img src={miLogo} className="logo-pequeno" alt="Mi logo" />
        </a>
      </p>


      {/* Renderiza la lista de productos */}
      {/* Pasamos el array de productos como prop al componente ListaProductos */}
      <ListaProductos productos={productos} />

      {/* Renderiza una tarjeta de promoción */}
      {/* Pasamos props para título, descripción y texto del botón */}
     <Tarjeta 
        titulo="Oferta Especial"
        descripcion="20% de descuento en todos los productos"
        botonTexto="Ver más"
        tipo="superoferta"
        onClick={() => alert("Aplicamos la super oferta a tu producto! ✅")}
    />
    </div>
  );
}

// Exporta App como componente principal de la aplicación
export default App;
