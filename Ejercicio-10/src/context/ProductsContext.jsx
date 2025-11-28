// ============================================
// 📦 src/context/ProductosContext.jsx
// Context para compartir productos en toda la app
// ============================================

import { createContext, useContext } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";

// ========================================
// 🎯 PASO 1: CREAR EL CONTEXT
// ========================================

// createContext crea un "contenedor" para compartir datos
// entre componentes sin pasar props manualmente.
const ProductsContext = createContext();

// ========================================
// 🎁 PASO 2: CREAR EL PROVIDER
// ========================================

// ProductosProvider envuelve toda tu app y proporciona
// los productos y funciones CRUD a cualquier componente hijo.
export function ProductsProvider({ children }) {
  // Traemos todo del hook useFetchProducts
  // Lo llamamos UNA SOLA VEZ aquí, y todos los componentes
  // hijos van a compartir estos mismos datos
  const productosData = useFetchProducts();
  
  // productosData contiene: productos, cargando, error,
  // getProductById, createProduct, updateProduct, 
  // deleteProduct, refreshProducts

  // Proveemos los datos a toda la app
  return (
    <ProductsContext.Provider value={productosData}>
      {children}
    </ProductsContext.Provider>
  );
}

// ========================================
// 🎣 PASO 3: CREAR HOOK PERSONALIZADO
// ========================================

// Hook personalizado para acceder fácilmente al contexto
// CÓMO USARLO EN TUS COMPONENTES:
// import { useProductos } from '../context/ProductosContext';
// const { productos, createProduct } = useProductos();
// eslint-disable-next-line react-refresh/only-export-components
export function useProducts() {
  // "Sintonizamos" el contexto
  const context = useContext(ProductsContext);
  
  // Validación de seguridad: si se usa fuera del Provider, avisamos
  if (!context) {
    throw new Error(
      "useProductos debe usarse dentro de ProductosProvider. " +
      "Asegurate de envolver tu app con <ProductosProvider>."
    );
  }
  
  // Devolvemos todo lo que el contexto contiene
  return context;
}