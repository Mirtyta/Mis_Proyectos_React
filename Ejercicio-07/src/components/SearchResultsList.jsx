// ============================================
// src/components/SearchResultsList.jsx
// ============================================

import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Banner from "./Banner";

/**
 * 🎯 Componente para mostrar los resultados de búsqueda.
 * - Usa el mismo diseño que ProductList.
 * - Recibe los productos filtrados como prop.
 * - Si no hay resultados, muestra un mensaje.
 */
export default function SearchResultsList({ resultados, query }) {
  return (
    <div>   

      {/* Listado de productos */}
      <Container className="fondo-page">
        {/* Banner con título dinámico */}
      <Banner
        title={`Resultados de "${query}"`}
        description={
          resultados.length > 0
            ? "Estos productos coinciden con tu búsqueda:"
            : "No se encontraron productos."
        }
      />
        <div className="search-grid  py-5">
          {resultados.length > 0 ? (
            resultados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))
          ) : (
            <p className="text-center mt-4">😕 No se encontraron coincidencias.</p>
          )}
        </div>
      </Container>
    </div>
  );
}
