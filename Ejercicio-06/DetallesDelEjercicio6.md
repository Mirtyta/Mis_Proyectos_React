# 🛍️ Proyecto eCommerce – Ejercicio 6 (TalentoLab)

En esta etapa del proyecto se implementó la navegación completa del sitio utilizando React Router, permitiendo acceder de forma fluida a las distintas secciones del eCommerce: Home, About, Tienda, Contacto, Carrito y Login.

El header incluye la marca del sitio, un campo de búsqueda (muy pronto funcional) y un badge que muestra en tiempo real la cantidad de productos agregados al carrito.   

El carrito de compras muestra los productos seleccionados en una tabla que detalla: nombre, imagen, color, talle, cantidad, precio y un botón para eliminar ítems.  
A la derecha se presenta un resumen de compra con total, descuentos e impuestos, además de un campo para ingresar cupones de descuento que eliminan el costo de envío.
Debajo, los botones “Vacia carrito” y “Ir a Pagar” preparan la navegación futura hacia el login y el flujo de compra final.

La tienda muestra los productos en un layout limpio, destacando uno de ellos como “producto estrella”.
Cada tarjeta cuenta con dos acciones:  
👁️ Ver detalle — redirige a la vista individual del producto, donde también puede añadirse al carrito.  
👜 Agregar al carrito — permite hacerlo directamente desde el listado.

El sitio incluye además páginas informativas (About y Contacto), y un switch para modo oscuro, ya integrado en la interfaz (actualmente en desarrollo).  
También se implementan estados de carga y error al obtener los productos, mostrando mensajes visuales adecuados para mejorar la usabilidad.  

El proyecto mantiene una estructura modular y reutilizable, con componentes bien organizados y enfocados en la experiencia de usuario.

# 🧭 Próximos pasos

1. **💬 Sistema de notificaciones / mensajes al usuario**  
Implementar un manejador visual para avisos como “producto agregado”, “error al cargar”, o “cupón aplicado”. Se puede usar un componente tipo Toast (de React o hecho a medida) con estilos adaptables al modo oscuro/claro.
O usar una librería como react-hot-toast o react-toastify.

2. **🌓 Completar el switch de modo oscuro/claro**  
Conectar el botón del Navbar al CSS general para que cambie las variables de color globales y mantenga la preferencia en localStorage.

3. **🔍 Completar el Buscador de productos**  
Completar el buscador y lisdato de productos encontrados pudiendo agregar al carrito o ver detalles desde el mismo, sin tener que navegar a los diferentes menus.

4. **🔑 Funcionalidad de login real**
Crear el sistema de autenticación o conectar con una API.
➜ En esta etapa se puede activar la lógica de “comprar” que redirige al formulario de pago solo si el usuario está logueado.

5. **💳 API de compras y pagos**  
Diseñar los endpoints para procesar compras, aplicar cupones, y registrar pedidos. Idealmente modular, para poder reutilizarlo si después hacés una app móvil.

6. **📦 Mejorar la gestión del carrito**  
Validar stock, precios y descuentos desde la API antes de confirmar la compra.
poder modificar productos de la API, desde un usuario Admin, junto con login.

7. **🧠 Optimizar la búsqueda**   
Mejorar el buscador para que filtre productos en tiempo real o con sugerencias, y conectarlo a la base de datos real más adelante.

8. **🧩 Animaciones y feedback visual**  
Añadir pequeñas transiciones, loaders o efectos visuales para mejorar la experiencia (por ejemplo, al agregar productos o cambiar entre páginas).

