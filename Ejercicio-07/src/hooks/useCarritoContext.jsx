// ============================================
// src/hooks/useCarritoContext.jsx
// ============================================

import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext'; // 👈 Mismo path

export function useCarritoContext() {
  const context = useContext(CarritoContext);
  
  if (!context) {
    throw new Error('useCarritoContext debe usarse dentro de CarritoProvider');
  }
  
  return context;
}