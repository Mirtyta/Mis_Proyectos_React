# Cuestionario 12 - React (Gestión de Productos)

> ***Consejo:***  *Recuerden que las opciones de respuestas pueden variar de lugar, enumere las opciones para que las vean, en algunos casos desarrollé las respuestas, para que sea de más utilidad éste documento.

---

## Pregunta 1
**¿Qué hace la función `agregarProducto` en el `ProductsContext`?**

a. El estado global se limpia completamente.  
b. El producto se envía a MockAPI automáticamente.  
c. El nuevo producto se añade al estado global de productos.  
d. El producto se elimina de la lista.  

**Respuesta correcta:** El nuevo producto se añade al estado global de productos.  
**Explicación:** `agregarProducto` actualiza el estado global dentro del contexto. No se encarga directamente de la API, solo de modificar el array de productos en memoria.

---

## Pregunta 2
**¿Qué sucede si el precio ingresado en el formulario es menor o igual a 0?**

a. El formulario se limpia automáticamente.  
b. No se muestra ningún mensaje de error.  
c. Se muestra un mensaje de error indicando que el precio debe ser mayor a 0.  
d. El formulario se envía sin problemas.  

**Respuesta correcta:** Se muestra un mensaje de error indicando que el precio debe ser mayor a 0.  
**Explicación:** La validación evita que se guarden productos con valores inválidos, protegiendo la integridad de los datos.

---

## Pregunta 3
**¿Cuál es la función de Context API en este proyecto de gestión de productos?**

a. Validar los datos del formulario.  
b. Proveer una forma de manejar el estado global de los productos y sus operaciones.  
c. Crear rutas protegidas para usuarios autenticados.  
d. Asegurar que los productos siempre estén sincronizados con la API.  

**Respuesta correcta:** Proveer una forma de manejar el estado global de los productos y sus operaciones.  
**Explicación:** Context API permite compartir el estado entre componentes sin usar props en cadena.

---

## Pregunta 4
**¿Qué sucede cuando el usuario confirma la eliminación de un producto?**

a. El producto se actualiza en la base de datos.  
b. El producto se oculta, pero no se elimina.  
c. Se realiza una solicitud DELETE a la API para eliminar el producto.  
d. Se redirige al usuario a otra página.  

**Respuesta correcta:** Se realiza una solicitud DELETE a la API para eliminar el producto.  
**Explicación:** Para eliminar un recurso en una API REST se utiliza el método HTTP DELETE.

---

## Pregunta 5
**¿Qué debe hacer un formulario controlado en React?**

a. Permitir múltiples envíos del formulario sin restricciones.  
b. Evitar la validación de los datos del formulario.  
c. Mantener los datos del formulario sincronizados con el estado del componente.  
d. Controlar únicamente los campos de texto.  

**Respuesta correcta:** Mantener los datos del formulario sincronizados con el estado del componente.  
**Explicación:** En los formularios controlados el estado es la única fuente de verdad.

---

## Pregunta 6
**¿Cuál es el propósito de la validación en el formulario de edición de productos?**

a. Validar que el nombre del producto tenga al menos 5 caracteres.  
b. Garantizar que todos los campos del formulario sean obligatorios y que el precio sea mayor a 0.  
c. Permitir que el producto se agregue aunque falten datos.  
d. Validar si el producto existe en la base de datos.  

**Respuesta correcta:** Garantizar que todos los campos del formulario sean obligatorios y que el precio sea mayor a 0.  
**Explicación:** Esto previene errores y asegura coherencia en los datos.

---

## Pregunta 7
**¿Qué debe hacer un formulario controlado en React?**

a. Permitir múltiples envíos del formulario sin restricciones.  
b. Evitar la validación de los datos del formulario.  
c. Mantener los datos del formulario sincronizados con el estado del componente.  
d. Controlar únicamente los campos de texto.  

**Respuesta correcta:** Mantener los datos del formulario sincronizados con el estado del componente.  
**Explicación:** Sin esta sincronización, el formulario no estaría bajo control de React.

---

## Pregunta 8
**¿Qué propiedad se utiliza en el formulario para vincular los campos con el estado?**

a. placeholder  
b. defaultValue  
c. initialValue  
d. value  

**Respuesta correcta:** value  
**Explicación:** `value` conecta directamente el input con el estado del componente.

---

## Pregunta 9
**¿Qué debe hacer el `ProductsContext` en la clase?**

a. Crear las rutas de la aplicación para productos.  
b. Establecer las validaciones del formulario.  
c. Conectar el formulario de agregar productos con MockAPI.  
d. Gestionar el estado global de los productos en la aplicación.  

**Respuesta correcta:** Gestionar el estado global de los productos en la aplicación.  
**Explicación:** El contexto centraliza la información para que esté disponible en toda la app.

---

## Pregunta 10
**¿Qué sucede si el formulario no pasa las validaciones en `handleSubmit`?**

a. La página se recarga automáticamente para corregir los errores.  
b. El formulario se envía y los errores se muestran en la consola.  
c. Los errores se almacenan en el estado y se muestran en pantalla junto a los campos correspondientes.  
d. El formulario se limpia y el usuario recibe un mensaje de error.  

**Respuesta correcta:** Los errores se almacenan en el estado y se muestran en pantalla junto a los campos correspondientes.  
**Explicación:** Esto permite mostrar mensajes claros sin recargar la página.

---

## Pregunta 11
**¿Qué función tiene el hook `useEffect` al obtener los productos desde MockAPI?**

a. Realizar la validación de los datos del producto.  
b. Permitir que los productos se actualicen en tiempo real.  
c. Inicializar el estado con datos de un archivo local.  
d. Ejecutar una solicitud a la API para obtener los productos al cargar el componente.  

**Respuesta correcta:** Ejecutar una solicitud a la API para obtener los productos al cargar el componente.  
**Explicación:** `useEffect` se usa para ejecutar efectos secundarios como llamadas a APIs cuando el componente se monta.

---

# Espero les sea de utilidad hasta la próxima gente ReactIVA!!! 😁
