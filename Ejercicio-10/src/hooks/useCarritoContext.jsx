// ============================================
// src/hooks/useCarritoContext.jsx
// ============================================

import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // 👈 Mismo path

export function useCartContext() {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCartContext debe usarse dentro de CartProvider');
  }
  
  return context;
}