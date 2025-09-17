# 🗺️ Arquitectura de la Aplicación

## Estructura principal en `App.jsx`

Al inicio del curso, la consigna era simple: importar componentes y armar la página. Sin embargo, para tener un proyecto más organizado y escalable, decidí ir un paso más allá e implementar un sistema de **rutas**.

Para lograrlo, instalé la librería **`react-router-dom`**. Esto me permite que cada sección de mi sitio sea una "página" diferente, con su propia URL.

La estructura de mi `App.jsx` quedó así:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import PaginaPrincipal from './rutas/PaginaPrincipal';
import Recursos from './rutas/Recursos';

function App() {
  return (
    <Router>
      {/* El menú se mantiene siempre visible fuera de las rutas */}
      <Menu />
      {/* Las rutas se gestionan con <Routes> y <Route> */}
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
    </Router>
  );
}

export default App;
```
**¿Por qué usar rutas?**

1. Organización: Separa la lógica de cada página, haciendo el código más fácil de leer.

2. Navegación: Permite que el usuario se mueva entre secciones sin recargar la página completa, lo que es una característica clave de las Aplicaciones de Una Sola Página (SPA).

3. URL Legibles: Cada página tiene su propia URL, lo que es bueno para compartir y para el SEO (posicionamiento en buscadores).

## Estructura de la página principal
Dentro de la ruta de la página principal (/), tengo la estructura básica del sitio. Esta separación me permite reutilizar componentes como Header y Footer en múltiples páginas si lo necesito.

```JavaScript
return (
  <>
    <Header />
    <Ejercicio />
    <Equipo />
    <SeccionProyectos />
    <SeccionIntereses />
    <Footer />
  </>
);
```