// ============================================
// src/components/ProductList.jsx
// ============================================
// --------------------------------------------
// Importaciones Bostrap y mis componentes
// --------------------------------------------
import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import Banner from './MiBanner'
// --------------------------------------------
// Importamos el contexto del carrito
// --------------------------------------------
// useCart: permite acceder a esos datos (si lo necesitáramos acá)
import { useCartContext } from "../hooks/useCartContext";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ProductList({ productos}) {
  const { addToCart } = useCartContext();
  const location = useLocation();
  const productoId = location.state?.productoId;

  useEffect(() => {
    if (productoId) {
      const element = document.getElementById(`producto-${productoId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [productoId]);
  
  return (
    <div>
      <Banner
      title="Tienda"
      description="Agrega a tu carrito"
      />
      <Row xs={1} md={2} lg={4} className="g-4 pb-4">
        {productos.map(producto => (
          <Col key={producto.id}  id={`producto-${producto.id}`}>
            <ProductCard producto={producto} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
