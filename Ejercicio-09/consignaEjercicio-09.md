# Ejercicios Prácticos N° 9


En esta etapa del proyecto, el cliente nos ha pedido dos grandes mejoras:

Mejorar la experiencia de compra implementando un carrito de compras con estado global.

Asegurarnos de que solo usuarios autenticados puedan acceder a ciertas secciones del sitio.


**Descripción de tu tarea:**

Crear código que integre el manejo del estado global para el carrito de compras y la autenticación de usuarios utilizando Context API y rutas protegidas con React Router DOM.

**Parte 1:** Gestión del Carrito de Compras

Crear un Contexto para el Carrito:✅

Crear un nuevo archivo CarritoContext.js en la carpeta context.✅

Implementar un contexto con las funciones para agregar productos al carrito y vaciarlo.✅

Integrar el Contexto en la Aplicación:✅

Envolver el componente principal (App.js) con el proveedor del contexto CarritoProvider.✅


**Parte 2:** Autenticación de Usuarios✅

Crear un Contexto para la Autenticación:✅

Crear un archivo AuthContext.js en la carpeta context.✅

Implementar funciones para iniciar sesión (login) y cerrar sesión (logout) simulando el manejo de un token con localStorage.✅

Formulario de Login:✅

Crear un componente Login con un formulario básico para que los usuarios ingresen un nombre de usuario y contraseña.✅

Simular la autenticación validando las credenciales y redirigir a la página principal si son correctas.✅

Rutas Protegidas:✅

Crear un componente ProtectedRoute que permita acceder a ciertas páginas solo si el usuario está autenticado.✅

Proteger la ruta del carrito para que solo usuarios autenticados puedan verlo.✅

Todos èstos requerimientos ya fueron cubiertos en el ejercicio Nº7, remitirse a èl para verlos..