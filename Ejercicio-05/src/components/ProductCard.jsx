// ============================================
// src/components/ProductCard.jsx
// ============================================
import { Card } from 'react-bootstrap'
import Boton from './MiBoton'

export default function ProductCard({ producto, addToCart }) {
  return (
    <Card className="h-100 bg-light shadow">
      <Card.Body className="text-center">
        <div className="image-wrapper">
          <img src={producto.image} alt={producto.nombre}/>         
        </div>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text className="text-primary fw-bold fs-4">
          ${producto.precio}
        </Card.Text>
        <Boton 
          texto="Agregar al carrito"
          onClick={() => addToCart(producto)}
          type="button"
          className="w-100 btn btn-primary"
        />
      </Card.Body>
    </Card>
  )
}
