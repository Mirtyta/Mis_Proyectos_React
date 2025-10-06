// ============================================
// src/App.jsx - CON REACT ROUTER
// ============================================
// Importanto useState para 
// Carrito de compras, 
// mostrar Offcanvas Carrito compras
import { useState } from 'react'
// Importamos useFetch manejo de api
import { useFetchProductos } from './fetch/useFetchProductos'
// Importamos componentes de React router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importamos los componentes 
import Navigation from './components/Nav'
import Cart from './components/Cart'
import Footer from './components/Footer'

// importamos páginas
import ProductosPage from './pages/ProductosPage'
import ContactoPage from './components/Escribinos'
import HomePage from './components/Home'

// proyecto realizado con Bootstrap, lo importamos
import { Container } from 'react-bootstrap'

export default function App() {
  // manejo de carrito de compras, por defecto vacio
  const [cart, setCart] = useState([])

  // Manejo de OffCanvas de Bootstrap mostrar o no el carrito
  const [showCart, setShowCart] = useState(false)

  // Fetch de Productos
  const { productos, error, cargando } = useFetchProductos();
    
  //funciones de carrito
  const addToCart = (producto) => {
  // Buscar primero si el producto existe ya en el carrito, 
  // si existe le suma 1 al producto, sino agrega uno nuevo
    const existing = cart.find(item => item.id === producto.id)
    if (existing) {
      setCart(cart.map(item =>
        item.id === producto.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...producto, quantity: 1 }])
    }
  }
  // Elimina del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }
  // actualiza la cantidad + suma, - resta, si llega a 0, elimina el producto
  const updateQuantity = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    ).filter(item => item.quantity > 0))
  }
  // al presionar Terminar Compra se libera el carrito, borra todos los productos
  const clearCart = () => {
  setCart([]);
};
  // Lo utilizo en Nav.jsx, para mostrar con el badge la cantidad de productos en el canasto de compras
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

    // Manejo de estados de carga
  if (cargando) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: 'var(--color-fondo)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <p>Cargando Productos...</p>
      </div>
    )
  }
  // Manejo de errores
  if (error) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: 'var(--color-fondo)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <p>Error: {error}</p>
      </div>
    )
  }

  return (
    <BrowserRouter>
    {/* Div principal de la app, utilice colores definidos como paleta 
    // de colores para cambiar algunos estilos de Bootstrap, defini la 
    // paleta de colores en App.css/:root es mas fácil colocar colores 
    // o fondos con var(--color-fondo o var(--color-destacado))etc. */}

    <div style={{ minHeight: '100vh'}}>
      <Navigation
        cartCount={cartCount}
        showCart={showCart}
        setShowCart={setShowCart}
      />
       {/* Rutas */}
        <div className='contenido-total'>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage/>
            } 
          />
          <Route 
            path="/productos" 
            element={
              <ProductosPage 
                productos={productos} 
                addToCart={addToCart} 
              />
            } 
          />
          <Route 
            path="/contacto" 
            element={<ContactoPage />} 
          />
        </Routes>
        </div>

       {/* Carrito (siempre disponible) */}
      <Cart 
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
      {/* cargo el Footer */}
      <Footer />
    </div>
  </BrowserRouter>
  )
}
