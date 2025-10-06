// ============================================
// src/pages/ProductosPage.jsx
// ============================================
import { Container } from 'react-bootstrap'
import ProductList from '../components/ProductList'

export default function ProductosPage({ productos, addToCart }) {
  return (
    <Container>
      <ProductList productos={productos} addToCart={addToCart} />
    </Container>
  )
}