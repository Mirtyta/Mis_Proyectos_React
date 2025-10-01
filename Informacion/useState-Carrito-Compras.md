# Uso de useState para el estado del carrito

El useState hook en React es fundamental para gestionar el estado de cualquier 
componente funcional, y su uso para el estado de un carrito de compras es un caso 
de uso muy común e importante. 🛒  
*Aquí tienes una explicación concisa y un ejemplo de cómo se usaría:*  

**¿Por qué useState para un Carrito?**  
El carrito de compras necesita mantener un registro de los productos que un usuario ha seleccionado. Esta lista de productos es la información dinámica que cambia con el tiempo (al añadir, eliminar o modificar cantidades). En React, esta información dinámica es lo que llamamos estado.  

*useState proporciona dos elementos esenciales:*  
El valor actual del estado: En este caso, la lista de productos en el carrito (ej. un array de objetos).  
Una función para actualizar ese estado: Es crucial para modificar el carrito, ya que nunca se debe modificar el estado directamente.  

**Implementación Básica de useState**  

Para un carrito, el estado inicial será típicamente un array vacío ([]) porque al principio no hay productos.  

```JavaScript
import React, { useState } from 'react';

function CarritoDeCompras() {
    // 1. Inicialización del estado del carrito
    const [carrito, setCarrito] = useState([]);

    // 2. Función para añadir un producto
    const agregarProducto = (producto) => {
        // Creamos una copia del array actual y añadimos el nuevo producto
        // ¡Esto es clave para no mutar el estado directamente!
        setCarrito([...carrito, producto]);
    };

    // 3. Función para eliminar un producto (Ejemplo simple por ID)
    const eliminarProducto = (idProducto) => {
        const nuevoCarrito = carrito.filter(item => item.id !== idProducto);
        setCarrito(nuevoCarrito);
    };

    // Estructura de datos típica para un producto:
    const productoEjemplo = { id: 101, nombre: "Laptop", precio: 1200 };

    return (
        <div>
            <h1>Mi Carrito ({carrito.length} artículos)</h1>

            {/* Botón para demostrar la adición */}
            <button onClick={() => agregarProducto(productoEjemplo)}>
                Añadir Laptop al Carrito
            </button>

            <ul>
                {carrito.map((item, index) => (
                    <li key={item.id + '-' + index}>
                        {item.nombre} - ${item.precio}
                        <button onClick={() => eliminarProducto(item.id)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>

            <p>
                {/* Lógica para calcular el total, que depende del estado 'carrito' */}
                Total: $
                {carrito.reduce((acc, item) => acc + item.precio, 0)}
            </p>
        </div>
    );
}

export default CarritoDeCompras;

```

**Consideraciones Clave**
***Inmutabilidad:*** Cuando actualices el carrito (como en agregarProducto o eliminarProducto), siempre debes pasar un nuevo array a setCarrito. Usar el operador spread (...) o métodos como map, filter, y slice es la forma correcta de garantizar la inmutabilidad y asegurar que React detecte el cambio y vuelva a renderizar el componente.  

***Estado de Objetos:*** Para carritos más complejos (donde necesitas manejar la cantidad de cada artículo), el estado a menudo se gestiona como un array de objetos que incluyen el producto y la cantidad, lo que requiere lógica de actualización un poco más elaborada (ej. buscar el producto en el array y, si existe, incrementar su cantidad).
