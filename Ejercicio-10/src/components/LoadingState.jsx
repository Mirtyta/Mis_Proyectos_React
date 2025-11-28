// ============================================
// src/components/LoadingState.jsx
// --------------------------------------------
// Componente que muestra:
//
// 🔹 Un estado de carga (spinner)
// 🔹 Un mensaje de error
// 🔹 O el contenido real (children)
//
// Maneja un pequeño delay al terminar la carga
// para evitar flashes feos cuando los datos cargan
// demasiado rápido.
//
// Está optimizado para que NO tire warnings de React
// sobre "cascading renders".
// ============================================

import "./LoadingState.css";
import { useState, useEffect } from "react";

export default function LoadingState({ cargando, error, children }) {
  // Estado interno que controla si mostrar o no el loading.
  // Comienza con el mismo valor que "cargando".
  const [showLoading, setShowLoading] = useState(cargando);

  // --------------------------------------------
  // EFECTO:
  // Solo se ejecuta cuando "cargando" pasa de true → false.
  //
  // Agrega un pequeño delay antes de ocultar el loading.
  // Esto es útil cuando los datos cargan tan rápido
  // que el spinner aparece y desaparece en menos de 1 segundo.
  // --------------------------------------------
  useEffect(() => {
    // si ya no está cargando → programamos el fade-out
    if (!cargando) {
      const timer = setTimeout(() => {
        setShowLoading(false); // ocultamos el loading después de 800ms
      }, 1000);

      // limpiamos el timer si el componente desmonta
      return () => clearTimeout(timer);
    }
  }, [cargando]);

  // --------------------------------------------
  // SI ESTÁ CARGANDO:
  // Activamos el loading inmediatamente.
  //
  // Esto se hace **fuera** del effect para evitar
  // warnings de React por setState dentro del useEffect.
  // --------------------------------------------
  if (cargando && !showLoading) {
    setShowLoading(true);
  }

  // --------------------------------------------
  // MOSTRAR: Loading
  // --------------------------------------------
  if (showLoading) {
    return (
      <div className="estado-container flex-wrap">
        <div className="spinner-circle"></div>
        <div className="texto-estado">Cargando productos...</div>
      </div>
    );
  }

  // --------------------------------------------
  // MOSTRAR: Error
  // --------------------------------------------
  if (error) {
    return (
      <div className="estado-container">
        <p className="texto-estado error">Error: {error}</p>
      </div>
    );
  }

  // --------------------------------------------
  // MOSTRAR: contenido real
  // --------------------------------------------
  return <>{children}</>;
}
