APP CON MAS RESPONSABILIDADES DE LAS QUE LE CORRESPONDE

### 🧩 1. Separar la lógica del carrito

Toda la parte de:

* `cart`, `setCart`
* funciones `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
* `cartCount`

Debería ir a un **contexto** aparte (por ejemplo `CartContext.jsx`), así cualquier componente puede acceder al carrito sin que `App.jsx` tenga que pasarlo por props.

👉 Responsabilidad: manejar el estado global del carrito.

---

### 🧠 2. Separar el fetch de productos

Tu `useFetchProductos` está bien, pero `App.jsx` no debería manejar directamente el `loading` ni el `error`.
Podés crear un componente intermedio tipo `CartProvider` o dejar que **cada página que necesite productos lo maneje** (por ejemplo, `ProductosPage`).

👉 Responsabilidad: que cada vista controle su propio contenido y carga.

---

### 🧭 3. Mantener `App.jsx` solo como enrutador

Debería quedar **ligero**, con cosas como:

```jsx
<BrowserRouter>
  <Navigation />
  <Routes>...</Routes>
  <Cart /> 
  <Footer />
</BrowserRouter>
```

Nada más.
Toda la lógica de estados, contextos o efectos debería venir de otros componentes o providers.

👉 Responsabilidad: definir la estructura y rutas de la aplicación.

---

### 💬 5. Documentar (resumen para mi)

Podrías dejarlo así:

* `App.jsx`: solo router.
* `CartContext.jsx`: maneja carrito.
* `useFetchProductos.jsx`: hook para productos (ya lo tenés).
* `pages/`: cada página maneja su propio contenido.

---

lo próximo paso sería **cómo crear el CartContext paso a paso** y cómo conectarlo en `App.jsx` (con comentarios explicativos).

---

## 🧩 Qué voy a hacer

1. Crear un nuevo archivo llamado **`CartContext.jsx`** dentro de tu carpeta `src/context/` (si no existe, la creamos).
2. Mover ahí **toda la lógica del carrito** que tenías en `App.jsx`:

   * `cart`, `setCart`
   * funciones: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`
   * el `cartCount`
3. Después, en `App.jsx`, solo **lo usamos**, sin repetir código.

---

## 💡 Qué es un Context (explicado simple)

Un **contexto** en React es una forma de **compartir datos entre componentes** sin tener que pasarlos por props una y otra vez (prop drilling).

Por ejemplo:

* Antes: `App` le pasa `cart` a `Nav`, `Cart`, etc.
* Con Context: todos pueden acceder al carrito directamente, sin que `App` tenga que enviarlo.

Así mantenemos limpio el código y más fácil de entender.

---

## 📖 Qué contendrá el contexto:

Adentro vas a tener algo así :

* **Importaciones** de React (`createContext`, `useState`, `useContext`).
* CartContext.js → crea el contexto y maneja el estado global.  
* CartProvider.jsx → envuelve la app y provee el contexto.  
* useCartContext.jsx → hook para acceder fácil al contexto sin repetir useCart.  
* useCart.jsx → funciones auxiliares (por ejemplo, calcular totales) separadas de la lógica del contexto.  

---

## 🧠 Qué cambiará en `App.jsx`

* Vas a **eliminar** toda la parte del carrito (estados y funciones).
* Vas a **envolver** tu app con `<CartProvider>` (viene del nuevo archivo).
* Donde usabas `cart`, `addToCart`, etc., los vas a traer con `useCart()`, llamando a useCartContext.jsx.

---

## 🪄 Beneficio final

Mi `App.jsx` va a quedar **limpio y ordenado**, solo manejando las rutas.
Y si mañana quiero mostrar el carrito en otro componente nuevo, no tengo que pasar props: solo hacés `const { cart } = useCartContext()` y listo 😄.

---

