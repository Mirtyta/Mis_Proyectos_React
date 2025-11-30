import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

/**
 * Hook personalizado para manejar la lógica del carrito por usuario.
 * --------------------------------------------
 * Este hook:
 *  - Guarda y carga el carrito desde localStorage usando `username` como ID
 *  - Maneja agregar, eliminar y actualizar cantidad de productos
 *  - Alerta si el usuario no está logueado
 *  - Mantiene el último pago por usuario
 */

export function useCart() {
  // -------------------------------
  // 🧑 Obtener usuario logueado
  // -------------------------------
  const getUserName = () => localStorage.getItem("username");

  // -------------------------------
  // 🛒 Estado del carrito
  // -------------------------------
  const [cart, setCart] = useState(() => {
    const userName = getUserName();
    if (!userName) return []; // ⚠️ Sin usuario = carrito vacío
    
    // Cargar carrito desde localStorage DEL USUARIO ACTUAL
    const saved = localStorage.getItem(`cart_${userName}`);
    return saved ? JSON.parse(saved) : [];
  });

  // -------------------------------
  // 📄 Guardar carrito en localStorage por usuario
  // -------------------------------
  useEffect(() => {
    const userName = getUserName();
    if (userName) {
      localStorage.setItem(`cart_${userName}`, JSON.stringify(cart));
    }
  }, [cart]);

  // -------------------------------
  // 🔄 Recargar carrito cuando cambie el usuario (login/logout)
  // -------------------------------
  const loadUserCart = () => {
    const userName = getUserName();
    if (!userName) {
      setCart([]); // Sin usuario = limpiar carrito en memoria
      return;
    }
    
    const saved = localStorage.getItem(`cart_${userName}`);
    setCart(saved ? JSON.parse(saved) : []);
  };

  // -------------------------------
  // 💳 Último pago
  // -------------------------------
  const [lastCheckout, setLastCheckout] = useState(() => {
    const userName = getUserName();
    if (!userName) return null;
    
    const saved = localStorage.getItem(`ultimoPago_${userName}`);
    return saved ? JSON.parse(saved) : null;
  });

  const saveLastCheckout = (pago) => {
    setLastCheckout(pago);
    const userName = getUserName();
    if (userName) {
      localStorage.setItem(`ultimoPago_${userName}`, JSON.stringify(pago));
    }
  };

  // -------------------------------
  // 📦 Funciones del carrito
  // -------------------------------
  const addToCart = (producto, cantidad = 1) => {
    const userName = getUserName();
    
     // ✅ AGREGAR SOLO UN GUARD SILENCIOSO:
  if (!userName) return; // Si no hay usuario, simplemente no hacer nada
  

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

  // 🆕 Limpiar carrito en memoria (para logout)
  const clearCartInMemory = () => {
    setCart([]);
  };

  // -------------------------------
  // 📄 Retornamos estado y funciones
  // -------------------------------
  return {
    cart,
    lastCheckout,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    clearCartInMemory, // 🆕 NUEVA FUNCIÓN
    loadUserCart, // 🆕 NUEVA FUNCIÓN
    saveLastCheckout,
    cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    itemsCount: cart.length,
    isEmpty: cart.length === 0
  };
}