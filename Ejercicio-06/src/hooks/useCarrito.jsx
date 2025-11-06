// ============================================
// src/hooks/useCarrito.jsx
// ============================================

import { useState } from 'react';

/**
 * Hook personalizado para manejar la lógica del carrito
 * 
 * ¿Por qué un hook separado?
 * - Separa la LÓGICA (qué hace) de la PRESENTACIÓN (cómo se ve)
 * - Reutilizable en cualquier componente
 * - Fácil de testear
 * - Mantiene App.jsx limpio
 */
export function useCarrito() {
  // -------------------------------
  // 🛒 Estado del carrito
  // -------------------------------
  const [cart, setCart] = useState([]);

  // -------------------------------
  // 📦 Funciones del carrito
  // -------------------------------

  /**
   * Agrega un producto al carrito
   * 
   * Lógica:
   * 1. Busca si ya existe el mismo producto con color y talle
   * 2. Si existe → suma la cantidad
   * 3. Si NO existe → agrega nuevo item
   * 
   * @param {Object} producto - Producto a agregar
   * @param {number} cantidad - Cantidad a agregar (default: 1)
   */
  const addToCart = (producto, cantidad = 1) => {
    // Buscar si ya existe (mismo id, color y talle)
    const existing = cart.find(item =>
      item.id === producto.id &&
      item.selectedColor === producto.selectedColor &&
      item.selectedSize === producto.selectedSize
    );

    if (existing) {
      // Ya existe → actualizar cantidad
      setCart(cart.map(item =>
        item === existing
          ? { ...item, quantity: item.quantity + cantidad }
          : item
      ));
    } else {
      // No existe → agregar nuevo
      setCart([...cart, { ...producto, quantity: cantidad }]);
    }
  };

  /**
   * Elimina un producto del carrito
   * 
   * @param {string|number} id - ID del producto a eliminar
   */
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  /**
   * Actualiza la cantidad de un producto
   * 
   * @param {string|number} id - ID del producto
   * @param {number} delta - Cantidad a sumar o restar (ej: +1, -1)
   */
  const updateQuantity = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) } // Mínimo 1
        : item
    ));
  };

  /**
   * Vacía todo el carrito
   */
  const clearCart = () => {
    setCart([]);
  };

  // -------------------------------
  // 🔄 Retornamos estado y funciones
  // -------------------------------
  return {
    // Estado
    cart,
    
    // Funciones
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    
    // Datos derivados (calculados)
    cartCount: cart.reduce((total, item) => total + item.quantity, 0), // 🔥 Suma TODAS las cantidades
    itemsCount: cart.length, // Cantidad de items diferentes (opcional)
    isEmpty: cart.length === 0
  };
}