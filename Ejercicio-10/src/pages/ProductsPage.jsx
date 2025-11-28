// ============================================
// src/pages/ProductsPage.jsx
// ============================================
import { useProducts } from "../context/ProductsContext";
import { useCart } from "../hooks/useCart";
import { useThemeContext } from "../context/ThemeContext";


import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";

export default function ProductsPage() {

  const {contextTheme} = useThemeContext()
  const { productos } = useProducts();
  const { addToCart } = useCart();

  return (
    <Container id={contextTheme}>
    <Banner title="Tienda" description={'¡Revisa nuestros Productos!'} />
      <Row  className="align-items-stretch d-flex g-4 p-5">
        {productos.map((producto) => (
          <Col
            key={producto.id}
            xs={12} // 1 tarjeta por fila en móviles (xs)
            sm={6}  // 2 tarjetas por fila en tabletas (sm)
            md={4}  // 3 tarjetas por fila en medianos (md)
            lg={3}  // 4 tarjetas por fila en grandes (lg/xl)
            xl={3}
          >           
              <ProductCard producto={producto} addToCart={addToCart} className=" h-100"  />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
