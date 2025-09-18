# Props

### 🧐 Análisis del Componente Botones

Un componente tiene props cuando recibe argumentos de su componente padre.

Definición sin Props: Un componente se define sin argumentos, lo que indica que no recibe props:

```JavaScript
const Botones = () => { 
// Los paréntesis están vacíos
    // ...
};

```

Uso de Propiedades Internas, no Externas (Props):

La lista de botones (botones).

Los estilos base (estilosBoton).

Los colores específicos (coloresBoton).

Todo esto está definido dentro del componente y no se le pasa desde afuera.

### 🤯 Confusión Común: Atributos VS Props

La posible confusión surge al ver las "propiedades" que le pasas al elemento nativo de HTML `<button>` dentro de tu componente.



| Atributo / Propiedad | Tipo	Descripción                           | 
| :--- | :--- | 
| `key={btn}` | Propiedad interna de React	Usada por React para listas.   | 
| `style={{...}} ` | Atributo/Propiedad del elemento `<button>`	Le pasa estilos CSS.   | 
| `onClick={() => ...}`| Atributo/Propiedad del elemento `<button>`	Le dice qué hacer al hacer clic. | 

Estos son atributos (o props) que le pasas a los elementos HTML nativos `(<button>)` que tu componente está renderizando, NO son props que el componente Botones recibe de su padre.

### 🧐 Análisis del Componente Boton con Props

El componente Boton en este código está diseñado para ser reutilizable y recibe datos e instrucciones desde su componente padre.

La clave está en la definición de la función, donde se reciben y desestructuran los argumentos:

```JavaScript
const Boton = ({ texto, tipo, onClick }) => {
};

```

Aquí están las tres props que este componente espera recibir:

| Propiedad (Prop)      | Tipo de dato esperado	Uso dentro del componente |
 :--- | :--- | 
| `texto	string`	      | Se muestra como el texto visible del botón `({texto})`. |
| `tipo	string`	        | Se usa para seleccionar el color de fondo dinámicamente (coloresPorTipo`[tipo]`). |
| `onClick	function`	  | Es la función que se ejecuta cuando el usuario hace clic en el botón. |

## ¿Por qué esto es mejor?

Al usar props, haces que tu componente Boton sea mucho más flexible:

1. **Reutilización:** Puedes usar este mismo componente en cualquier parte de tu aplicación (en una tarjeta de producto, en un formulario, en una alerta) sin modificar su código.

2. **Personalización:** Cada vez que lo usas, puedes cambiar su texto, su color (con tipo) y lo que hace (con onClick), simplemente pasándole props diferentes.

### Ejemplo de cómo se usaría este componente:

```JavaScript
// En el componente padre (e.g., App.js)
<Boton
    texto="Comprar Ahora" // Prop 'texto'
    tipo="superoferta"    // Prop 'tipo'
    onClick={() => console.log('Se agregó al carrito')} // Prop 'onClick'
/>

<Boton
    texto="Ver Detalles"
    tipo="recomendacion"
    onClick={() => navigate('/detalles/123')}
/>

```