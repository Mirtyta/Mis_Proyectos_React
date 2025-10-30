# PopupGlobal
Pobre “popup” va a aparecer, gritar tu mensaje y desaparecer en silencio 😆.
Bueno, acá les dejo un **componente listo para usar** que se autodestruye solo después de unos segundos y lo podés poner en cualquier parte de tu app:

```jsx
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

```

💡 **Tip:** podés cambiar `tipo` a `success`, `info`, `warning` y darle diferentes colores si querés.


Y el CSS (`PopupMensaje.css`):


```css
.popup-mensaje {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  z-index: 9999;
  animation: slideIn 0.3s ease;
}

.popup-mensaje.error {
  background: #dc3545; /* rojo */
}

.popup-mensaje.success {
  background: #28a745; /* verde */
}

@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

---

### ✅ Cómo usarlo en tu `App.jsx`:

```jsx
import PopupGlobal from "./components/PopupGlobal";

<CartProvider>
  <LoadingState cargando={cargando} error={error}>
    <div>
      <Navigation showCart={showCart} setShowCart={setShowCart} />

      {/* Esto es lo único que hace que aparezca el popup en toda la app */}
      <PopupGlobal />

      <div className="contenido-total">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage productos={productos} />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </div>

      <Cart showCart={showCart} setShowCart={setShowCart} />
      <Footer />
    </div>
  </LoadingState>
</CartProvider>
```

---

💡 **Resumen para que se entiendas fácil:**

1. `PopupGlobal` **lee el mensaje del carrito** usando `useCartContext`.
2. Cuando hay un mensaje (`popupMsg`), lo muestra usando `PopupMensaje`.
3. Después de 2.5 segundos, **se oculta solo**.
4. No necesitas tocar tus `ProductCard` ni otras partes de la app.
5. Centraliza todos los mensajes de carrito en un solo lugar.

---







