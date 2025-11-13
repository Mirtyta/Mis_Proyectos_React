// ============================================
// src/components/ProductList.jsx
// ============================================

import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import ProductCardFeatured from "./ProductCardFeatured";
import Banner from "./Banner";
import "./ProductCard.css";

export default function ProductList({ productos }) {
  return (
    <div>
      
      <Container className="fondo-page">
        <Banner title="Tienda" description="Elegí tu producto" />
        <div className="product-grid py-5">
          {productos.map((producto, index) =>
            index === 0 ? (
              <ProductCardFeatured key={producto.id} producto={producto} />
            ) : (
              <ProductCard key={producto.id} producto={producto} />
            )
          )}
        </div>
      </Container>
    </div>
  );
}
