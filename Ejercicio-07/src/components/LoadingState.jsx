// ============================================
// src/components/LoadingState.jsx
// ============================================
// Este componente se encarga de mostrar el estado
// de carga o error mientras se obtienen datos (por ejemplo, productos).
//
// ✅ Si está cargando → muestra mensaje o animación
// ✅ Si hay error → muestra mensaje de error
// ✅ Si todo está bien → muestra el contenido "children"
// ============================================

import "./LoadingState.css"; // Importamos su hoja de estilo
import { useState, useEffect } from "react";

export default function LoadingState({ cargando, error, children }) {
  const [showLoading, setShowLoading] = useState(cargando);
  

  useEffect(() => {
    if (cargando) {
      // Mostramos al menos 0ms (inmediato)
      setShowLoading(true);
    } else {
      // Si ya terminó de cargar, esperamos un poquito antes de ocultar
      const timer = setTimeout(() => setShowLoading(false), 2000); // 0.8s
      return () => clearTimeout(timer);
    }
  }, [cargando]);

  if (showLoading) {
    return (
      <div className="estado-container flex-wrap">
        <div className="spinner-circle"></div>
        <div className="texto-estado">Cargando productos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="estado-container">
        <p className="texto-estado error">Error: {error}</p>
      </div>
    );
  }

  return <>{children}</>;
}

