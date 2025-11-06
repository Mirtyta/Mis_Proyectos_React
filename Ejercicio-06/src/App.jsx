// ============================================
// src/App.jsx (REFACTORIZADO ✨)
// ============================================

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Hook para traer productos
import { useFetchProductos } from './hooks/useFetchProductos';

// Context del carrito
import { CarritoProvider } from './context/CarritoProvider';

// Componentes comunes
import HeaderTop from './components/HeaderTop'
import Navigation from './components/Nav';
import Footer from './components/Footer';
import ProductoDetalle from './components/ProductDetails';

// Páginas
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductosPage from './pages/ProductsPage';
import ContactoPage from './pages/ContactPage';
import CarritoPage from './pages/CartPage';
import EnConstruccion from './pages/LoginPage';

// --------------------------------------------
// Importamos el Manejo de carga y errores
// --------------------------------------------
import LoadingState from "./components/LoadingState";

/**
 * 🎯 App ahora solo se encarga de:
 * - Definir rutas
 * - Estructura general (Nav + Contenido + Footer)
 * - Proveer el carrito a toda la app
 * 
 * ❌ YA NO hace:
 * - Manejar estado del carrito
 * - Lógica de agregar/quitar productos
 * - Pasar props a 3+ niveles
 */
export default function App() {
  // Traemos los productos, error, carga y productId para detalle
  const { productos, error, cargando, getProductoById } = useFetchProductos();
  // const cargandoConDelay = cargando || true; // fuerza a true

  // -------------------------------
  // 🧭 Estructura de la app
  // -------------------------------
  return (
    // 🔥 El CarritoProvider envuelve TODO
    // Ahora CUALQUIER componente puede acceder al carrito
    <CarritoProvider>
      <LoadingState cargando={cargando} error={error}>
      <BrowserRouter>
        
        <div className='body-app'>
          <HeaderTop/>
          {/* 
          Navigation ya no necesita cartCount como prop
          Puede obtenerlo directamente del context
          */}
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/productos"
              element={<ProductosPage productos={productos} />}
            />
            
            <Route path="/contacto" element={<ContactoPage />} />
            
            <Route
              path="/producto/:id"
              element={<ProductoDetalle getProductoById={getProductoById} />}
            />
            
            <Route path="/carrito" element={<CarritoPage />} />

            <Route path="/login" element={<EnConstruccion />} />

            <Route path="/about" element={<AboutPage />} />
          </Routes>

        </div>

        <Footer />
      </BrowserRouter>
      </LoadingState>
    </CarritoProvider>
  );
}