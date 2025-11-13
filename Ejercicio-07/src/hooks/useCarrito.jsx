// ============================================
// src/hooks/useCarrito.jsx
// ============================================

import { useState } from 'react';

/**
 * Hook personalizado para manejar la lógica del carrito
 */
export function useCarrito() {
  // -------------------------------
  // 🛒 Estado del carrito
  // -------------------------------
  const [cart, setCart] = useState([]);

  // -------------------------------
  // 💳 Último pago
  // -------------------------------
  const [lastCheckout, setLastCheckout] = useState(() => {
    const saved = sessionStorage.getItem("ultimoPago");
    return saved ? JSON.parse(saved) : null;
  });

  const saveLastCheckout = (pago) => {
    setLastCheckout(pago);
    sessionStorage.setItem("ultimoPago", JSON.stringify(pago));
  };

  // -------------------------------
  // 📦 Funciones del carrito
  // -------------------------------

  const addToCart = (producto, cantidad = 1) => {
    const existing = cart.find(item =>
      item.id === producto.id &&
      item.selectedColor === producto.selectedColor &&
      item.selectedSize === producto.selectedSize
    );

    if (existing) {
      setCart(cart.map(item =>
        item === existing
          ? { ...item, quantity: item.quantity + cantidad }
          : item
      ));
    } else {
      setCart([...cart, { ...producto, quantity: cantidad }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  // -------------------------------
  // 🔄 Retornamos estado y funciones
  // -------------------------------
  return {
    // Estado
    cart,
    lastCheckout,
    
    // Funciones
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    saveLastCheckout,
    
    // Datos derivados
    cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    itemsCount: cart.length,
    isEmpty: cart.length === 0
  };
}
