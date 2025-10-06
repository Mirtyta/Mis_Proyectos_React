// ============================================
// src/components/ProductList.jsx
// ============================================
import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import Banner from './MiBanner'

export default function ProductList({ productos, addToCart }) {
  return (
    <div>
      <Banner
      title="Tienda"
      description="Agrega a tu carrito"
      />
      <Row xs={1} md={2} lg={4} className="g-4 pb-4">
        {productos.map(producto => (
          <Col key={producto.id}>
            <ProductCard producto={producto} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
