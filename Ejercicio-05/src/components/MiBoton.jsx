// Archivo: Boton.jsx 
// Hacemos primero los import
import "./MiBoton.css"; 

/**
 * Componente Boton reutilizable.
 * @param {string} texto - Texto visible en el botón.
 * @param {function} onClick - Función que se ejecuta al hacer clic.
 * @param {string} [className] - Clase CSS adicional para estilos específicos (ej. posicionamiento).
 * @param {object} [...otrasProps] - Captura otras props (como id, data-*, etc.) para pasarlas al elemento <button>.
 */
const Boton = ({ 
    texto, 
    onClick, 
    className, 
    ...otrasProps 
}) => {
  
  // Combina la clase CSS base ("boton") con cualquier clase extra recibida ("btn etc.")
  const clasesFinales = className || 'boton';

  return (
    <button
      // Aplicamos las clases combinadas
      className={clasesFinales} 
      onClick={onClick}
      {...otrasProps} // Pasa todas las demás propiedades HTML
    >
      {texto} 
    </button>
  );
};

export default Boton;