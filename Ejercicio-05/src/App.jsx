// ============================================
// App.jsx
// ============================================
// Este archivo ahora se encarga SOLAMENTE de:
// 👉 Definir las rutas principales de la app (Router)
// 👉 Mostrar los componentes base (Nav, Footer, Cart)
// 👉 Envolver todo con el CartProvider para manejar el carrito
//
// Toda la lógica del carrito ahora está en: src/context/CartContext.js
// ============================================

// --------------------------------------------
// Importaciones principales de React y Router
// --------------------------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// --------------------------------------------
// Importamos el contexto del carrito
// --------------------------------------------
// CartProvider: provee los datos del carrito a toda la app
import { CartProvider } from "./context/CartProvider";
// --------------------------------------------
// Importamos los componentes principales
// --------------------------------------------
import Navigation from "./components/Nav";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

// --------------------------------------------
// Importamos las páginas
// --------------------------------------------
import ProductosPage from "./pages/ProductosPage";
import ContactoPage from "./components/Contact";
import HomePage from "./components/Home";
// --------------------------------------------
// Importamos el hook de productos (fetch API)
// --------------------------------------------
import { useFetchProductos } from "./hooks/useFetchProductos";
// --------------------------------------------
// Importamos el Manejo de carga y errores
// --------------------------------------------
import LoadingState from "./components/LoadingState";
// Importamos el popup global
import PopupGlobal from "./components/PopupGlobal";


// --------------------------------------------
// Componente principal de la aplicación
// --------------------------------------------
export default function App() {
  // 1️⃣ Llamamos al hook personalizado que trae los productos
  const { productos, cargando, error } = useFetchProductos();
  // Manejo de OffCanvas de Bootstrap mostrar o no el carrito
  const [showCart, setShowCart] = useState(false)
  return (
    <BrowserRouter>
      {/* 
        CartProvider: ahora toda la aplicación
        puede acceder al carrito desde cualquier componente
        usando el hook useCart()
      */}
      <CartProvider>
        <LoadingState cargando={cargando} error={error}>
        {/* Contenedor principal */}
        <div>
          {/* Barra de navegación (usa cartCount del contexto) */}
          <Navigation  
          showCart={showCart}
          setShowCart={setShowCart}/>
         {/* POPUP GLOBAL */}
          <PopupGlobal />
          {/* Rutas principales */}
          <div className="contenido-total">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/productos"
                element={<ProductosPage productos={productos} />}
              />
              <Route path="/contacto" element={<ContactoPage />} />
            </Routes>
          </div>

          {/* Carrito (se muestra con Offcanvas o modal) */}
          <Cart 
          showCart={showCart} 
          setShowCart={setShowCart} />


          {/* Pie de página */}
          <Footer />
        </div>
        </LoadingState>
      </CartProvider>
    </BrowserRouter>
  );
}
