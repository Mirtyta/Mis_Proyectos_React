# Dos flujos de trabajo comunes:

Hay dos maneras principales de empezar un proyecto con Git y un repositorio remoto:

## Empezar localmente y luego subir: 

Primero creas los archivos del proyecto en tu computadora, y una vez que tienes el código inicial, lo subes a un repositorio remoto (como GitHub). Esto te permite trabajar y probar tu aplicación antes de preocuparte por el control de versiones.

Empezar en GitHub y luego clonar: En este caso, primero creas un repositorio vacío en GitHub y luego lo descargas a tu computadora con git clone. Después, agregas tus archivos al proyecto. Este método es ideal si ya tienes una estructura predefinida o si trabajas en equipo.

***El segundo método, no lo explicaré en éste documento.***

### Pasos a seguir
Ahora que ya tienes tu proyecto de React, puedes subirlo a un repositorio de GitHub para guardar el historial de cambios. 
Sigue estos pasos:

Inicia Git en tu proyecto local: Abre tu terminal, asegúrate de estar dentro de la carpeta de tu proyecto (con cd nombre-de-tu-proyecto), y ejecuta el siguiente comando:

```Bash
git init
```

Este comando convierte tu carpeta en un repositorio de Git local, después de eso, podrás empezar a usar los comandos de Git para añadir y guardar tus cambios.

Al hacerlo, Git creará un subdirectorio oculto llamado .git dentro de tu carpeta. Este directorio es lo que convierte a tu proyecto en un repositorio de Git, listo para que puedas empezar a rastrear los cambios en tus archivos.

**Ahora que tienes tu repositorio local inicializado, los siguientes pasos son:**

### Añadir los archivos al área de preparación:

1. Añade los archivos
Antes de hacer tu primer commit (guardar un punto en el historial), tienes que indicarle a Git qué archivos quieres que incluya. Puedes agregar todos los archivos a la vez con el siguiente comando:

```Bash
git add .
```

El punto (.) le dice a Git que incluya todos los archivos del directorio actual.


### Hacer tu primer commit:
2. Haz tu primer commit
Un commit es como una "foto" del estado actual de tu proyecto. Para guardar esta primera versión, usa el siguiente comando:

```Bash
git commit -m "Initial commit"
```

El -m es para agregar un mensaje descriptivo a tu commit. El mensaje "Initial commit" es la convención estándar para el primer guardado.

### Conectar tu repositorio local a uno remoto:
3. Crea tu repositorio remoto en GitHub
Ahora, ve a tu cuenta de GitHub y crea un nuevo repositorio.

Haz clic en el botón verde "New" en la esquina superior derecha.

Dale un nombre a tu repositorio (idealmente el mismo que tu proyecto local).

Asegúrate de NO marcar la opción de "Add a README file" o "Add .gitignore", ya que Vite ya los creó por ti.

Haz clic en "Create repository".

4. Conecta y sube tus archivos
Después de crear el repositorio en GitHub, la página te dará una serie de comandos. Copia y pega estos dos comandos en tu terminal.

```Bash
git branch -M main (El comando cambia el nombre de tu rama principal a main (una práctica común))
git remote add origin https://github.com/TuUsuario/TuRepositorio.git.(Éste comenado conecta tu repositorio local (origin) con el que acabas de crear en GitHub. Asegúrate de reemplazar la URL con la de tu repositorio.)
```

Finalmente, para subir tus archivos, ejecuta el comando:
Subir los archivos:

```Bash

git push -u origin main
```

Este comando subirá tu primer commit y todos tus archivos al repositorio remoto en GitHub.

¡Y listo! Con estos pasos, tu proyecto local está en la nube, conectado y subido a GitHub, y puedes empezar a rastrear todos tus cambios, y guardarlos de forma segura.

***Nota:*** *para actualizar, y subir los cambios.*

```Bash
git add (añade los archivos al área de preparación)
git commit -m "mensaje descriptivo" ( hacer un commit, recuerda ponerle -m es para agregar un mensaje descriptivo a tu commit)
git push -u origin main (Subir cambios desde origin (proyecto en local) a main (remote))
```