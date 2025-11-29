
# 🔹 Igualar altura de columnas en Bootstrap / React
 
### Estructura clave para columnas de igual altura y orden responsive
```Bash

<Row className="g-4 px-2 px-md-5 d-flex align-items-stretch">

  {/* 🧩 Columna izquierda: Tabla de productos */}
  <Col xs={12} md={7} className="order-2 order-md-1 d-flex flex-column">
    <div className="p-2 p-md-4 rounded-4 flex-grow-1 h-100" id={contextTheme}>
      {/* Contenido: tabla de productos */}
    </div>
  </Col>

  {/* 💵 Columna derecha: Resumen */}
  <Col xs={12} md={5} className="order-1 order-md-2 d-flex flex-column">
    <div className="p-2 p-md-4 rounded-4 flex-grow-1 h-100" id={contextTheme}>
      {/* Contenido: resumen del pedido */}
    </div>
  </Col>
</Row>
```

## 🔹 Explicación de cada parte

align-items-stretch en la Row

Fuerza que todas las columnas (Col) tengan la misma altura, aunque su contenido sea diferente.

Esto permite que los fondos de los div internos se vean iguales.

d-flex flex-column en cada Col

Convierte la columna en un contenedor flex vertical, para poder controlar cómo crecen los hijos.

flex-grow-1 + h-100 en el div interno

flex-grow-1 → hace que el div crezca para llenar toda la altura de la columna, igualando los fondos entre columnas.

h-100 → asegura que el div ocupe 100% de la altura disponible de la columna, importante para que flex-grow-1 funcione correctamente.

order-1 / order-2 en Col

En pantallas pequeñas (xs):

order-1 → el resumen aparece primero.

order-2 → la tabla aparece debajo.

En pantallas medianas (md) y grandes:

order-md-1 → la tabla queda a la izquierda.

order-md-2 → el resumen queda a la derecha.

*** ✅ Resultado:***

Fondos de columnas iguales aunque la tabla tenga pocos productos.

Resumen se adapta si la tabla es más larga.

Orden responsive correcto: mobile primero resumen, desktop tabla izquierda / resumen derecha.

### Espero les sirva!!