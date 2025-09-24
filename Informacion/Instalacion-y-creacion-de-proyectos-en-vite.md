# Instalacion y creacion de proyecto React en Vite:

## Requisitos

Antes de empezar, asegúrate de tener Node.js instalado en tu computadora. Puedes verificarlo abriendo una terminal y ejecutando ```node -v.``` Si no lo tienes, puedes descargarlo e instalarlo desde el sitio oficial de [Node.js](https://nodejs.org/es/)

Lo ideal es descargar la versión LTS (Long Term Support) de Node.js. Es la versión más estable y recomendada para la mayoría de los usuarios y proyectos en producción, ya que recibe soporte y actualizaciones a largo plazo.

La instalación es sencilla y varía ligeramente dependiendo de tu sistema operativo:

### Instalación en Windows y macOS
Descarga el instalador: Ve al sitio web oficial de Node.js. La página detectará automáticamente tu sistema operativo y te mostrará la opción para descargar la versión LTS con un instalador (un archivo .msi para Windows o .pkg para macOS).

Ejecuta el instalador: Haz doble clic en el archivo que descargaste.

Sigue el asistente de instalación: Acepta los términos, elige la ubicación de instalación (generalmente, puedes dejar la que viene por defecto) y haz clic en "Siguiente" e "Instalar".

***Verifica la instalación:*** Abre la terminal (o el Símbolo del sistema en Windows) y escribe los siguientes comandos para confirmar que Node.js y npm (el gestor de paquetes que se instala automáticamente) están funcionando correctamente:

```bash
node -v (para ver la versión de Node.js)

npm -v (para ver la versión de npm)
```

### Instalación en Linux
La forma más común y recomendada es usar el administrador de paquetes de tu distribución:

Para distribuciones basadas en Debian/Ubuntu:

```Bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

Para distribuciones basadas en Fedora:

```Bash

sudo dnf install nodejs npm
```
Después de la instalación, también puedes verificar las versiones con node -v y npm -v.


***Nota:*** *Nos puede aparecer éste error*
ERROR:
```
PS C:\Windows\system32> npm -v

npm : No se puede cargar el archivo C:\Program Files\nodejs\npm.ps1 porque la ejecución de scripts está deshabilitada

en este sistema. Para obtener más información, consulta el tema about_Execution_Policies en

https:/go.microsoft.com/fwlink/?LinkID=135170.

En línea: 1 Carácter: 1

+ npm -v

+ ~~~

    + CategoryInfo          : SecurityError: (:) [], PSSecurityException

    + FullyQualifiedErrorId : UnauthorizedAccess
```

## Solucionar el problema:
Abre PowerShell como administrador: Haz clic con el botón derecho en el ícono del menú de inicio de Windows y selecciona Windows PowerShell (Administrador) o Terminal (Administrador).

Si usas Windows 10, busca PowerShell en el menú de inicio, haz clic derecho sobre él y selecciona Ejecutar como administrador.

Si usas Windows 11, haz clic derecho en el botón de inicio y elige Terminal (Administrador).

Cambia la política de ejecución: Una vez que tengas la terminal abierta con permisos de administrador, ejecuta el siguiente comando:

```PowerShell

Set-ExecutionPolicy RemoteSigned
```

Este comando le dice a PowerShell que permita la ejecución de scripts que tú creaste o que están firmados por una fuente confiable. Cuando te pregunte si estás seguro de cambiar la política, escribe S y presiona Enter.

El comando Set-ExecutionPolicy RemoteSigned configura la política de ejecución de scripts de PowerShell de forma permanente para el usuario actual.
*Verifica la instalación de npm:* Ahora, cierra esa ventana de PowerShell y abre una nueva, pero esta vez sin permisos de administrador. Ahora puedes intentar el comando que falló antes:

```PowerShell

npm -v
```

Si todo salió bien, ahora debería mostrarte la versión de npm instalada en tu sistema sin ningún error. Con esto, ya puedes continuar con la instalación de React.

Para una guía más detallada sobre cómo instalar Node.js en Windows, este video puede ser útil. Cómo instalar Node.js en [Windows en 2024:](https://www.youtube.com/watch?v=29mihvA_zEA)

Ahora que tienes Node.js y npm configurados, el siguiente paso es crear tu proyecto de React.

1. Crea tu proyecto de React con Vite
Abre tu terminal y navega hasta la carpeta donde quieras crear tu proyecto (por ejemplo, C:\Users\TuUsuario\Proyectos). Una vez ahí, ejecuta el siguiente comando:

```Bash

npm create vite@latest
```
**Nota:** *si te sale Need to install the following packages:*

create-vite@7.1.1

Ok to proceed? (y)
dile que (y), asi baja los paquetes necesarios para vite.


Este comando descargará el instalador de Vite y te hará algunas preguntas:

*Project name: Escribe el nombre que quieras para tu carpeta de proyecto. Por ejemplo, mi-app-react.*

**Nota:** *La convención de nomenclatura más común y recomendada para proyectos web en JavaScript es usar kebab-case (todo en minúsculas, separado por guiones).*

Ejemplo: mi-proyecto-react
Hay varias razones por las que esta convención (kebab-case) es una buena práctica:

**Compatibilidad del sistema de archivos:** *En sistemas operativos como Linux y macOS, los nombres de archivos y carpetas distinguen entre mayúsculas y minúsculas.* *Usar solo minúsculas y guiones evita problemas de compatibilidad y errores al mover tu proyecto.*


**Facilita el uso en terminales y URLs:** *Es más fácil escribir y recordar nombres en minúsculas. Además, es un formato estándar para los nombres en las URL.*


**Consistencia:** *Es la convención más utilizada por la comunidad de desarrolladores, lo que facilita que otros colaboren en tu código.*

## ¿Qué opciones debes evitar?

**CamelCase (MiProyectoReact):** *Puede causar problemas en sistemas operativos que distinguen entre mayúsculas y minúsculas.*

**snake_case (mi_proyecto_react):** *Aunque funciona, es menos común en el ecosistema de JavaScript que el kebab-case.*

Así que, para resumir, escribe el nombre de tu proyecto en la terminal con guiones y en minúsculas. Esto te evitará muchos problemas en el futuro.*


*Select a framework: Usa las flechas para seleccionar React y presiona Enter.*


*Select a variant: Elige JavaScript o TypeScript. Si eres principiante, JavaScript es la opción más sencilla.*

2. Entra a la carpeta e instala las dependencias
Vite habrá creado una carpeta con el nombre que elegiste. Entra a ella con el siguiente comando:

```Bash

cd mi-app-react
```
Ahora, instala todas las librerías y dependencias necesarias para que React funcione.


```Bash

npm install
```

**Nota:** *Es buena idea actualizar npm a la última versión. Aunque no es obligatorio, hacerlo tiene varios beneficios:*

**Seguridad:** *Las nuevas versiones a menudo incluyen parches de seguridad que protegen tu sistema y tus proyectos de vulnerabilidades.*

**Rendimiento:** *Las actualizaciones mejoran la velocidad y eficiencia de npm.*

**Nuevas funciones:** *Se agregan nuevas características que pueden facilitar la gestión de tus paquetes.*

Para actualizar, simplemente ejecuta el comando que te mostró el mensaje en tu terminal:

```Bash

npm install -g npm@11.5.2
```
El parámetro -g significa que la instalación se hará de forma global, lo que asegurará que la versión se actualice para todos tus proyectos.

3. Ejecuta tu proyecto
Una vez que la instalación termine, puedes iniciar el servidor de desarrollo local para ver tu aplicación en el navegador.
```Bash

npm run dev
```
El terminal te dará una dirección URL, generalmente http://localhost:5173/. Abre esa dirección en tu navegador y verás la página de bienvenida de React.

**Nota:** *si estamos el visual Studio Code podemos correrla desde su teminal, recuerden estar parados dentro del directorio del proyecto.*

¡Eso es todo! Ya puedes empezar a editar los archivos de tu proyecto y construir tu aplicación.


