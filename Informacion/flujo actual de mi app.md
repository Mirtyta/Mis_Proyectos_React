# FLUJO ACTUAL DE MI APP

Diagrama mental / esquema del flujo actual de mi app:

```
App.jsx
│
├─ BrowserRouter
│   │
│   └─ CartProvider (todo tiene acceso al carrito)
│       │
│       └─ ManejoDeCarga (cargando / error)
│           │
│           └─ <div style={{minHeight: "100vh"}}>
│               │
│               ├─ Navigation  ← usa useCart() para mostrar cantidad
│               │
│               ├─ Routes
│               │   ├─ "/"          → HomePage
│               │   ├─ "/productos" → ProductosPage (recibe productos del hook)
│               │   └─ "/contacto"  → ContactoPage
│               │
│               ├─ Cart         ← modal/offcanvas, usa useCart()
│               │
│               └─ Footer
│
└─ useFetchProductos()  ← hook llamado desde App.jsx
      │
      ├─ retorna { productos, cargando, error }
      └─ ProductosPage recibe `productos` como prop
```

**Flujo resumido:**

1. `App.jsx` inicializa **router + contexto del carrito**.
2. `useFetchProductos` trae los productos y maneja estado `cargando`/`error`.
3. `ManejoDeCarga` decide si mostrar loading, error o el contenido.
4. `Navigation`, `Routes`, `Cart` y `Footer` se renderizan dentro del layout principal.
5. `ProductosPage` recibe productos como prop, mientras que `Cart` y `Navigation` consumen datos del carrito desde el contexto.

💡 Nota: Todo está **bien desacoplado**: fetch, carrito y UI están separados, así que escalar la app o cambiar algo será mucho más fácil.

