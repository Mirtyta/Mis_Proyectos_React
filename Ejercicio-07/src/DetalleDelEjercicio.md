# 🧾 Ejercicio Nº7 – Rutas Dinámicas y Protegidas

En este ejercicio implementé **rutas dinámicas y protegidas** dentro del eCommerce, mejorando la navegación, la seguridad y la gestión de datos.

## 🔹 Rutas Dinámicas
Creé la ruta `/productos/:id`, utilizando el hook `useParams()` para obtener el parámetro `id` desde la URL.  
Los datos de los productos se obtienen desde una **API externa (MockAPI)**, mediante un custom hook llamado **`useFetchProducto.jsx`**, que gestiona la carga asincrónica y el estado de los productos.

## 🔹 Rutas Protegidas
Implementé rutas seguras para `/carrito` y `/admin`, validando el inicio de sesión a través de `sessionStorage`.  
Si el usuario no está autenticado, es redirigido automáticamente a `/login`.

## 🔹 Interactividad
Agregué un botón **“Iniciar Sesión”** que cambia el estado de autenticación (`isAuthenticated`) simulando el inicio y cierre de sesión.

## 🔹 Estructura y Contexto
Toda la aplicación está encapsulada dentro de un **hook de contexto de carrito**, que centraliza la gestión de los productos, las acciones del carrito y el estado global del usuario.

## 🔹 Navbar
Incluye enlaces (`Link`) para navegar fácilmente entre inicio, lista de productos, carrito y administración.

---

En conjunto, la aplicación integra navegación dinámica, seguridad básica, consumo de API externa y manejo global de estado mediante hooks personalizados, **cumpliendo y extendiendo los requisitos del ejercicio**.
