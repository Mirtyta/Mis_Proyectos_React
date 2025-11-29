import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar la lógica del carrito
 */
export function useCart() {
  // -------------------------------
  // 🛒 Estado del carrito
  // -------------------------------
  const [cart, setCart] = useState(() => {
    // Cargar carrito desde localStorage
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // -------------------------------
  // 💳 Último pago
  // -------------------------------
  const [lastCheckout, setLastCheckout] = useState(() => {
    const saved = localStorage.getItem("ultimoPago");
    return saved ? JSON.parse(saved) : null;
  });

  const saveLastCheckout = (pago) => {
    setLastCheckout(pago);
    const user = localStorage.getItem("username") || "guest";
    localStorage.setItem(`ultimoPago_${user}`, JSON.stringify(pago)); 
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
  // 🔄 Guardar cart en localStorage cada vez que cambie
  // -------------------------------
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // -------------------------------
  // 🔄 Retornamos estado y funciones
  // -------------------------------
  return {
    cart,
    lastCheckout,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    saveLastCheckout,
    cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    itemsCount: cart.length,
    isEmpty: cart.length === 0
  };
}
