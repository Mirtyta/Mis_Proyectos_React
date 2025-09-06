// Importa la librería de React, que es necesaria para crear y manejar componentes.
import React from "react";

// Define un componente funcional llamado "ListaUsuarios".
// Los componentes son como bloques de construcción para la interfaz de usuario.
const ListaUsuarios = () => {

    // Define un array (una lista) con nombres de usuarios.
    // Esta es la fuente de datos que se usará para generar la lista.
    const usuarios = ['Nicolas', 'Eze', 'Maria', 'Facundo','Mirta 🤣'];

    // El componente retorna (devuelve) la estructura JSX que se renderizará en la pantalla.
    return (
        // Se crea una lista desordenada de HTML (unordered list).
        <ul className="lista-usuarios">
            {/* El método .map() recorre el array 'usuarios'.
              Por cada elemento ('usuario') en el array, crea un nuevo elemento <li>.
              Este es un método fundamental en React para renderizar listas dinámicas.
            */}
            {usuarios.map((usuario) => (
                // Se crea un elemento de lista (list item).
                <li
                    // La propiedad 'key' es un identificador único que React necesita
                    // para cada elemento en una lista. Usar el nombre del usuario
                    // como 'key' es una práctica común si son únicos.
                    key={usuario}
                >
                    {/* El contenido de cada <li> es el nombre del usuario actual del array. */}
                    {usuario}
                </li>
            ))}
        </ul>
    );
};


// Exporta el componente 'ListaUsuarios' como la exportación por defecto de este archivo.
// Esto permite que otros archivos, como App.js, puedan importarlo y usarlo.
export default ListaUsuarios;