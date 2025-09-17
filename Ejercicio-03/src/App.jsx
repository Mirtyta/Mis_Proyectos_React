// archivo App.jsx
// ✅ Importamos dependencias y componentes
import React from 'react';
// ❌ Esta línea es la que causa el problema. La eliminamos.
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ✅ Usamos HashRouter en su lugar para que las rutas funcionen en GitHub Pages.
import { HashRouter, Routes, Route } from 'react-router-dom'; 

import { useEffect } from "react";
import { useLocation } from 'react-router-dom'; // Agregamos este import, ya que usas 'useLocation'

import Menu from "./components/MenuBootstrap";
import Header from "./components/Header";
import Ejercicio from "./components/Ejercicio";
import Equipo from "./components/Equipo";
import Proyectos from "./components/Proyectos";
import Intereses from "./components/Intereses";
import Footer from "./components/Footer";

import Recursos from "./pages/Recursos";

import './App.css';

// -----------------------------------------------
// 🔹 1. Definimos arrays o datos que vamos a usar
// -----------------------------------------------
const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

// -----------------------------------------------
// 🔹 2. Creamos componentes internos (mini secciones)
// -----------------------------------------------

// 👉 Sección de Proyectos
const SeccionProyectos = () => (
  <section id="proyectos" className="py-5">
    <h1 className="text-center mb-4">Proyectos Destacados</h1>
    <div className="d-flex align-items-center justify-content-center flex-wrap gap-5">
      <Proyectos
        titulo="Plataforma de Gestión"
        descripcion="Una herramienta para optimizar la gestión de equipos."
        botonTexto="Explorar proyecto"
      />
      <Proyectos
        titulo="App de Recetas"
        descripcion="Encuentra y comparte tus recetas favoritas."
        botonTexto="Ver más"
      />
      <Proyectos
        titulo="E-commerce"
        descripcion="Un sitio moderno para compras online."
        botonTexto="Visitar tienda"
      />
    </div>
  </section>
);

// 👉 Sección de Intereses
const SeccionIntereses = () => (
  <section id="intereses" className="fondointereses py-5">
    <h1 className="text-center mb-4">Mis Intereses</h1>
    <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 seccion">
      <Intereses temas={intereses} />
    </div>
  </section>
);

// 👉 Página principal (home) que junta todo
const Home = () => {
  // 🔹 Hook useLocation para leer el "hash" de la URL
  const location = useLocation();

  // 🔹 useEffect para hacer scroll a la sección correcta
  useEffect(() => {
    // Si la URL contiene un hash (ej. '#equipo'), busca el elemento con ese ID
    // y hace un scroll suave hasta él.
    if (location.hash) {
      const id = location.hash.substring(1); // Quita el '#' del string
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Se ejecuta cada vez que la URL cambia

  return (
    <>
      <Header />
      <Ejercicio />
      <Equipo />
      <SeccionProyectos />
      <SeccionIntereses />
      <Footer />
    </>
  );
};

// -----------------------------------------------
// 🔹 3. Componente principal App()
// -----------------------------------------------
function App() {
  return (
    <HashRouter>
      {/* El menú se mantiene siempre visible fuera de las rutas */}
      <Menu />
      {/* Las rutas se gestionan con <Routes> y <Route> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
    </HashRouter>
  );
}

export default App;