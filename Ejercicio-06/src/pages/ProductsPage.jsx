// ============================================
// src/pages/ProductsPage.jsx
// ============================================
import ProductList from '../components/ProductList'

export default function ProductosPage({ productos, addToCart }) {
  return (
    <div>
      <ProductList productos={productos} addToCart={addToCart} />
    </div>
  )
}