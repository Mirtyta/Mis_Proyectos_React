# Ejercicio practico:

**Nuestro Profesor nos pidio hacer un Ejercicio:**

La consigna es, tomar la la api de DragonBall, proporcionada por él , [https://dragonball-api.com/api/characters](https://dragonball-api.com/api/characters) y generar tarjetas utilizando su informacion.**

## Mi Ejercicio:

En mi ejercicio, agregue un Banner con una animacion de nubes detras de unos personajes de la serie de DragonBall, utilice un estilo Parallax para mostrarlos en el banner.

agregue porteriormente una tajeta por personaje, diseñe la pagina en tonos oscuros.

## Tecnología Utilizadas:

React+Vite y Bootstrap para manejo de acordeon de detalles de las tarjetas de personajes, y mi componente Boton, generado y actualizado en ejercicios anteriores.(Boton reutilizable)

## Estructura del Proyecto:

```bash
src/
 ├─ Assets/
 │   ├─ fondo2.mp4 (video fondo Banner)
 │   ├─ logo.png (Logo sitio)
 │   ├─ logoDragonBall.png  (Logo aparece en el Banner)
 │   └─ variosVolando.png (Imagen Banner)
 ├─ components/
 │   ├─ Banner.css (Estilos para Banner)
 │   ├─ Banner.jsx (componente Banner)
 │   ├─ Boton.css (Estilos para Boton, mi componente reutilizable)
 │   ├─ Boton.jsx (mi componente Boton)
 │   ├─ CardDragon.css (Estilos para CardDragon)
 │   ├─ CardDradon.jsx (componente que muestra las tarjetas de los personajes individuales)
 │   ├─ ListDragon.css (Estilos de Listdragon)
 │   └─ ListDragon.jsx (Une los datos de la API con la vista tarjeta individual, mostrando todos los personajes)
 ├─ hooks/
 │   └─ BdDragon.jsx (componente que maneja la conexion, errores y obtiene los datos)
 ├─ App.css (Estilos Globales de toda la app)
 ├─ App.jsx (archivo principal de la app)
 ├─ .gitignore (Detalle abajo)
 ├─ package.json (Detalle abajo )
 └─ vite.config.js (Detalle abajo)
```

 * 🔹 Qué es .gitignore

    Es un archivo de texto donde le decís a Git qué archivos o carpetas NO subir al repositorio.
    Ejemplo: dependencias, builds, archivos de configuración locales, cosas de tu computadora que no deberían estar en GitHub.

    🔹 Consecuencia

    Si no tenés .gitignore, Git va a intentar subir todo, incluyendo dependencias y builds, y el repositorio se vuelve gigante y desordenado.

 * 🔹 Qué es el package.json

    Es un archivo JSON que describe tu proyecto y sus dependencias.
    Viene con información básica como:

    Nombre del proyecto (name)  
    Versión (version)  
    Qué scripts podes ejecutar (scripts)  
    Qué librerías necesita (dependencies)  
    Qué librerías solo para desarrollo (devDependencies)  

    🔹 Para qué sirve cada sección

    scripts → comandos que podés correr con npm run <nombre>
    Ej:
    npm run dev → levanta el servidor de desarrollo  
    npm run build → genera la versión lista para producción  
    dependencies → librerías que tu app necesita para funcionar  
    Ej: React, Bootstrap  
    devDependencies → herramientas solo para desarrollo  
    Ej: Vite, ESLint, plugins  
    name y version → solo info del proyecto  

    🔹 Por qué es importante

    Cuando clonás un proyecto, package.json + npm install instala todas las librerías necesarias.  
    Los scripts (dev, build) dependen de lo que esté en package.json.  
    Si falta algo en devDependencies (como vite) → te aparece el error que viste:  
    "vite" no se reconoce como un comando  

 * 🔹 Qué es vite.config.js

    Es el archivo de configuración de Vite.  
    En él podes decirle a Vite cosas como:  
    Qué plugins usar (por ejemplo React)  
    Configuración de rutas, build y base path  
    Alias para importar carpetas de forma más corta  
    Básicamente, modifica el comportamiento por defecto de Vite.  

# 🔹 Flujo completo para GitHub Pages

### I M P O R T A N T E

✅ — sí o sí tenés que hacer un push antes de ejecutar el deploy.  
Te explico rápido por qué 👇   
Cuando hacés npm run deploy, el comando:  
toma el proyecto tal como está en tu carpeta local,  
lo compila,  
y sube el resultado a la rama gh-pages.  
💡 Pero si no hiciste git push antes, entonces tu repositorio remoto (GitHub) no tiene la última versión de tu código fuente.  
Así que se después querés seguir trabajando o alguien más lo clona, no va a tener el mismo código que el que se deployó.  

**🧩 En resumen, el orden ideal sería:**

1️⃣ Guardás tus cambios:

```bash
git add .
git commit -m "actualizo proyecto"
```


2️⃣ Subís el código fuente a GitHub:  

```bash
git push  

```

    Así te asegurás de que todo quede sincronizado y el deploy represente tu última versión.  

3️⃣ Configurar vite.config.js para que Vite genere las rutas correctas.

* agregar la base dentro del archivo vite.config.js

```bash

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "NOMBRE_DE_TU_REPO",  // ✅ Agregar nombre de tu repo en GitHub
});

```

**Explicación:**  
base → indica a Vite que todas las rutas de tus assets y scripts deben empezar con /dragonball/ (o el nombre que tenga tu repo).  
Si no lo hacés, al subir a GitHub Pages las imágenes, CSS o JS no se cargan porque la app intenta buscarlos en la raíz (/) en vez de en /dragonball/.  

4️⃣ Asegurarte de que package.json tenga:

```bash
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "homepage": "https://TU_USUARIO.github.io/NOMBRE_DE_TU_REPO", ✅ Agregar direccion de tu pagina de GitHub
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build", ✅ Agregar para contruir la Dist
    "deploy": "gh-pages -d dist" ✅ Agregar para desplegar la pagina
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^5.0.0",
    "gh-pages": "^6.0.0"
  }
}

```

5️⃣ Luego, instalar gh-pages:

```bash
npm install gh-pages --save-dev

```

6️⃣ Recién ahí hacés el deploy:

```bash
npm run deploy

```

**⚡ Resultado: GitHub Pages toma la carpeta dist y la publica en la URL que pusiste en homepage.**

***Cada Archivo está documentado al detalle para que pueda ser entendido por cualquiera que lo lea.***
