# Cuestionario – Diseño Responsivo y UX

> ***Consejo:***  *Recuerden que las opciones de respuestas pueden variar de lugar, enumere las opciones para que las vean, en algunos casos desarrollé las respuestas, para que sea de más utilidad éste documento.

---

## Pregunta 1  
**¿Cuál es la principal ventaja de implementar un diseño mobile-first en una aplicación web?**

a. Solo es beneficioso para sitios web de comercio electrónico.  
b. Aumenta la carga de la página en dispositivos de escritorio.  
c. Hace que la aplicación sea menos atractiva en pantallas grandes.  
d. Mejora la accesibilidad y usabilidad en dispositivos móviles.  

**Respuesta correcta:** Mejora la accesibilidad y usabilidad en dispositivos móviles.  

**Explicación:**  
Mobile-first significa diseñar primero para celular. Esto obliga a priorizar lo esencial (lectura, botones, navegación) y luego adaptar a pantallas más grandes, mejorando la experiencia general.

---

## Pregunta 2  
**¿Qué elemento de Bootstrap se utiliza para garantizar que el diseño sea responsivo según el tamaño de la pantalla?**

a. form-control  
b. card-body  
c. alert  
d. grid-system  

**Respuesta correcta:** grid-system  

**Explicación:**  
El sistema de grillas de Bootstrap (rows y cols) permite que los elementos se adapten según los breakpoints (`sm`, `md`, `lg`).

---

## Pregunta 3  
**¿Cómo puedes mejorar la experiencia de usuario en un formulario utilizando las mejores prácticas de UI/UX?**

a. Agregar muchos campos sin etiquetas.  
b. Incluir etiquetas claras, suficiente espaciado y botones accesibles.  
c. Usar un solo botón para todas las acciones.  
d. Colocar los botones al final de la página, sin importar el contexto.  

**Respuesta correcta:** Incluir etiquetas claras, suficiente espaciado y botones accesibles.  

**Explicación:**  
Estas prácticas reducen errores, hacen el formulario más claro y facilitan su uso para todos los usuarios.

---

## Pregunta 4  
**¿Cómo se implementa la validación de un formulario controlado en React para un campo de texto?**

a. Usando una librería externa para validaciones y no gestionando el estado.  
b. Usando el atributo required en el input sin necesidad de manejar el estado.  
c. Manejando el estado del formulario con useState, y validando los campos mediante condiciones antes de enviar el formulario.  
d. Validando el formulario directamente en el backend sin verificar los datos en el frontend.  

**Respuesta correcta:** Manejando el estado del formulario con useState, y validando los campos mediante condiciones antes de enviar el formulario.  

**Explicación:**  
En un formulario controlado el valor vive en el estado (`useState`) y la validación se hace con `if` antes de enviar. Así se evita enviar datos incorrectos al backend.

---

## Pregunta 5  
**¿Qué ventaja ofrece usar React Helmet en una aplicación React?**

a. Mejora la seguridad de la aplicación.  
b. Permite modificar las etiquetas `<title>` y `<meta>` para mejorar el SEO.  
c. Aumenta la velocidad de carga de los componentes.  
d. Hace que los estilos sean más reutilizables.  

**Respuesta correcta:** Permite modificar las etiquetas `<title>` y `<meta>` para mejorar el SEO.  

**Explicación:**  
React Helmet permite cambiar el título de la página y los metadatos dinámicamente, lo que mejora el posicionamiento en buscadores.

---

## Pregunta 6  
**¿Cuál es la principal ventaja de usar styled-components en lugar de archivos CSS tradicionales en React?**

a. Permite definir estilos dentro de los componentes, evitando conflictos de clases.  
b. Aumenta la velocidad de carga de la aplicación.  
c. Hace que el código sea menos modular y más difícil de leer.  
d. No tiene ninguna ventaja sobre el CSS tradicional.  

**Respuesta correcta:** Permite definir estilos dentro de los componentes, evitando conflictos de clases.  

**Explicación:**  
Cada componente maneja sus propios estilos sin que se mezclen con otros, haciendo el código más limpio y modular.

---

## Pregunta 7  
**¿Para qué se usa React Toastify en una aplicación React?**

a. Para mostrar notificaciones o alertas no intrusivas.  
b. Para mejorar la optimización SEO de la aplicación.  
c. Para agregar efectos de animación a los botones.  
d. Para cambiar la paleta de colores de Bootstrap.  

**Respuesta correcta:** Para mostrar notificaciones o alertas no intrusivas.  

**Explicación:**  
Se utiliza para mostrar mensajes de éxito, error o advertencia sin interrumpir la navegación del usuario.

---

## Pregunta 8  
**En el componente AllProductos, ¿cómo se gestiona la paginación para mostrar los productos por página?**

a. Dividiendo los productos en grupos mediante slice() y actualizando la página con botones de navegación.  
b. Mostrando todos los productos en una sola página.  
c. Usando setState directamente en cada botón de producto.  
d. Usando una librería externa para paginación.  

**Respuesta correcta:** Dividiendo los productos en grupos mediante slice() y actualizando la página con botones de navegación.  

**Explicación:**  
Se toma el array completo de productos, se usa `slice()` según la página actual y se cambia con botones usando estado (`setPagina`).

---

## Pregunta 9  
**¿Qué herramienta de desarrollo puedes usar para probar la adaptabilidad de tu aplicación en diferentes dispositivos?**

a. Postman  
b. React Developer Tools  
c. React Router  
d. DevTools (Modo Responsivo)  

**Respuesta correcta:** DevTools (Modo Responsivo)  

**Explicación:**  
El modo responsivo de las DevTools permite simular distintos tamaños de pantalla para probar el diseño adaptable.

---

## Pregunta 10  
**¿Cuál de las siguientes clases de Bootstrap asegura que un elemento se ajuste correctamente a distintos tamaños de pantalla?**

a. .container-fluid  
b. .col-12 col-md-6 col-lg-4  
c. .bg-primary text-white  
d. .d-flex justify-content-center  

**Respuesta correcta:** .col-12 col-md-6 col-lg-4  

**Explicación:**  
Estas clases definen cuántas columnas ocupa un elemento en móvil, tablet y desktop, logrando un diseño realmente responsivo.

---

# Espero les sea de utilidad hasta la próxima gente ReactIVA!!! 😁
