# Guía de comandos MarkDown

***Los tres puntos en el centro (`...`) representan el texto a formatear.***

## Comandos básicos

**Ejemplos de formato**
### Negritas

 `**...**`  **texto en negritas**

### Cursiva:

`*...*`  *texto en cursiva*

### Negrita y cursiva:

`***...***`  ***texto en negritas y cursiva***

### Línea horizontal:

 `---` o `***` 
 ---

 ### Enlace:
 
 ``[Visita Google](https://www.google.com)``

 [Visita Google](https://www.google.com)

 ### Imagen:
 
``![Logotipo de Google](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)``

![Logotipo de Google](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

### Cita:

`> (al inicio de un párrafo)` 

> Esto es una cita en bloque.

### Código en línea:

`` `...` ``  `npm run dev`

### Bloque de código:

`` ```...``` `` 

```bash
npm run dev
```

### Lista sin numerar:

 `-`, `*`, `+` 

-Elemento uno

-Elemento dos

### Lista numerada:

`` `1.` `` o simplemente 1. 

1. Elemento uno

2. Elemento dos

### Encabezados (Títulos)

**Nota:** *en el encabezado nivel 1 y 2, además le agrega al encabezado un línea horizontal*

# Título	Encabezado de nivel 1
## Título	Encabezado de nivel 2
### Título	Encabezado de nivel 3
#### Título	Encabezado de nivel 4
##### Título	Encabezado de nivel 5
###### Título	Encabezado de nivel 6

### Tablas y alineación

Caracteres (Sintaxis)	Descripción	Alineación


| (barra vertical)	Divide las columnas de la tabla.

`-` (guion)	Separa el encabezado del resto de la tabla. Debes usar al menos tres guiones por columna.	

: (dos puntos)	Se usan en la línea de guiones para alinear el texto.	

:---	Alineación a la izquierda.

:---:	Alineación al centro.

---:	Alineación a la derecha.

### Ejemplo de Tabla

```MD
| Nombre | Ocupación | Edad |
| :--- | :---: | ---: |
| Ana | Ingeniera | 18 |
| Juan | Diseñador | 60 |
```

***En MarkDown se vería así:

| Nombre | Ocupación | Edad |
| :--- | :---: | ---: |
| Ana | Ingeniera | 18 |
| Juan | Diseñador | 60 |


