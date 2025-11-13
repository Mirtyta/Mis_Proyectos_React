// ============================================
// src/components/ProductCard.jsx
// ============================================

import { Link } from "react-router-dom";
import ColorSizeSelector from "./ColorSizeSelector";
import { formatearPrecio} from "../utils/calculos";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";

import "./ProductCard.css";

/**
 * Tarjeta de producto común (no destacada).
 * Muestra imagen, nombre, precio, colores, talles y acciones básicas.
 */
export default function ProductCard({ producto }) {

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="detalles-internos product-card">
      {/* Imagen del producto */}
      <div className="image-container">
        <img
          src={producto.image}
          alt={producto.nombre}
        />
          {/* Badge de descuento (solo si tiene descuento > 0) */}
        {producto.descuento > 0 && (
          <span className="image-badge-normal">
            {producto.descuento * 100}%<sub className=' fs-6'>off</sub>
          </span>
        )}

        {/* Íconos superpuestos */}
        <div className="btn-group icons-overlay">
          <button className="btn btn-success rounded-pill fs-4">
            <Link to={`/producto/${producto.id}`}>
            <i className=" text-light bi bi-eye" title="Detalle de producto"></i>
            </Link>
          </button>
            <AddToCartButton
              producto={producto}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              redirect={false}
              iconOnly={true}
              className="btn btn-success rounded-pill fs-4"
            />        
        </div>

      </div>

      {/* Información del producto */}
      <div className="product-info text-center mt-2 p-2">
        <h5 className=" fw-semibold fs-3">{producto.nombre}</h5>
        <div className="price mb-2 fs-4">{formatearPrecio(producto.precio)}.<sup>00</sup>
        </div>
        <div className=" mb-3">Elije color y talle</div>
        {/* Selector de color y talle */}
        <ColorSizeSelector
          colores={producto.colores}
          tamanos={producto.tamanos}
          onSeleccion={({ color, talle }) => {
            setSelectedColor(color);
            setSelectedSize(talle);
          }}
        />
      </div>
    </div>
  );
}
