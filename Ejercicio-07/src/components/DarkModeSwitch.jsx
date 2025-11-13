// ============================================
// src/components/DarkModeSwitch.jsx
// ============================================
import { useState, useEffect } from "react";

/**
 * DarkModeSwitch
 * - Lee la preferencia en sessionStorage al montar.
 * - Aplica/quita la clase "dark-mode" sobre varios elementos.
 * - Guarda la preferencia en sessionStorage cada vez que cambia.
 */
export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  // Leer sessionStorage y aplicar modo al montar
  useEffect(() => {
    const stored = sessionStorage.getItem("darkMode");
    const storedMode = stored === "true";
    setDarkMode(storedMode);
    applyDarkMode(storedMode);
  }, []);

  // Aplicar clases y guardar preferencia cuando cambia
  useEffect(() => {
    applyDarkMode(darkMode);
    sessionStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Agregar/quitar clase "dark-mode" según el estado
  const applyDarkMode = (enabled) => {
    const selectors = [
      ".contenido-total",
      ".header-top",
      ".banner",
      ".fondo-offcanvas",
      "main"
    ];

    selectors.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) el.classList.toggle("dark-mode", enabled);
    });
  };

  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <div className="form-check form-switch mt-2">
      <input
        className="form-check-input"
        type="checkbox"
        id="darkModeSwitch"
        checked={darkMode}
        onChange={handleToggle}
      />
      <label className="form-check-label text-white" htmlFor="darkModeSwitch">
        Dark
      </label>
    </div>
  );
}
