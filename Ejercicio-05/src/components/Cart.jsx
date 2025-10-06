// ============================================
// src/components/Cart.jsx
// ============================================
import { Offcanvas, ListGroup, ButtonGroup } from 'react-bootstrap'
import Boton from './MiBoton'
import Banner from './MiBanner'

export default function Cart({ 
  cart, 
  showCart, 
  setShowCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart
}) {
  const cartTotal = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0)

  return (
    <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="start" className="mx-lg-5">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> 
          <Banner
            title="Carrito"
            description="Productos en tu carrito"
          />
        </Offcanvas.Title>
      </Offcanvas.Header>
      
      <Offcanvas.Body>
        {cart.length === 0 ? (
          <div className="text-center py-5">
            <div style={{ fontSize: '4rem', opacity:'0.3', }}>🛒</div>
            <p className="text-muted">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <ListGroup variant="flush" className="mb-3 p-2">
              {cart.map(item => (
                <ListGroup.Item key={item.id} className="px-0">
                  <div className="d-flex align-items-start mb-2 p-4">
                    <span className="me-3">
                      <img src={item.image} alt={item.nombre} width="150"/>
                    </span>
                    <div className="flex-grow-1">
                      <h5 className="mb-1">{item.nombre}</h5>
                      <p className="text-primary fw-bold mb-0">${item.precio}</p>
                    </div>
                    <Boton
                      texto="✕"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-primary"
                      Title="Eliminar"
                    />
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between px-4">
                    <ButtonGroup size="sm">
                      <Boton 
                        texto="-"
                        onClick={() => updateQuantity(item.id, -1)}
                        Title="Quitar/Eliminar"
                        className="btn btn-primary"
                      />
                      <Boton 
                      texto={item.quantity}
                      disabled
                      className="btn btn-primary"
                      />
                      <Boton 
                        texto="+"
                        onClick={() => updateQuantity(item.id, 1)}
                        Title="Agregar"
                        className="btn btn-primary"
                      />
                    </ButtonGroup>
                    <span className="fw-bold text-primary">
                      ${item.precio * item.quantity}
                    </span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div className="border-top pt-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="fs-5 fw-bold">Total:</span>
                <span className="fs-4 fw-bold text-primary">${cartTotal}</span>
              </div>
              <Boton 
              texto="Vaciar Carrito"
              variant="success" 
              className="btn btn-primary w-100"
              size="lg"
              Title="Vacia el Carrito"
              onClick={() => {
                clearCart();        // 1. Limpia el carrito (llama a setCart([]))
                // setShowCart(false);  2. Cierra el Offcanvas
              }}
              />
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}