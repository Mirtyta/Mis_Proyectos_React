// ============================================
// src/context/CarritoProvider.jsx
// ============================================

import { CartContext } from './CartContext';
import { useCart } from '../hooks/useCart';

/**
 * Provider: Envuelve la app y provee el carrito
 */
export function CartProvider({ children }) {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}