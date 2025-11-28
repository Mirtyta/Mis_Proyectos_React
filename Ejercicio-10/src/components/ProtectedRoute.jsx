// ============================================
// src/components/RutaProtegida.jsx
// Componente envoltorio para proteger rutas.
// - Si no está autenticado: redirige a /login y pasa la ruta original en state
// - Si requiere role (requiredRole) y role no coincide: redirige a /
// ============================================

import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole }) {
  // auth: true/false almacenado en sessionStorage (simulación simple), sessionStorage borra los datos al cerrar la app
  const auth = sessionStorage.getItem("auth") === "true";
  // role: 'admin' o 'user'
  const role = sessionStorage.getItem("role");
  // ubicacion actual (para devolver al usuario luego del login)
  const location = useLocation();

  // Si no está autenticado: ir a /login y pasar la ruta de origen en "state"
  if (!auth) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Si la ruta requiere un role específico y no coincide: redirigir al inicio
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // Si todo ok: renderizar los children (la página protegida)
  return children;
}
