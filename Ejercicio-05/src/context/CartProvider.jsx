// ============================================
// src/context/CartProvider.jsx
// ============================================

import { CartContext } from './CartContext';
import { useCart } from '../hooks/useCart';

/**
 * Provider: Envuelve la app y provee el carrito
 */
export function CartProvider({ children }) {
  const carrito = useCart();

  return (
    <CartContext.Provider value={carrito}>
      {children}
    </CartContext.Provider>
  );
}