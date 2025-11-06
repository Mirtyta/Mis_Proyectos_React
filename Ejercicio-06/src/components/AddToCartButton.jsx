// ============================================
// src/components/AddToCartButton.jsx
// ============================================

import { useNavigate } from "react-router-dom";
import { useCarritoContext } from "../hooks/useCarritoContext";

/**
 * AddToCartButton (versión mejorada y robusta)
 * --------------------------------------------
 * Este componente se encarga de manejar toda la lógica de agregar productos al carrito.
 * 
 * Props:
 *  - producto: objeto con la info del producto
 *  - selectedColor: color actualmente seleccionado
 *  - selectedSize: talle actualmente seleccionado
 *  - setSelectedColor: función para limpiar el color al agregar
 *  - setSelectedSize: función para limpiar el talle al agregar
 *  - redirect: si es true, redirige al carrito después de agregar
 *  - iconOnly: si es true, muestra solo el ícono (ideal para grupos de botones)
 *  - className: clases extra para personalizar estilo
 */

export default function AddToCartButton({
  producto,
  selectedColor,
  selectedSize,
  setSelectedColor,
  setSelectedSize,
  redirect = false,
  iconOnly = false,
  className = "",
}) {

  const { addToCart, cart} = useCarritoContext();
  const navigate = useNavigate();
// ✅ Detecta si el producto ya está en el carrito (por ID)
  const isInCart = Array.isArray(cart) && cart.some(
    (item) => String(item.id) === String(producto.id)
  );


  /**
   * handleAdd
   * ---------
   * Maneja el click en el botón o ícono de carrito.
   * - Valida selección de color/talle (si aplica)
   * - Detecta si el producto ya existe (misma combinación)
   * - Muestra alertas contextuales
   * - Limpia selección visual y lógica
   */
  const handleAdd = (e) => {
    e.stopPropagation(); // evita conflictos con otros onClick

    // 🧩 Validaciones previas
    if (
      (producto.tamanos?.length && !selectedSize) ||
      (producto.colores?.length && !selectedColor)
    ) {
      alert("Seleccioná color y talle antes de agregar al carrito.");
      return;
    }

    const normalizedId = String(producto.id);

    // 🔍 Buscar si ya existe un producto igual (por id + color + talle)
    const existingItem = cart.find((item) => {
      const sameId = String(item.id) === normalizedId;
      const sameColor =
        !producto.colores?.length || item.selectedColor === selectedColor;
      const sameSize =
        !producto.tamanos?.length || item.selectedSize === selectedSize;
      return sameId && sameColor && sameSize;
    });

    // 🛒 Si ya existe → sumar cantidad, sino agregar nuevo
    if (existingItem) {
      addToCart({
        ...producto,
        selectedColor,
        selectedSize,
      });
      alert("➕ Sumaste otra unidad del mismo producto 🛍️");
    } else {
      addToCart({
        ...producto,
        selectedColor,
        selectedSize,
      });
      alert("✅ Producto agregado al carrito");
    }

    // 🧼 Limpieza del estado de selección
    if (setSelectedColor) setSelectedColor(null);
    if (setSelectedSize) setSelectedSize(null);

    // 💅 Limpieza visual → remueve .selected de color y talle
    document
      .querySelectorAll(".color-badge.selected, .size-badge.selected")
      .forEach((el) => el.classList.remove("selected"));

    // 🔁 Redirección opcional al carrito
    if (redirect) navigate("/carrito");
  };

  // 💠 Versión ícono (para usar dentro de grupos de botones)
  if (iconOnly) {
    return (
      <i
        className={`bi ${
          isInCart ? "bi-check2-square text-light" : "bi-bag text-light"
        } ${className}`}
        role="button"
        title={isInCart ? "Ya está en el carrito" : "Agregar al carrito"}
        onClick={handleAdd}
      ></i>
    );
  }

  // 🟡 Versión botón tradicional con texto
return (
  <button
    className={`btn ${isInCart ? "btn-secondary" : "btn-warning"} rounded-pill ${className}`}
    onClick={!isInCart ? handleAdd : undefined}
    disabled={isInCart}
  >
    {isInCart ? "Ya en el carrito" : "Agregar al carrito"}
  </button>
);

}
