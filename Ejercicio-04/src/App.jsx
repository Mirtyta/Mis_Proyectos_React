// ============================================
// src/App.jsx
// Deploy : https://merry-paprenjak-ee17fc.netlify.app/
// ============================================
// Importanto useState para 
// manejo de Secciones, 
// Carrito de compras, 
// mostrar Offcanvas Carrito compras
import { useState } from 'react'
// importamos un js, que contiene el 
// array de los productos que tenemos disponibles
// es formato js, porque es el formato mas comun 
// para éste tipo de archivos con datos arrays
import productos from './datos/ProductsData' 
// Importamos los componentes de las secciones 
import Navigation from './components/Nav'
import ProductList from './components/ProductList'
import ContactForm from './components/ContactForm'
import Cart from './components/Cart'
import Footer from './components/Footer'
// proyecto realizado con Bootstrap, lo importamos
import { Container } from 'react-bootstrap'

export default function App() {
  // manejo de visualizacion de secciones, pro defecto Productos
  //// Es como un interruptor:
  // 'productos' → muestra la lista de productos
  // 'contacto'  → muestra el formulario de contacto
  const [currentSection, setCurrentSection] = useState('productos')
  // manejo de carrito de compras, por efecto vacio
  const [cart, setCart] = useState([])
  // Manejo de OffCanvas de Bootstrap mostrar o no el carrito
  const [showCart, setShowCart] = useState(false)
  // Buscar primero si el producto existe ya en el carrito, 
  // si existe le suma 1 al producto, sino agrega uno nuevo
  const addToCart = (producto) => {

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

  return (
    // Div principal de la app, utilice colores definidos como paleta 
    // de colores para cambiar algunos estilos de Bootstrap, defini la 
    // paleta de colores en App.css/:root es mas fácil colocar colores 
    // o fondos con var(--color-fondo o var(--color-destacado))etc.
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-fondo)' }}>
      {/* le paso la info al Navigation */}
      <Navigation 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        cartCount={cartCount}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      {/* le paso la info a productos */}
      <Container className="py-4">
        {currentSection === 'productos' && (
          <ProductList productos={productos} addToCart={addToCart} />
        )}

        {currentSection === 'contacto' && (
          <ContactForm />
        )}
      </Container>
      {/* le paso la info a Cart */}
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
  )
}
