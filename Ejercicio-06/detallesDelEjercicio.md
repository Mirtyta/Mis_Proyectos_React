# Detalles técnicos del Ejercicio:

# ⚙️ Próximos pasos (Frontend)

💬 Sistema de notificaciones (toasts o alertas)

Usar una librería como react-hot-toast o react-toastify.

Mostrar mensajes al agregar/eliminar del carrito, errores de red, cupones aplicados, etc.

Integrar desde un contexto global o directamente en los componentes clave.

🌓 Modo oscuro / claro funcional

Manejar los estilos con variables CSS (--color-fondo, --color-texto, etc).

Agregar una clase .dark o .light en el <body> y cambiarla con un switch.

Guardar la preferencia en localStorage para mantener el modo elegido.

🛒 Carrito más inteligente

Mantener el carrito en localStorage (para que no se pierda al recargar).

Validar que los productos no se dupliquen: si ya existe, solo aumentar cantidad.

Agregar un pequeño mensaje tipo “Producto agregado correctamente” con el toast.

🔍 Buscador más fluido

Aplicar debounce (esperar unos ms antes de hacer fetch).

Mostrar un pequeño loader mientras busca.

Si no encuentra resultados, mostrar un mensaje amigable con opción “ver todos”.

🎨 Mejora visual y de usabilidad

Usar componentes de Bootstrap para mantener consistencia visual.

Agregar pequeñas animaciones con react-transition-group o Framer Motion.

Cuidar el contraste en modo oscuro.

🔑 Login / acceso temporal (dummy)

Aunque no se use backend real, simular un login con localStorage:

Guardar un “usuario activo”.

Mostrar en el header un “Bienvenida, `[nombre]`”.

Desbloquear botones como “Comprar” solo si está logueado.

💡 Página de estado “en construcción”

Para las secciones que aún no funcionan (por ejemplo, login o checkout), mantener la página explicativa, pero podés agregar un botón tipo “Volver a la tienda”.