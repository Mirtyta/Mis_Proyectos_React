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

export default function ManejoDeCarga({ cargando, error, children }) {
  // Si está cargando, mostramos pantalla de carga
  if (cargando) {
    return (
      <div className="estado-container">
        <p className="texto-estado">Cargando productos...</p>
      </div>
    );
  }

  // Si hay error, mostramos mensaje
  if (error) {
    return (
      <div className="estado-container">
        <p className="texto-estado error">Error: {error}</p>
      </div>
    );
  }

  // Si todo está bien, renderizamos el contenido normal
  return <>{children}</>;
}
