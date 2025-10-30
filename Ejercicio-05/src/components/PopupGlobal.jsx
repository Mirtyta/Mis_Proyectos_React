// ============================================
// src/components/PopupGlobal.jsx
// ============================================

/**
 * Componente: PopupGlobal
 * 
 * Este componente se encarga de mostrar los mensajes del carrito
 * (agregar, eliminar, actualizar cantidad, vaciar) como un popup
 * que aparece y desaparece solo después de unos segundos.
 * 
 * Funciona junto con:
 * - useCartContext: para leer el estado del carrito y el mensaje popup
 * - PopupMensaje: componente visual que se encarga de mostrar el popup en pantalla
 * 
 * Ventajas:
 * ✅ Centraliza todos los popups en un solo lugar
 * ✅ No hace falta modificar ProductCard ni otros componentes
 * ✅ Se mantiene limpio y reusable
 */

import { useCartContext } from "../hooks/useCartContext"; // Hook que devuelve carrito y popup
import { useEffect, useState } from "react"; // Hook para manejar estado y efectos
import PopupMensaje from "./PopupMensaje"; // Componente visual que muestra el popup

export default function PopupGlobal() {
  // -------------------------------
  // 1️⃣ Tomamos el mensaje de popup del carrito
  // -------------------------------
  const { popupMsg } = useCartContext(); 

  // -------------------------------
  // 2️⃣ Estado local para controlar visibilidad del popup
  // -------------------------------
  const [visible, setVisible] = useState(false);

  // -------------------------------
  // 3️⃣ Efecto: cada vez que cambia popupMsg
  // -------------------------------
  useEffect(() => {
    // Si hay un mensaje
    if (popupMsg) {
      setVisible(true); // mostramos el popup

      // Después de 2.5 segundos (o el tiempo que quieras), se oculta automáticamente
      const timer = setTimeout(() => setVisible(false), 2500);

      // Cleanup: por si se dispara otro mensaje antes de que termine el anterior
      return () => clearTimeout(timer);
    }
  }, [popupMsg]); // Este efecto se ejecuta cada vez que popupMsg cambia

  // -------------------------------
  // 4️⃣ Si no hay mensaje o no está visible, no mostramos nada
  // -------------------------------
  if (!visible || !popupMsg) return null;

  // -------------------------------
  // 5️⃣ Renderizamos el componente visual PopupMensaje
  // Pasamos las props necesarias: mensaje y tipo
  // -------------------------------
  return (
    <PopupMensaje 
      mensaje={popupMsg} 
      tipo="success" // Por ahora usamos siempre success, podrías adaptarlo según acción
    />
  );
}
