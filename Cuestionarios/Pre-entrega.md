# Cuestionario de Autoevaluación - Pre entrega

**Nota:**   *No se si es obvio, pero todas las respuestas deberían ser positivas, es decir, que si lo hiciste, o que si sabes como hacerlo, al momento de entregar el proyecto, pre-entrega, debemos tener esos conocimientos básicos para ése momento. Dicho ésto... sigamos con las preguntas*

### Pregunta 1

**¿Implementaste una barra de navegación funcional?**

Con Boostrap se hace mucho más fácil porque copiamos el navbar, esta todo hecho, es responsivo y muy ordenado, modificamos los links y a otra cosa!! 🤣, les paso [link de menu Boostrap NavBar](https://react-bootstrap.netlify.app/docs/components/navbar/)

### Pregunta 2

**¿Incluiste un diseño actualizado para el eCommerce?**

Bueno, todos ya conocemos y incluimos diseños de eCommerce, supongo que todos lo tienen claro, peeero...
pueden inspirarse con, [+ de 50 plantillas de Boostrap eCommerce.](https://colorlib.com/wp/free-bootstrap-ecommerce-website-templates/) 😍!

### Pregunta 3

**¿Usaste el hook useState para manejar el estado del carrito?**

El carrito de compras necesita mantener un registro de los productos que un usuario ha seleccionado. Esta lista de productos es la información dinámica que cambia con el tiempo (al añadir, eliminar o modificar cantidades). En React, esta información dinámica es lo que llamamos **estado**.

***useState proporciona dos elementos esenciales:***

El valor actual del estado: En este caso, la lista de productos en el carrito (ej. un array de objetos).  
Una función para actualizar ese estado: Es crucial para modificar el carrito, ya que nunca se debe modificar el estado directamente. [Más info y ejemplo](../Informacion/useState-Carrito-Compras.md)

### Pregunta 4

**¿Manejaste el estado de carga y los errores al consumir la API?**

Ya todos lo practicamos cuando hicimos de de DragonBall, peero, les dejo un video que me ayudo mucho a entenderlo.. [Cómo Consumir APIs en REACT como un PROFESIONAL](https://www.youtube.com/watch?v=6u1RHUoXIPI).

### Pregunta 5

**¿Implementaste rutas protegidas para las secciones sensibles?**

 Nose si para la pre-entrega pero es necesario que aprendamos a usar la seguridad para bloquear accesos a opciones del menu sòlo para algunos ususarios con permiso.

### Pregunta 6

**¿Implementaste un evento de clic para agregar productos al carrito?**  
Visto en userState, pregunta 3.  

### Pregunta 7

**¿Creaste un componente para listar los productos disponibles?**

Lo vimos en las clases listar desde un array, la forma es la misma, podemos usar un map, esa es una de las opciones.

### Pregunta 8

**¿Usaste useEffect para integrar la aplicación con una API?**

Si les sirve les dejo un video muy completo de esto en la pregunta 4


### Pregunta 9

**¿Implementaste la interactividad en el Navbar para indicar la sección activa?**

En éste caso el menu debe indicar en qué pagina se encuentra el usuario.
Les doy un ejemplo concreto de mi page, utilize un hook useState en App.jsx.
```Javascript
// manejo de visualizacion de secciones, por defecto Productos
  //// Es como un interruptor:
  // 'productos' → muestra la lista de productos
  // 'contacto'  → muestra el formulario de contacto
  const [currentSection, setCurrentSection] = useState('productos')

```
Luego en el nav la cargo

```Javascript
export default function Navigation({ 
  currentSection, // otras...
```

Luego en el link
```Javascript
<Nav.Link
      // el el onClick actualizamos la vista
      onClick={() => setCurrentSection('productos')}
      // Prop 'active' para destacar la sección actual (estilo nativo de Nav.Link)
      active={currentSection === 'productos'}
      className="text-uppercase mx-2" // Clases de estilo para el link
    >
      📦 Productos
</Nav.Link>
```

Y listo!! (esto es con bootstrap)


### Pregunta 10

**¿Implementaste rutas dinámicas para los detalles de los productos?**

Para esto debemos definir un componente para que muestre el producto, al hacer click en la imagen o algun boton de detalle producto, lo que va a hacer a travez de router mostrar el detalle completo del producto, usando rutas dinamicas, ya que toma el id del producto y muestra el detalle del producto por id, si encuentro un video sobre esto se los paso despues, suerte con todo y adelante gente siempre pueden preguntarme, no me molesta al contrario me encanta ser útil, tengo alma de maestra... cariños Mirty
