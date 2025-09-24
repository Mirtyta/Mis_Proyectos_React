# Clase 4 - React

***Consejo:***  *Recuerden que las opciones de respuestas pueden variar de lugar, enumere las opciones para que las vean, en algunos casos desarrollé las respuestas, para que sea de más utilidad éste documento, las respuestas correctas del cuestionario están en*  ***negrita***.

# Pregunta 1
***¿Qué debe contener la estructura básica de un proyecto React?***

a. *Componentes, estilos y App.jsx*

b. Solo los componentes

c. Solo el archivo App.jsx

d. Solo el archivo main.jsx

La respuesta correcta es: 

**Componentes, estilos y App.jsx**

# Pregunta 2
***¿Cuál es la ventaja de crear componentes reutilizables?***

a. No permite cambios en el diseño

b. Hace que el código sea más complejo

c. Permite modificar el código directamente

d. *Facilita el mantenimiento y reutilización del código*

La respuesta correcta es: 

**Facilita el mantenimiento y reutilización del código**

# Pregunta 3
***¿Cómo se maneja un evento de clic en React?***

a. *Usando la propiedad onClick*

b. Usando la propiedad onEvent

c. Usando la propiedad onclick

d. Usando la propiedad clickEvent

La respuesta correcta es: 

**Usando la propiedad onClick**

**Desarrollo:**

*La opcion c. también parece correcta, peeero, recuerden que, En React, todos los nombres de los event handlers (manejadores de eventos) de los elementos JSX se escriben en camelCase. En éste caso,* **onClick**

# Pregunta 4
***¿Qué tipo de eventos en React se escriben en camelCase?***

a. *Todos los respuestas*

b. onClick

c. onChange

d. onSubmit

La respuesta correcta es: 

**Todos los respuestas**

**Desarrollo:**

*¿Porqué todos? , porque todos son nombres de los event handlers (manejadores de eventos) de los elementos JSX, y estan escritos bien, con camelCase.*

# Pregunta 5
***¿Qué propiedad CSS se utiliza para eliminar el subrayado de los enlaces en el componente Nav?***

a. color: "white"

b. display: "inline"

c. *textDecoration: "none"*

d. backgroundColor: "transparent"

La respuesta correcta es: 

**textDecoration: "none"**

# Pregunta 6
***¿Cuál de los siguientes componentes se usa para mostrar una lista de imágenes?***

a. *Gallery*

b. Nav

c. Footer

d. Header

La respuesta correcta es: 

***Gallery***

# Pregunta 7
***¿Qué hook se utiliza para manejar el estado local en un componente?***

a. useEffect

b. useContext

c. *useState*

d. useReducer

La respuesta correcta es: 

**useState**

**Desarrollo:**

a. **useEffect**
Sirve para manejar efectos secundarios en componentes (cosas que pasan fuera del render normal).
Ej: traer datos de una API, suscribirse a un evento, modificar el document.title.
Se ejecuta después de que React pinta el componente.

b. **useContext**
Permite acceder a valores de un contexto sin tener que pasar props manualmente de componente en componente.
Ej: un UserContext para compartir el usuario logueado en toda la app.

c. **useState**
Crea y maneja un estado local en un componente.(*Ese es su tarea puntual*)
Te da una variable y una función para actualizarla, y cuando cambias el estado React vuelve a renderizar el componente.

d. **useReducer**
Parecido a useState, pero sirve para estados más complejos o con muchas transiciones.
Funciona con un reducer (función que recibe estado + acción y devuelve un nuevo estado).
Ej: manejar un carrito de compras con ADD_ITEM, REMOVE_ITEM, CLEAR_CART.

# Pregunta 8
***En el ejemplo de formulario, ¿qué hace la propiedad value={nombre}?***

a. Muestra un mensaje de error

b. No tiene ningún efecto

c. *Hace que el input sea controlado*

d. Cambia el tipo de input

La respuesta correcta es: 

**Hace que el input sea controlado**

**Desarrollo:**

En un formulario de React, la propiedad

```html
<input type="text" value={nombre} onChange={...} />

```

👉 value={nombre} hace que el valor del input dependa del estado nombre.

Eso significa:

El texto que aparece en el campo está siempre sincronizado con la variable nombre.

Si nombre cambia (por setNombre), el input se actualiza solo.

Si escribís en el input, el onChange se encarga de actualizar nombre.

A este patrón se le llama componente controlado, porque el input no maneja su propio estado, sino que React lo controla a través de value.

# Pregunta 9
***¿Cómo se crea un proyecto React usando Vite?***

a. npm create react@latest

b. npx create-react-app

c. *npm create vite@latest mi-proyecto-react --template react*

d. npm install vite@latest

La respuesta correcta es: 

**npm create vite@latest mi-proyecto-react --template react**

**Desarrollo:**

Si corren el comando como se especifíca arriba, les aparecerá un warning, npm no está entendiendo el argumento --template.

npm ve --template como suyo → lo interpreta como “configuración de npm” → te avisa que es desconocido.

Lo correcto es que ese argumento llegue a create-vite.

**🔧 Cómo se soluciona**

Tenés que poner -- antes de los argumentos que son para create-vite.

**Ejemplo correcto:**

```bash
npm create vite@latest mi-proyecto -- --template react

```

El primer -- le dice a npm: “todo lo que sigue no es mío, pásalo tal cual al script”.

⚠️ El error significa

Tu comando actual npm create vite@latest mi-proyecto --template react funciona por ahora, pero ya no en próximas versiones de npm.

Si seguís usándolo así, en una futura actualización te va a fallar porque npm va a dejar de permitir pasar flags desconocidos.

**Fuente:**

Ingresa a [Inicia tu primer proyecto Vite,](https://es.vite.dev/guide/#inicia-tu-primer-proyecto-vite) y abre el acordeon titulado: Utilizando create vite con opciones de línea de comandos.

# Pregunta 10
***¿Cuál es la función principal de useState?***

a. *Para manejar el estado local de un componente*

b. Para actualizar el estado global

c. Para realizar peticiones HTTP

d. Para ejecutar efectos secundarios

La respuesta correcta es: 

**Para manejar el estado local de un componente**

**Nota:** *Espero les sea de utilidad, nos vemos gente React* ***IVA*** *!!!* <img src="../Ejercicio-02/src/assets/logo.png" alt="Foto de prueba" width="30" />

*No se olviden de darle Like!* 👍, 👉*suscribirse y* 🙏*compartir!!* 🤝, 😮 *UPS!!,* 🤦‍♀️ *me equivoque de aplicación!!,* 🤷‍♀️, 😅🤣 

*Chau!*👋