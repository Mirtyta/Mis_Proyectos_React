# 📘 Documentación del Proyecto -- ZapaShop

## 🏷️ Nombre del Proyecto

**ZapaShop -- Tienda Online de Zapatillas, Gorras y Accesorios**

------------------------------------------------------------------------

## 🧩 Descripción General

ZapaShop es una aplicación web desarrollada en React que simula una
tienda online completa.\
Incluye catálogo, búsqueda avanzada, carrito de compras, login, panel de
administración con CRUD, formulario de contacto, perfil de usuario, modo
oscuro y manejo centralizado del estado mediante múltiples contextos.

------------------------------------------------------------------------

## 🎯 Objetivo del Proyecto

Crear una tienda funcional con experiencia completa de usuario:
navegación, búsqueda, detalle de producto, carrito, checkout, login y
administración.\
Todo usando React + Context API.

------------------------------------------------------------------------

## 🚀 Tecnologías Utilizadas

### Frontend

-   React 19
-   React Router DOM 7.9
-   React Bootstrap 2.10
-   Bootstrap 5.3
-   Bootswatch (tema Flatly)
-   Bootstrap Icons
-   SweetAlert2
-   CSS personalizado

### Backend / Datos

-   MockAPI\
    URL: https://691c85e03aaeed735c9130ef.mockapi.io/Product

------------------------------------------------------------------------

## 🏗️ Arquitectura del Proyecto

-   Layout general: Header, Navbar, Footer\
-   Páginas: Inicio, Acerca, Tienda, Contacto, Carrito, Detalle de
    Producto, Login, Perfil, Administración\
-   Contextos: Productos, Carrito, Theme, Loading\
-   Componentes reutilizables: Cards, Banner, Buscador, Botones, Modal,
    Switch Dark/Light

------------------------------------------------------------------------

## ⭐ Funcionalidades Principales

### Búsqueda de Productos

Búsqueda por nombre, categoría y tags con resultados interactivos.

### Tienda y Detalle de Producto

Cards con imagen, descuentos, selección de color y talle, validaciones
con SweetAlert2.

### Carrito de Compras

Tabla de productos, resumen de compra, envío gratis por cupón y checkout
con persistencia en localStorage.

### Login y Perfil de Usuario

Sistema visual de login con animaciones, perfil con datos y última
compra.

### Administración (CRUD)

Gestión completa de productos con MockAPI y actualización en tiempo real
mediante Context.

### Modo Dark / Light

Switch que cambia toda la estética de la aplicación usando ThemeContext.

### Contacto

Formulario con modal de confirmación.

------------------------------------------------------------------------

## 🧠 Contextos Implementados

-   ProductsContext
-   CartContext
-   ThemeContext
-   LoadingContext

------------------------------------------------------------------------

## 📝 Conclusión

ZapaShop es una aplicación completa que integra múltiples conceptos
avanzados de React en un solo proyecto, demostrando arquitectura,
consumo de APIs, manejo de estado global y experiencia de usuario
moderna.

------------------------------------------------------------------------

## 🗂️ Estructura del Proyecto

```
📦 zapashop

├── .gitignore # Archivos y carpetas excluidos de Git
├── eslint.config.js # Configuración de ESLint
├── index.html # HTML base de la app (Vite)
├── package-lock.json # Lock de dependencias
├── package.json # Dependencias y scripts del proyecto
├── README.md # Documentación principal
├── vite.config.js # Configuración de Vite
│
└── src/ # Código fuente principal
├── App.css # Estilos globales de la app
├── App.jsx # Componente raíz
├── main.jsx # Punto de entrada de React
│
├── assets/ # Imágenes y recursos gráficos
│    ├── asombro.png
│    ├── en-construccion.png
│    ├── esfuerzo.png
│    ├── favicon1.png
│    ├── Iddle.png
│    ├── iddle1.png
│    ├── imagenpromo.png
│    ├── inicios.png
│    ├── logo.png
│    ├── logo1.png
│    ├── marca.png
│    ├── marca1.png
│    ├── parallax.png
│    ├── password.png
│    ├── user.png
│    └── zapashop.png
│
├── components/ # Componentes reutilizables de la UI
│    ├── AddToCartButton.jsx # Botón para agregar productos al carrito
│    ├── Banner.css
│    ├── Banner.jsx # Banners visuales
│    ├── Boton.css
│    ├── Boton.jsx # Botón reutilizable
│    ├── ColorSizeSelector.css
│    ├── ColorSizeSelector.jsx # Selector de color y talle
│    ├── Footer.jsx # Pie de página
│    ├── FormProduct.jsx # Formulario de alta/edición en admin
│    ├── HeaderTop.css
│    ├── HeaderTop.jsx # Header superior con buscador
│    ├── LoadingState.css
│    ├── LoadingState.jsx # Spinner y manejo de estados de carga
│    ├── ModeSwitch.css
│    ├── ModeSwitch.jsx # Switch Dark / Light
│    ├── Nav.css
│    ├── Nav.jsx # Menú de navegación
│    ├── ProductCard.css
│    ├── ProductCard.jsx # Tarjeta de producto
│    ├── ProductDetails.css
│    ├── ProductDetails.jsx # Vista detalle de producto
│    ├── ProtectedRoute.jsx # Protección de rutas por rol/login
│    ├── Rating.jsx # Sistema de puntuación
│    └── SearchResultsList.jsx # Lista de resultados de búsqueda
│
├── context/ # Contextos globales (estado compartido)
│    ├── CartContext.js # Lógica base del carrito
│    ├── CartProvider.jsx # Provider del carrito
│    ├── ProductsContext.jsx # Contexto de productos + API
│    └── ThemeContext.jsx # Contexto del modo Dark/Light
│
├── hooks/ # Custom Hooks
│    ├── useCartContext.jsx # Acceso al contexto del carrito
│    ├── useCart.jsx # Lógica de manejo del carrito
│    └── useFetchProducts.jsx # Fetch completo a MockAPI (CRUD)
│
├── pages/ # Páginas principales de la app
│    ├── AboutPage.jsx # Página "Acerca de"
│    ├── AdminPage.jsx # Panel de Administración
│    ├── CartPage.css
│    ├── CartPage.jsx # Página del carrito
│    ├── CheckoutPage.jsx # Página de checkout
│    ├── ContactPage.jsx # Página de contacto
│    ├── HomePage.css
│    ├── HomePage.jsx # Página de inicio
│    ├── LoginPage.css
│    ├── LoginPage.jsx # Página de login animada
│    ├── ProductsPage.jsx # Página principal de la tienda
│    ├── ProfilePage.jsx # Perfil de usuario
│    └── SearchResultsPage.jsx # Resultados de búsqueda
│
└── utils/ # Funciones utilitarias
└── calculos.js # Funciones de cálculo (totales, impuestos, etc.)
```

*Los archivos css, son archivos de css personalizados, por eso llevan el mismo nombre del componente, asi es mas fácil de ubicar y modificar; A veces son cosas pequeñas, pero éste sistema me permite ubicar correctamente los estilos, para los que no tienen css, utilice puro Bootstrap.. 🥰

---

### Éste es casi el último documento que les estaré presentando, espero todos mis aportes les hayan sido de utilidad, desde mi modesta aportación, muchas gracias Gente REACTiva!!!! 🥰

Y muchas Gracias Profesor por su paciencia y aportes, muy buenas clases y Ayuda, dedicado a:

🙋🏻‍♂️Instructor: Nicolás Fernández, nicolas.fernandez4@bue.edu.ar

🙋🏻‍♀️Tutor: Ezequiel Mondino, ezequiel.mondino@bue.edu.ar



