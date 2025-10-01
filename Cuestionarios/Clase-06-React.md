# Clase 6 - React

***Consejo:***  *Recuerden que las opciones de respuestas pueden variar de lugar, enumere las opciones para que las vean, en algunos casos desarrollé las respuestas, para que sea de más utilidad éste documento, las respuestas correctas del cuestionario están en*  ***negrita***.

# Pregunta 1

***¿Cuál es la principal función del hook useParams en React Router?***

a. *Permite obtener los parámetros de la URL*  
b. Permite redirigir a una ruta específica.  
c. Permite navegar entre rutas.   
d. Permite renderizar componentes condicionalmente.  

**La respuesta correcta es: Permite obtener los parámetros de la URL**

# Pregunta 2

***¿Qué hace el componente Link en React Router?***

a. Redirige a una URL cuando el componente se monta.

b. *Permite a los usuarios navegar entre rutas sin recargar la página*

c. Renderiza un componente basado en la ruta actual.

d. Abre una nueva pestaña para cada ruta.


**La respuesta correcta es: Permite a los usuarios navegar entre rutas sin recargar la página**

# Pregunta 3

***¿Por qué es importante manejar el estado de carga y los errores al integrar una API en React?***

a. No es necesario, ya que React maneja estos estados automáticamente.  
b. *Para que los usuarios puedan ver un mensaje adecuado mientras esperan los datos.*   
c. Para reducir el tamaño del código.  
d. Para evitar hacer peticiones innecesarias.  

**La respuesta correcta es: Para que los usuarios puedan ver un mensaje adecuado mientras esperan los datos.**

# Pregunta 4

***¿Cuál es la mejor práctica al manejar errores en una solicitud de API en React?***

a. Ignorar los errores si no afectan la experiencia del usuario.  
b. Redirigir a una página de error completa.  
c. Mostrar solo un mensaje genérico de error sin detalles.  
d. *Usar try/catch en combinación con async/await.*    

**La respuesta correcta es: Usar try/catch en combinación con async/await.**

# Pregunta 5

***¿Cómo manejas la carga de datos de una API en un componente de React?***

a. Usando componentDidMount en un componente de clase.  
b. Usando un fetch directamente en el JSX.  
c. *Usando el hook useEffect para realizar la solicitud y actualizar el estado*   
d. Usando setState dentro de un ciclo for.  

**La respuesta correcta es: Usando el hook useEffect para realizar la solicitud y actualizar el estado**

# Pregunta 6

***En un componente de React que usa React Router, ¿cómo rediriges a un usuario a una página de detalles de producto?***

a. Usando el componente Link con la ruta correspondiente.  
b. *Usando el hook useHistory o useNavigate para cambiar la ruta programáticamente.*  
c. No es necesario redirigir a los usuarios, ya que React Router lo hace automáticamente.  
d. Usando un button que llama a window.location.  

**La respuesta correcta es: Usando el hook useHistory o useNavigate para cambiar la ruta programáticamente.**

# Pregunta 7

***¿Qué sucede si el id de un producto no está presente en la URL para el componente de detalles del producto?***

a. El componente continuará funcionando como si no hubiera parámetros.  
b. *El componente no podrá obtener los detalles del producto y mostrará un mensaje de "Producto no encontrado".*    
c. React redirige automáticamente a la página principal.  
d. React mostrará un mensaje de error en la consola, pero no afectará al renderizado.  

**La respuesta correcta es: El componente no podrá obtener los detalles del producto y mostrará un mensaje de "Producto no encontrado".**

# Pregunta 8

***¿Qué hacer si ocurre un error al intentar obtener datos desde una API en React?***

a. *Mostrar un mensaje de error adecuado usando el estado de error.*   
b. Redirigir automáticamente a otra ruta.  
c. Ignorar el error, ya que no afecta el renderizado.  
d. Hacer una nueva petición de inmediato sin mostrar el error.  

**La respuesta correcta es: Mostrar un mensaje de error adecuado usando el estado de error.**

# Pregunta 9

***¿Cómo se puede optimizar el estado de carga en un componente que obtiene datos de una API?***

a. Establecer el estado de carga a false antes de hacer la solicitud.  
b. No es necesario manejar el estado de carga en una solicitud de API.  
c. Usar setTimeout para simular la carga de datos.  
d. *Usar un spinner o mensaje como "Cargando..." mientras los datos están siendo obtenidos.*  

**La respuesta correcta es: Usar un spinner o mensaje como "Cargando..." mientras los datos están siendo obtenidos.**

# Pregunta 10

***¿Qué se necesita para crear rutas dinámicas en React con React Router?***

a. Usar el componente Link dentro del Switch.  
b. Utilizar solo componentes de clase.  
c. *Usar el componente Route con un parámetro en la URL, como :id.*   
d. No es necesario hacer nada, las rutas son automáticas.  

**La respuesta correcta es: Usar el componente Route con un parámetro en la URL, como :id.**

# Espero les sea de utilidad hasta la próxima gente ReactIVA!!! 😁