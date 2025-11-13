// ============================================
// src/pages/AdminPage.jsx
// Placeholder del panel de administración (ruta protegida con role=admin).
// Aquí luego vas a agregar CRUD para productos.
// ============================================
import Banner from "../components/Banner";

export default function AdminPage() {
  return (
    <div className="container py-5 text-center">
      <Banner
        title="Panel de Administración 🧰"
        description="CRUD de Productos"
      />
      <p>Aquí el admin podrá gestionar los productos (CRUD).</p>
      <p className="text-muted">Por ahora es un placeholder — En construccion el CRUD.</p>
    </div>
  );
}
