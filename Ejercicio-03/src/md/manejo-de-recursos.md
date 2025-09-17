# 📂 Manejo de Recursos en React

El manejo de archivos estáticos (imágenes, fuentes, videos) es un pilar importante. Entender dónde guardar cada archivo y cómo llamarlo es clave para evitar errores.

## Carpeta `src/assets`

Esta carpeta es ideal para todos los recursos que son parte de la "lógica" de tu aplicación. Si necesitas **importar una imagen desde un componente JSX**, esta es la mejor opción.

-   **Importación en JSX**: Los "bundlers" como Webpack o Vite procesan estas importaciones.
    -   **Ventaja:** Optimización automática (compresión, nombres de archivo únicos), lo que mejora el rendimiento.

## Carpeta `public`

Esta carpeta es para archivos que se servirán **tal cual** sin ser procesados por el "bundler".

-   **Uso principal**: Para archivos que se referencian desde el HTML (`index.html`) o desde archivos CSS.
-   **Acceso**: Desde el código, se acceden usando una ruta que comienza desde la raíz del servidor (`/`).

**Ejemplo de acceso a un recurso:**

Si tienes una imagen en `/public/img/logo.svg`, puedes acceder a ella en cualquier parte de tu CSS o HTML usando la ruta `/img/logo.svg`.

```css
/* Acceso desde CSS */
.header-logo {
  background-image: url('/img/logo.svg');
}

```
## Mi experiencia: Un resumen

Aprendí que el lugar donde pongo un archivo no es aleatorio. Si el recurso es una parte integral de un componente (por ejemplo, una imagen de producto), lo guardo en src y lo importo. Si es un recurso global (por ejemplo, el favicon, o una imagen de fondo para un estilo global), va a la carpeta public para un acceso directo.

Esta organización me ayudó a tener un proyecto más limpio y a resolver mis problemas con las imágenes.