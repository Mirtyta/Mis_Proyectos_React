# 🐛 Errores y Soluciones

El camino de aprendizaje en React está lleno de errores. Aquí documento algunos de los que me topé y cómo los resolví, para que sirvan de guía.

## Problema 1: Dificultad para instalar Swiper

Al principio, la instalación y la importación de Swiper me causaron muchos errores.

**Error común:** No importar correctamente los módulos y los estilos de Swiper.

**Solución:** La clave fue seguir la documentación al pie de la letra y asegurarme de importar todos los elementos necesarios.

### Correcta importación de Swiper en Recursos.jsx

```javascript
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

```

### Importar los estilos de Swiper

```javascript
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

```

## Problema 2: Pantalla en blanco por la prop key

Intenté reutilizar un componente Boton.jsx dentro de una lista generada con map. Usé el index como prop, lo cual no es la práctica correcta y genera una advertencia en la consola, que en algunos casos puede provocar una pantalla en blanco.

**Error:**

```JavaScript
// MAL: Usar el 'index' como prop
{lista.map((item, index) => (
  <Boton key={index} data={item} />
))}

```

**Solución:** Descubrí que cada elemento en una lista debe tener una key que sea única y estable. Al usar index como key, React no puede optimizar bien las actualizaciones. Lo mejor es usar un identificador único, como el id del objeto si es que existe. Si no hay, una combinación de propiedades puede funcionar.

## Problema 3: Rutas de imágenes incorrectas

Me confundí al tratar de mostrar imágenes en mi proyecto. Algunas aparecían, otras no.

***La clave:*** La forma en que accedes a los archivos depende de dónde y cómo los llames.

**Desde un archivo JavaScript/JSX:** Si una imagen está en la carpeta src, debes importarla como si fuera un módulo. Esto es porque Webpack o Vite la procesarán.

```JavaScript
import miImagen from './assets/img/imagen.jpg';

```

**Uso en el componente:**
```JavaScript
<img src={miImagen} alt="Descripción" />

```

**Desde un archivo CSS:** Si llamas a la imagen desde una hoja de estilos (usando url()), la ruta debe ser relativa al archivo CSS o, si la imagen está en la carpeta public, la ruta debe ser relativa a la raíz del proyecto.

```CSS
.mi-clase {
  background-image: url('/img/imagen.jpg'); /* La imagen debe estar en public/img/ */
}

```