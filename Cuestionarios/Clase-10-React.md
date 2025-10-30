# Clase 10 - React

***Consejo:***  *Recuerden que las opciones de respuestas pueden variar de lugar, enumere las opciones para que las vean, en algunos casos desarrollé las respuestas, para que sea de más utilidad éste documento, las respuestas correctas del cuestionario están en*  ***negrita***.

# Pregunta 1
***¿Qué pasa si el formulario intenta enviar datos inválidos?***

*a. El evento onSubmit no se ejecuta y se muestra un mensaje de error al usuario.*  
b. La API devuelve un error y el formulario se reinicia automáticamente.  
c. Los datos se envían igualmente a la API, pero con valores por defecto.  
d. React bloquea automáticamente el envío de los datos sin necesidad de código adicional.  

Retroalimentación:  
👉 En los formularios controlados, si usás validación (por ejemplo, required, pattern o validaciones personalizadas en React), el navegador o tu propio código impiden que se envíe el formulario hasta que los datos sean válidos.

La respuesta correcta es: **El evento onSubmit no se ejecuta y se muestra un mensaje de error al usuario.**

# Pregunta 2
***¿Cómo puedes asegurarte de que los datos del formulario sean válidos antes de enviarlos a MockAPI?***

*a. Creando una función de validación que chequea los datos antes de llamar a la API.*  
b. Usando el atributo defaultValue en los campos del formulario.  
c. Configurando la validación directamente en MockAPI.  
d. Usando un hook personalizado que implemente validaciones automáticas.  

Retroalimentación:  
👉 Antes de hacer el fetch o axios.post, se valida que los campos tengan los valores correctos (por ejemplo, que no estén vacíos o tengan el formato esperado). Si algo está mal, se muestra un mensaje y no se envían los datos.

La respuesta correcta es: ***Creando una función de validación que chequea los datos antes de llamar a la API.***

# Pregunta 3
***¿Qué es Context API en React?***

*a. Una API que permite manejar estados globales en una aplicación React.*  
b. Una herramienta para crear rutas protegidas en la aplicación.  
c. Una forma de manejar estilos globales.  
d. Un componente especial de React Router DOM.  

Retroalimentación:  
👉 El Context API sirve para compartir datos (como el usuario logueado, el tema, o el carrito) entre componentes sin tener que pasarlos por props manualmente.

La respuesta correcta es: ***Una API que permite manejar estados globales en una aplicación React.***

# Pregunta 4
***¿Cuál es el propósito de un proveedor de contexto (`<Provider>`) en Context API?***

*a. Compartir datos entre componentes sin necesidad de pasar props.*   
b. Proteger rutas dentro de la aplicación.  
c. Validar formularios dinámicamente.  
d. Crear nuevos componentes.  

Retroalimentación:  
👉 El `<Provider>` es el componente que “envuelve” a otros y les da acceso al contexto, permitiendo que compartan información sin usar props.

La respuesta correcta es: ***Compartir datos entre componentes sin necesidad de pasar props.***

# Pregunta 5
***¿Cuál es el propósito de MockAPI en las clases?***

a. Proveer herramientas para manejar estados locales.  
b. Crear estilos para la aplicación.  
c. Implementar rutas protegidas.  
*d. Simular un backend real para pruebas y desarrollo.*  

Retroalimentación:  
👉 MockAPI se usa para practicar cómo conectar tu app con una API sin necesitar un servidor real — podés hacer peticiones GET, POST, PUT, DELETE como si fuera un backend real.

La respuesta correcta es: ***Simular un backend real para pruebas y desarrollo.***

# Pregunta 6
***¿Qué hace la función setCarrito`([...carrito, producto])`en Context API?***

*a. Agrega un producto al carrito actualizando el estado del contexto.*   
b. Limpia el estado del carrito.  
c. Borra un producto específico del carrito.  
d. Reemplaza el contexto del carrito por un nuevo producto.  

Retroalimentación:  
👉 Lo que hace setCarrito`([...carrito, producto])` es crear un nuevo array copiando los productos que ya estaban en el carrito (...carrito) y agregando el nuevo (producto).

La respuesta correcta es: ***Agrega un producto al carrito actualizando el estado del contexto.***

# Pregunta 7
***¿Cómo se validan los datos ingresados en un formulario de React?***

*a. Verificando los datos ingresados con una función que chequea su validez antes de enviarlos.*  
b. Bloqueando el evento onSubmit del formulario.  
c. Configurando una validación automática en el componente `<form>`.  
d. Usando únicamente el atributo required en los campos del formulario.  

Retroalimentación:  
👉 En React, normalmente se hace una función que valida los campos (por ejemplo, que no estén vacíos o que el email tenga formato válido) antes de ejecutar el onSubmit.

La respuesta correcta es: ***Verificando los datos ingresados con una función que chequea su validez antes de enviarlos.***
# Pregunta 8
***¿Qué método HTTP se utiliza para enviar datos de un formulario a una API?***

*a. POST*  
b. DELETE  
c. PUT   
d. GET   

Retroalimentación:  
POST👉 El método POST se usa para enviar o crear nuevos datos en una API, como cuando mandás la info de un formulario para guardarla en el servidor.   
GET → solo solicita datos del servidor.  
PUT → se usa para actualizar datos existentes.  
DELETE → se usa para borrar datos.  

La respuesta correcta es: ***POST***

# Pregunta 9
***¿Qué hook se utiliza para acceder a un contexto en React?***

*a. useContext*  
b. useEffect  
c. useState  
d. useRef  

Retroalimentación:  
👉 Se usa useContext para acceder al valor que provee un Context sin tener que pasar props entre componentes.  
useEffect → Ejecuta código después de renderizar o cuando cambian dependencias.  
useState → Crea y maneja estado local en un componente.  
useRef → Mantiene referencias a elementos o valores que no provocan re-render.  

La respuesta correcta es: ***useContext***

# Pregunta 10

***¿Qué se debe hacer para manejar el estado de un formulario en React?***

*a. Almacenar los valores de los campos en un estado local y actualizarlos con onChange.*  
b. Usar variables globales para almacenar los datos del formulario.  
c. Usar el hook useEffect para controlar los cambios en el formulario.  
d. Asignar los valores del formulario directamente al DOM.  

Retroalimentación:  
👉 En React, los formularios controlados se manejan guardando cada campo en el estado (useState) y actualizándolo con onChange.

La respuesta correcta es: ***Almacenar los valores de los campos en un estado local y actualizarlos con onChange.***

# Espero les sea de utilidad hasta la próxima gente ReactIVA!!! 😁
