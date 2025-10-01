# Ejercicio Práctico

### TalentoLab - Proyecto Final

¡Felicitaciones nuevamente!  Ahora que has dominado la primera etapa de tu tarea en TalentoLab, el equipo ha decidido asignarte una responsabilidad más avanzada.

## Ejercicio Práctico Nº 5

**Descripción de tu tarea:**

Tu próximo objetivo será conectar la aplicación a una API que provea información sobre los productos. Deberás mostrar los datos en tiempo real, manejar estados de carga y errores, y continuar utilizando un diseño atractivo para el eCommerce.

**Requisitos del Proyecto:**

***Integración con una API:***

Usa [**MockAPI**<sup>1</sup>](#mockapi) para obtener una lista de productos desde un endpoint.  
Asegúrate de configurar correctamente la URL del recurso.  
***[Mi-API](https://68d892512144ea3f6da857f0.mockapi.io/api/v1/Productos)***

**Gestión del estado con useState:**

Almacena los productos obtenidos de la API en un estado local.  
Usa otro estado para gestionar si la aplicación está en proceso de carga.  

**Manejo de efectos secundarios con useEffect:**

Realiza la petición a la API cuando el componente principal de productos se monte.  
Gestiona posibles errores y muestra un mensaje adecuado si ocurre algún problema.  

**Requisitos del Proyecto:**

***Estado de carga y errores:***

Mientras los productos están cargando, muestra un mensaje o un spinner con "Cargando productos...".  
Si ocurre un error, muestra un mensaje como: "Error al cargar productos. Inténtalo más tarde."  

**Actualizar el diseño del eCommerce:**

Crea una sección de productos dinámicos que se cargue dede la API.  
Asegúrate de mantener el diseño atractivo y responsivo.  

***Ampliación del carrito:***

Permite agregar al carrito productos que ahora se obtendrán desde la API.  
Si el carrito está vacío, muestra el mensaje "El carrito está vacío", como en el ejercicio anterior.   

**Pautas generales del proyecto:**

***Estructura***

Continuar con el proyecto de la clase anterior, agregando nueva funcionalidad.  

**Componentes**

Mantener componentes organizados y reutilizables.

**Código limpio**

Evitar redundancias y organizar estados y efectos claramente.

**Diseño**

Usar [**Bootswatch**<sup>2</sup>](#bootswatch) o alternativa para mantener un diseño profesional.


# Glosario: 

## MockAPI
[VOLVER](#ejercicio-práctico)

1. ¿Qué es MockAPI?  
MockAPI es una herramienta online gratuita que te permite crear una API falsa (mock) para practicar o probar tus aplicaciones sin tener todavía un servidor real.  

👉 **En pocas palabras:**
Es como una API de mentira, que simula datos reales (usuarios, productos, comentarios, etc.) para que puedas hacer pruebas con fetch, axios, o cualquier librería de conexión.  

2. ¿Para qué sirve?  
Sirve para:  
Probar peticiones GET, POST, PUT, DELETE (como si fuera una API real).  
Desarrollar tu frontend mientras el backend aún no existe.  
Practicar con frameworks como React, Vue o Angular.  
Testear integraciones o practicar con JSON.  

## 🚀 Cómo usarla paso a paso

*Entrar a la web:*

👉 [https://mockapi.io](https://mockapi.io)

***Crear una cuenta (opcional, pero recomendable):***  

Te permite guardar tus proyectos.  

***Crear un nuevo proyecto (API):  ***

Clic en “Create new project”.  

***Ponle un nombre (por ejemplo: UsuariosApp).***

Se genera una URL base, algo así como:

👉 `https://668b3d4aef1234.mockapi.io`


***Agregar recursos (endpoints):***

Clic en “New resource”.

Ejemplo: users

MockAPI te crea datos falsos automáticamente, algo como:

```bash
[
  {
    "id": "1",
    "name": "Juan Pérez",
    "email": "juan@example.com"
  }
]

```

***Probar las peticiones:***  
Podés usar herramientas como:

Postman  
Thunder Client (VSCode)  
O desde tu código con fetch:

```bash
fetch("https://668b3d4aef1234.mockapi.io/users")
  .then(res => res.json())
  .then(data => console.log(data))

```

***Podés agregar, editar o borrar datos:***

GET → obtener datos  
POST → agregar  
PUT o PATCH → modificar  
DELETE → eliminar  
<hr>

## Bootswatch
[VOLVER](#ejercicio-práctico)

1. ¿Qué es Bootswatch? (Definición simple)  
Imagina que estás construyendo una casa (tu página web) y usas un kit de construcción estandarizado y muy popular llamado Bootstrap.  

Bootstrap te da todos los bloques listos para usar (botones, barras de navegación, formularios, etc.), pero todos tienen la misma apariencia: el color azul, bordes redondos, tipografía estándar, etc. Es muy funcional, pero visualmente un poco simple y repetitivo.  

Bootswatch es una colección de temas o pieles (skins) gratuitos para Bootstrap.  

Piensa en Bootswatch como una capa de pintura y estilo que se aplica a tu kit de construcción (Bootstrap). De repente, todos tus botones, barras de navegación y formularios cambian de color, forma y tipografía, dándole a tu web un look completamente diferente (más elegante, más oscuro, estilo cómic, etc.) sin que tengas que cambiar el código HTML.  

*En resumen:* Es una forma súper fácil y rápida de cambiar la apariencia visual de una página web que usa Bootstrap.  

2. ¿Para qué sirve?  

**Bootswatch tiene dos propósitos principales:**  

Ahorrar tiempo: Sirve para darle a tu página web un diseño visualmente atractivo y diferente al estándar de Bootstrap en segundos, sin necesidad de pasar horas escribiendo código CSS (el lenguaje que da estilo a la web).  

Personalización sencilla: Te permite elegir entre más de 20 estilos predefinidos (como "Darkly", "Flatly", "Superhero" o "Sketchy") para que tu proyecto se vea único.  

3. Modo de Uso (¿Cómo se aplica?)

La belleza de Bootswatch es su sencillez. Se instala reemplazando un solo archivo.  

***Paso 1:*** Tu página web ya debe estar usando Bootstrap.  
Para usar Bootswatch, primero debes tener una página web que ya use la estructura y las clases de Bootstrap. Por ejemplo, si tienes un botón, debe tener las clases de Bootstrap como `<button class="btn btn-primary">`.

***Paso 2:*** Elegir y descargar el tema de Bootswatch.  
Vas a la página oficial de Bootswatch.  
Exploras los diferentes temas y eliges el que más te guste (por ejemplo, el tema "Flatly").  
Cada tema tiene un archivo CSS (el archivo de estilos). En el tema que elijas, simplemente descargas el archivo llamado bootstrap.min.css (o similar) o copias el enlace (URL) a ese archivo.  

***Paso 3:*** Reemplazar el archivo de estilos de Bootstrap.  
Una página web que usa Bootstrap tiene un enlace a un archivo de estilos que se ve algo así en el código HTML:  

```html
<link rel="stylesheet" href="ruta/al/bootstrap.min.css">

```  

Para aplicar el tema de Bootswatch, simplemente reemplazas esa línea con el archivo (o el enlace) del tema de Bootswatch que descargaste.  

Ejemplo con un enlace CDN (el más fácil):  

Si tu página originalmente tenía el tema por defecto:  

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

```
Para cambiar al tema "Darkly" (un tema oscuro) de Bootswatch, solo cambias la URL:   

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/darkly/bootstrap.min.css">

```

¡Y eso es todo! Al recargar tu página, todos los componentes de Bootstrap (botones, menús, alertas) que ya tenías se transformarán automáticamente al nuevo estilo. No necesitas tocar ni una sola línea de tu código HTML o de tus propias clases CSS.

