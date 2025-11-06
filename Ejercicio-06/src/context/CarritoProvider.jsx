// ============================================
// src/context/CarritoProvider.jsx
// ============================================

import { CarritoContext } from './CarritoContext';
import { useCarrito } from '../hooks/useCarrito';

/**
 * Provider: Envuelve la app y provee el carrito
 */
export function CarritoProvider({ children }) {
  const carrito = useCarrito();

  return (
    <CarritoContext.Provider value={carrito}>
      {children}
    </CarritoContext.Provider>
  );
}