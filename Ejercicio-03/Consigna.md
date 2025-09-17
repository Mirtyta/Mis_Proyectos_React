# Ejercicio Práctico N° 3


### Crea un componente EquipoTalentoLab:

Este componente debe recibir como prop un array de objetos, donde cada objeto represente a un miembro del equipo.

Propiedades de cada objeto: nombre, rol, e imagen.

El componente debe mostrar una tarjeta para cada miembro con su foto, nombre y rol.

Ejemplo del array:
```js
 const equipo = [
  { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://via.placeholder.com/100' },
  { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://via.placeholder.com/100' },
  { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://via.placeholder.com/100' },
  { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://via.placeholder.com/100' },
];
```

### Crea un componente TarjetaProyecto:

Este componente debe recibir las siguientes props:

Título: Nombre del proyecto.

Descripcion: Detalles del proyecto.

BotónTexto: Texto de un botón que invite a saber más.

Ejemplo de uso:

```html
<TarjetaProyecto
titulo="Plataforma de Gestión"

descripcion="Una herramienta para optimizar la gestión de equipos."

botonTexto="Explorar proyecto"
/>
```

### Interactividad:

Al hacer clic en el botón, muestra un mensaje en la consola que diga:Explorando: `[título del proyecto].`

Crea un componente GaleriaIntereses:

Este componente debe recibir un array de temas como prop y mostrar un botón para cada uno.

Interactividad: Al hacer clic en un botón, cambia su color de fondo dinámicamente.

Array de ejemplo:

const intereses = `['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];`

### ¿Cómo ensamblar todo?

En App.jsx, importa los componentes creados y úsalos para construir la página:

Muestra la lista del equipo con EquipoTalentoLab.

Destaca los proyectos utilizando TarjetaProyecto.

Agrega una galería interactiva con GaleriaIntereses.

Usa estilos para que la página sea atractiva y organizada. Considera aplicar flexbox o grid para el diseño de las secciones.

Este desafío pone a prueba tu capacidad para reutilizar componentes, manejar props y diseñar interfaces dinámicas. ¡Sorpréndenos con tu solución y demuestra por qué TechLab es tu lugar ideal! 

