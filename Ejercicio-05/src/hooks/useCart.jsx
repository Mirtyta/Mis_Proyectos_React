// ============================================
// src/hooks/useCart.jsx
// ============================================

import { useState } from "react";

/**
 * Hook personalizado para manejar la lógica del carrito
 * 
 * ✅ Mantiene la lógica separada de la presentación
 * ✅ Permite mostrar mensajes tipo popup desde cualquier acción
 * ✅ Fácil de reutilizar en cualquier componente
 */
export function useCart() {
  // -------------------------------
  // 🛒 Estado del carrito
  // -------------------------------
  const [cart, setCart] = useState([]);

  // -------------------------------
  // 💬 Estado del mensaje popup
  // -------------------------------
  const [popupMsg, setPopupMsg] = useState("");

  // -------------------------------
  // 🔔 Función helper para mostrar popup
  // -------------------------------
  const showPopup = (mensaje, duracion = 2500) => {
    setPopupMsg(mensaje);
    setTimeout(() => setPopupMsg(""), duracion);
  };

  // -------------------------------
  // 📦 Funciones del carrito
  // -------------------------------

  /**
   * Agrega un producto al carrito
   * 
   * Lógica:
   * 1. Busca si ya existe el mismo producto (por id)
   * 2. Si existe → suma la cantidad
   * 3. Si NO existe → agrega nuevo item
   * 
   * @param {Object} producto - Producto a agregar
   * @param {number} cantidad - Cantidad a agregar (default: 1)
   */
  const addToCart = (producto, cantidad = 1) => {
    const existing = cart.find(item => item.id === producto.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === producto.id
          ? { ...item, quantity: item.quantity + cantidad }
          : item
      ));
      showPopup(`🔄 Se actualizaron ${cantidad} unidades de ${producto.nombre}`);
    } else {
      setCart([...cart, { ...producto, quantity: cantidad }]);
      showPopup(`✅ ${producto.nombre} agregado al carrito`);
    }
  };

  /**
   * Elimina un producto del carrito
   * 
   * @param {string|number} id - ID del producto a eliminar
   */
  const removeFromCart = (id) => {
    const item = cart.find(i => i.id === id);
    setCart(cart.filter(item => item.id !== id));
    showPopup(`❌ ${item?.nombre} eliminado del carrito`);
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
    const item = cart.find(i => i.id === id);
    showPopup(`🔄 Cantidad de ${item?.nombre} actualizada`);
  };

  /**
   * Vacía todo el carrito
   */
  const clearCart = () => {
    setCart([]);
    showPopup("🧹 Carrito vaciado");
  };

  // -------------------------------
  // 🔄 Datos derivados
  // -------------------------------
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // suma todas las cantidades
  const itemsCount = cart.length; // cantidad de items distintos
  const isEmpty = cart.length === 0;

  // -------------------------------
  // 🔄 Retornamos estado y funciones
  // -------------------------------
  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    itemsCount,
    isEmpty,
    popupMsg, // <-- nuevo, para mostrar los mensajes
  };
}
