// ============================================
// src/components/ColorSizeSelector.jsx
// ============================================

import { useState } from "react";
import "./ProductCard.css"; // Reutiliza las clases globales

export default function ColorSizeSelector({ colores = [], tamanos = [], onSeleccion }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelectColor = (color) => {
    setSelectedColor(color);
    if (onSeleccion) onSeleccion({ color, talle: selectedSize });
  };

  const handleSelectSize = (tamano) => {
    setSelectedSize(tamano);
    if (onSeleccion) onSeleccion({ color: selectedColor, talle: tamano });
  };

  return (
    <div>
      {/* Colores */}
      {colores.length > 0 && (
        <div className="d-flex justify-content-center gap-3 flex-wrap mb-2">
          {colores.map((color, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: color }}
              className={`color-badge ${selectedColor === color ? "selected" : ""}`}
              onClick={() => handleSelectColor(color)}
            ></div>
          ))}
        </div>
      )}

      {/* Talles */}
      {tamanos.length > 0 && (
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          {tamanos.map((tamano, idx) => (
            <span
              key={idx}
              className={`size-badge ${selectedSize === tamano ? "selected" : ""}`}
              onClick={() => handleSelectSize(tamano)}
            >
              {tamano}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
