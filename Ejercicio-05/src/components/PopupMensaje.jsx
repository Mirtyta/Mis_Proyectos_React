// ============================================
// PopupMensaje.jsx
// ============================================
import { useEffect, useState } from "react";
import "./PopupMensaje.css"; // después creamos el CSS

const PopupMensaje = ({ mensaje, tipo = "error", duracion = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duracion);
    return () => clearTimeout(timer);
  }, [duracion]);

  if (!visible) return null;

  return (
    <div className={`popup-mensaje ${tipo}`}>
      {mensaje}
    </div>
  );
};

export default PopupMensaje;
