// ============================================
// src/App.jsx - CON CONTEXT API
// ============================================

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ========================================
//  IMPORTAMOS EL PROVIDER
// ========================================

/**
 * ProductsProvider:
 * - Envuelve toda la app
 * - Provee productos y funciones CRUD a todos los componentes
 * - Reemplaza la necesidad de pasar props manualmente
 */
import { ProductsProvider } from './context/ProductsContext';

// Context del carrito 
import { CartProvider } from './context/CartProvider';
// contexto Theme dark/light
import { useThemeContext } from './context/ThemeContext';

// Componentes Globales
import HeaderTop from './components/HeaderTop'
import Navigation from './components/Nav';
import Footer from './components/Footer';
import ProtectedRoute from "./components/ProtectedRoute";

// Importamos el Manejo de carga y errores
import LoadingState from "./components/LoadingState";

// Páginas y Componentes
import ProductoDetails from './components/ProductDetails';
import SearchResultsPage from './pages/SearchResultsPage'

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import CheckoutPage from "./pages/CheckoutPage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage"

export default function App() {
    const {contextTheme} = useThemeContext()
  // ========================================
  // 🏗️ ESTRUCTURA DE LA APP
  // ========================================
  
  return (
    /**
     * 🎁 ORDEN DE LOS PROVIDERS
     * ==========================
     * 
     * Los Providers se "anidan" (envuelven) en un orden específico:
     * 
     * 1. ProductosProvider (más externo)
     *    ↓ Provee: productos, createProduct, updateProduct, etc.
     * 
     * 2. CarritoProvider
     *    ↓ Provee: carrito, agregarAlCarrito, eliminarDelCarrito, etc.
     * 
     * 3. LoadingState
     *    ↓ Muestra spinner si está cargando
     * 
     * 4. BrowserRouter
     *    ↓ Maneja la navegación
     * 
     * 5. Componentes de la app (Header, Nav, Routes, Footer)
     * 
     * REGLA IMPORTANTE:
     * -----------------
     * El que está más afuera (ProductosProvider) puede ser usado por
     * todos los que están adentro, incluyendo CarritoProvider.
     * 
     * Esto significa que CarritoProvider podría usar useProductos()
     * si necesitara acceder a los productos.
     */
    <ProductsProvider>
      <CartProvider>
        <LoadingState>
          <BrowserRouter>
            <div id={contextTheme}>
              {/* Header superior (buscador, login/logout, carrito pequeño) */}
              <HeaderTop />

              {/* Navigation principal (navbar con enlaces) */}
              <Navigation />

              {/* ========================================
                  🛣️ RUTAS DE LA APP
                  ======================================== */}
              
              <Routes>
                {/* Página principal */}
                <Route path="/" element={<HomePage />} />

                <Route
                  path="/productos"
                  element={<ProductsPage />}
                />
                
                <Route
                  path="/producto/:id"
                  element={<ProductoDetails />}
                />

                {/* Otras rutas que no usan productos */}
                <Route path="/contacto" element={<ContactPage />} />            

                <Route path="/buscar" element={<SearchResultsPage />} />
                <Route path="/about" element={<AboutPage />} />

                {/* Página de login/Register */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* ========================================
                    🔒 RUTAS PROTEGIDAS
                    ======================================== */}
                <Route 
                path="/carrito" 
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                } 
                />
                
                {/* Checkout: requiere solo estar autenticado */}
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <CheckoutPage />
                    </ProtectedRoute>
                  }
                />

                {/* ========================================
                    👨‍💼 ADMIN - USA CONTEXT
                    ======================================== */}
                
                {/**
                 * AdminPage ahora usa useProductos() internamente.
                 * Cuando AdminPage modifica un producto:
                 * 1. Llama a updateProduct del contexto
                 * 2. El contexto actualiza su estado
                 * 3. Todos los componentes que usen useProductos() se re-renderizan
                 * 4. ProductosPage ve los cambios automáticamente ✅
                 */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <AdminPage />
                    </ProtectedRoute>
                  }
                />

                {/* Perfil: requiere estar autenticado */}
                <Route
                  path="/perfil"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />

              </Routes>

            </div>
            
            {/* Footer global */}
            <Footer />
          </BrowserRouter>
        </LoadingState>
      </CartProvider>
    </ProductsProvider>
  );
}
