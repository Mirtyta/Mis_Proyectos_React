Actualizaremos tu componente Boton.jsx para que:

Acepte una prop textColor para controlar el color del texto.

Mantenga la lógica de tipo para los colores de fondo predefinidos.

Combine cualquier className extra (como el de posicionamiento).

Utilice el operador rest (...otrasProps) de forma limpia.

Componente Boton.jsx Actualizado y Completo
Aquí tienes el código de tu componente Boton.jsx listo para usar, incluyendo la funcionalidad de className y la nueva prop textColor:

JavaScript

import React from "react";
import "./Boton.css"; 
```bash
/**
 * Componente Boton reutilizable.
 * * @param {string} texto - Texto visible en el botón.
 * @param {string} tipo - Clave para definir el color de fondo predefinido (Naranja, Verde, etc.).
 * @param {function} onClick - Función que se ejecuta al hacer clic.
 * @param {string} [className] - Clase CSS adicional para estilos específicos (ej. posicionamiento).
 * @param {string} [textColor] - Color de fuente específico para el texto (ej. '#000000').
 * @param {object} [...otrasProps] - Captura otras props (como id, data-*, etc.) para pasarlas al elemento <button>.
 */
const Boton = ({ 
    texto, 
    tipo, 
    onClick, 
    className, 
    textColor, // Nueva prop para controlar el color del texto
    ...otrasProps 
}) => {

  // Definimos los colores de fondo posibles según el tipo
  const coloresPorTipo = {
    Naranja: "#FF7F00", // Usando el Naranja Quemado de tu paleta
    Verde: "#28a745", 
    Azul: "#3476b8ff",
    Gris: "#6c757d",
    Marron: "#B8860B" // Usando el Tostado de tu paleta
  };

  // 1. Determina el color de fondo: usa el tipo o un gris por defecto.
  const colorFondo = coloresPorTipo[tipo] || coloresPorTipo.Gris;

  // 2. Determina el color del texto: 
  //    - Si se pasa 'textColor', úsalo.
  //    - Si no, usa el Blanco Roto (F0F0F0) por defecto para los fondos oscuros.
  const colorTextoFinal = textColor || "#f0f0f0";
  
  // 3. Combina la clase CSS base ("boton") con cualquier clase extra recibida ("btn-carrito-esquina")
  const clasesFinales = `boton ${className || ''}`;

  return (
    <button
      // Aplicamos las clases combinadas
      className={clasesFinales} 
      
      // Aplicamos los estilos dinámicos de fondo y texto
      style={{ 
        backgroundColor: colorFondo, 
        color: colorTextoFinal 
      }} 
      
      onClick={onClick}
      {...otrasProps} // Pasa todas las demás propiedades HTML
    >
      {texto} 
    </button>
  );
};

export default Boton;

```


Cómo usar la nueva prop textColor
Caso 1: Usando tu botón de carrito (texto claro sobre fondo oscuro)
Aquí el textColor por defecto (#f0f0f0) funcionará bien.

JavaScript

<Boton 
    texto="🛒" 
    tipo="Naranja" 
    onClick={handleAdd} 
    className="btn-carrito-esquina" // Aplica el posicionamiento
/> 
Caso 2: Creando un botón de color claro (necesita texto oscuro)
Si quieres un botón con el fondo de tu Blanco Roto (#F0F0F0), debes hacer el texto negro. Para esto, tendrías que definir un nuevo tipo o, más fácil, pasar el color como textColor y backgroundColor si lo manejas en línea (o crear un tipo 'Claro').

Opción simple con style (si no quieres un nuevo tipo):

JavaScript

<Boton 
    texto="Detalles" 
    tipo="Gris" // Solo para usar un tipo que exista
    textColor="#1E1E2C" // ¡CLAVE: el texto será oscuro!
    style={{ backgroundColor: '#F0F0F0' }} // Le forzamos el fondo claro en línea
/>
Con la actualización, el componente ahora es mucho más flexible y maneja el problema del contraste de color de texto automáticamente o con tu control explícito. (He mejorado esta Version, se las estare pasando en breve)