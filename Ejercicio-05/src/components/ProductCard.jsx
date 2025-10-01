// ============================================
// src/components/ProductCard.jsx
// ============================================
import { Card } from 'react-bootstrap'
import Boton from './MiBoton'

export default function ProductCard({ producto, addToCart }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="text-center">
        <div style={{ fontSize: '4rem', overflow: 'hidden' }} className="mb-3">
          <img src={producto.imagenUrl} alt={producto.nombre} />         
        </div>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text className="text-primary fw-bold fs-4">
          ${producto.precio}
        </Card.Text>
        <Boton 
          texto="Agregar al carrito"
          variant="primary" 
          onClick={() => addToCart(producto)}
          className="w-100"
        />
      </Card.Body>
    </Card>
  )
}
