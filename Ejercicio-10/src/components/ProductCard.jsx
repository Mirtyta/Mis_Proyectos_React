// ============================================
// src/components/ProductCard.jsx
// ============================================

import { Link } from "react-router-dom";
import ColorSizeSelector from "./ColorSizeSelector";
import { formatearPrecio } from "../utils/calculos";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";

import "./ProductCard.css";

/**
 * 🛍️ ProductCard
 * ------------------
 * Tarjeta de producto común para listado de productos.
 * Muestra:
 * - Imagen
 * - Nombre y precio
 * - Selector de color y talla
 * - Botón para agregar al carrito
 * - Badge de descuento si aplica
 *
 * ⚙️ Props:
 * - producto: objeto con los datos del producto
 *
 * 🔑 Cambios respecto al antiguo:
 * 1. Se usa el nuevo ColorSizeSelector con arrays.
 * 2. Selección única para color y talle.
 * 3. selectedColor y selectedSize se guardan como strings.
 */
export default function ProductCard({ producto }) {
  // Estados para color y talla seleccionados
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="detalles-internos card shadow-sm">
      {/* ========== IMAGEN Y BADGES ========== */}
      <div className="position-relative">
        <div className="ratio ratio-1x1">
          <img
            className="w-100 h-100 object-fit-cover"
            src={producto.image}
            alt={producto.nombre}
          />
        </div>

        {/* Íconos superpuestos: detalle y carrito */}
        <div className="btn-groupe position-absolute top-0 end-0 m-4">
          {/* Botón ver detalle */}
          <button className="btn btn-warning rounded-pill fs-4">
            <Link to={`/producto/${producto.id}`}>
              <i className="text-light bi bi-eye" title="Detalle de producto"></i>
            </Link>
          </button>

          {/* Botón agregar al carrito */}
          <AddToCartButton
            producto={producto}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            redirect={false}
            iconOnly={true}
            className="btn btn-warning rounded-pill fs-4"
          />
        </div>

        {/* Badge de descuento */}
        {producto.descuento > 0 && (
          <span className="badge bg-danger position-absolute top-0 start-0 p-2 m-2 fs-6">
            {producto.descuento}%<sub className='fs-6'>off</sub>
          </span>
        )}
      </div>

      {/* ========== INFORMACIÓN DEL PRODUCTO ========== */}
      <div className="text-center mt-2 p-2 card-body">
        <h5 className="fw-semibold fs-5 card-title">{producto.nombre}</h5>
        <div className="mb-2 fs-4 text-warning">{formatearPrecio(producto.precio)}.<sup>00</sup></div>
        <div className="mb-3">Elige color y talle</div>

        {/* Selector de color */}
        <ColorSizeSelector
          opciones={producto.colores}
          value={selectedColor ? [selectedColor] : []}
          multiple={false}  // selección única
          tipo="color"
          onChange={(arr) => setSelectedColor(arr[0] || "")}
        />

        {/* Selector de talla */}
        <ColorSizeSelector
          opciones={producto.tamanos}
          value={selectedSize ? [selectedSize] : []}
          multiple={false}  // selección única
          tipo="size"
          onChange={(arr) => setSelectedSize(arr[0] || "")}
        />
      </div>
    </div>
  );
}
