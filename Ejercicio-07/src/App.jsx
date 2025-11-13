// ============================================
// src/App.jsx (REFACTORIZADO ✨)
// ============================================

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Hook para traer productos
import { useFetchProductos } from './hooks/useFetchProductos';

// Context del carrito
import { CarritoProvider } from './context/CarritoProvider';

// Componentes Globales
import HeaderTop from './components/HeaderTop'
import Navigation from './components/Nav';
import Footer from './components/Footer';
import RutaProtegida from "./components/RutaProtegida";

// Importamos el Manejo de carga y errores
import LoadingState from "./components/LoadingState";


// Páginas y Componentes
import ProductoDetalle from './components/ProductDetails';
import SearchResultsPage from './pages/SearchResultsPage'


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductosPage from './pages/ProductsPage';
import ContactoPage from './pages/ContactPage';
import CarritoPage from './pages/CartPage';
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage"



/**
 * 🎯 App ahora solo se encarga de:
 * - Definir rutas
 * - Estructura general (Nav + Contenido + Footer)
 * - Proveer el carrito a toda la app
 */

export default function App() {
   /**
   * useFetchProductos:
   * - trae productos desde donde lo tengas (mock, API, JSON local)
   * - devuelve: productos, error, cargando y getProductoById para detalle Producto
   * Lo dejamos para pasar productos cuando haga falta.
   */
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
        {/* Header superior (buscador, login/logout, carrito pequeño) */}
        <div className='body-app'>
          <HeaderTop/>

          {/* Navigation principal (navbar con enlaces) */}
          <Navigation />

          {/* Definición de rutas */}
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/productos"
              element={<ProductosPage productos={productos} />}
            />
            
            {/* Ruta dinámica para detalle de producto */}            
            <Route
              path="/producto/:id"
              element={<ProductoDetalle getProductoById={getProductoById} />}
            />

            <Route path="/contacto" element={<ContactoPage />} />            
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="/buscar" element={<SearchResultsPage />} />
            <Route path="/about" element={<AboutPage />} />

             {/* Página de login (si viene de una ruta protegida, LoginPage leerá el state) */}
            <Route path="/login" element={<LoginPage />} />

            {/* RUTAS PROTEGIDAS */}
            {/* Checkout: requiere solo estar autenticado */}
            <Route
              path="/checkout"
              element={
                <RutaProtegida>
                  <CheckoutPage />
                </RutaProtegida>
              }
            />

            {/* Admin: requiere estar autenticado y tener role === 'admin' */}
            <Route
              path="/admin"
              element={
                <RutaProtegida requiredRole="admin">
                  <AdminPage />
                </RutaProtegida>
              }
            />
            <Route
            path="/perfil"
            element={
              <RutaProtegida>
                <ProfilePage />
              </RutaProtegida>
            }
          />

          </Routes>

        </div>
        {/* Footer global */}
        <Footer />
      </BrowserRouter>
      </LoadingState>
    </CarritoProvider>
  );
}