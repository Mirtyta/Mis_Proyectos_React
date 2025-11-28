// ============================================
// src/components/ColorSizeSelector.jsx
// ============================================

import "./ColorSizeSelector.css";

export default function ColorSizeSelector({
  opciones = [],      // lista fija (colores, talles o tags)
  value = [],         // array seleccionado desde el padre
  onChange,           // devuelve el nuevo array
  tipo = "color",     // "color" | "size" | "tag"
  multiple = true     // true para form, false para card
}) {
  const handleToggle = (item) => {
    let nuevoValor;

    if (multiple) {
      // modo múltiple (form)
      if (value.includes(item)) {
        nuevoValor = value.filter(v => v !== item);
      } else {
        nuevoValor = [...value, item];
      }
    } else {
      // modo único (card)
      nuevoValor = [item];
    }

    if (onChange) onChange(nuevoValor);
  };

  return (
    <div className="d-flex justify-content-center gap-2 flex-wrap">
      {opciones.map((item, idx) => {
        const selected = value.includes(item);

        if (tipo === "color") {
          return (
            <div
              key={idx}
              style={{ backgroundColor: item }}
              className={`color-badge ${selected ? "selected" : ""}`}
              onClick={() => handleToggle(item)}
            />
          );
        }

        return (
          <span
            key={idx}
            className={`size-badge ${selected ? "selected" : ""}`}
            onClick={() => handleToggle(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
