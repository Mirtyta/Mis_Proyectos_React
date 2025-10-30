// ============================================
// src/components/Cart.jsx
// ============================================
// --------------------------------------------
// Importaciones el offcanvas que muestra el Carrito de compras
// --------------------------------------------
import { Offcanvas, ListGroup, ButtonGroup } from 'react-bootstrap'
// --------------------------------------------
// Importaciones mis componentes
// --------------------------------------------
import Boton from './MiBoton'
import Banner from './MiBanner'
// --------------------------------------------
// Importamos el contexto del carrito
// --------------------------------------------
// useCart: permite acceder a esos datos (si lo necesitáramos acá)
import { useCartContext } from "../hooks/useCartContext";


export default function Cart({ showCart, setShowCart }) {
  const { cart, removeFromCart, updateQuantity, clearCart} = useCartContext();
  const cartTotal = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0)

  return (
    <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end" className="mx-lg-3">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className='py-4'> 
          <Banner
            title="🛒 Carrito"
            description="Productos en tu carrito"
          />
        </Offcanvas.Title>
      </Offcanvas.Header>
      
      <Offcanvas.Body>
        {cart.length === 0 ? (
          <Banner
            title="🛒 Carrito"
            description="❌ Tu carrito está vacío. ¡Explorá nuestros productos en la tienda!"
          />
        ) : (
          <>
            <ListGroup variant="flush" className="mb-3 p-2">
              {cart.map(item => (
                <ListGroup.Item key={item.id} className="px-0">
                  <div className="d-flex align-items-start mb-2 p-4">
                    <span className="me-3">
                      <img src={item.image} alt={item.nombre} width="130"/>
                    </span>
                    <div className="flex-grow-1">
                      <h5 className="mb-1">{item.nombre}</h5>
                      <p className="text-light-emphasis fw-bold mb-0">${item.precio}</p>
                    </div>
                    <div className="tooltip-container">
                    <Boton
                      texto="✕"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-primary"
                    />
                    <span className="tooltip-box">
                      Eliminar del carrito
                    </span>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between px-4">
                    <ButtonGroup size="sm">
                      <div className="tooltip-container">
                      <Boton 
                        texto="-"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="btn btn-primary"
                      />
                      <span className="tooltip-box">
                        quitar producto
                      </span>
                      </div>
                      <Boton 
                      texto={item.quantity}
                      disabled
                      className="btn btn-primary px-3"
                      />
                      <div className="tooltip-container">
                      <Boton 
                        texto="+"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="btn btn-primary"
                      />
                      <span className="tooltip-box">
                        Agregar otro producto
                      </span>
                      </div>
                    </ButtonGroup>
                    <span className="fw-bold text-light-emphasis">
                      ${item.precio * item.quantity}
                    </span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div className="border-top pt-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary-emphasis fs-5 fw-bold">Total:</span>
                <span className="fs-4 fw-bold text-primary-emphasis">${cartTotal}</span>
              </div>
              <Boton 
              texto="Vaciar Carrito"
              variant="success" 
              className="btn btn-primary w-100"
              size="lg"
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