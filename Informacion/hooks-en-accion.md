# ⚛️ Hooks en Acción: Menú Dinámico

Para hacer que mi sitio fuera más dinámico, decidí que el menú principal (la `navbar`) se ocultara o mostrara según el scroll del usuario. Esto fue un gran desafío al principio, pero me ayudó a entender la mecánica de los **Hooks** de React.

## `useState` y `useEffect`

-   **`useState`**: Es el hook que usamos para manejar el **estado** de un componente. En mi caso, necesitaba una variable para saber si el menú estaba visible o no. La llamé `isMenuVisible`.
-   **`useEffect`**: Es el hook que maneja los **efectos secundarios**. Lo usé para "escuchar" el evento de scroll de la ventana y actualizar el estado de `isMenuVisible` en base a la dirección del scroll.

**La lógica fue la siguiente:**

1.  Crear una variable de estado `isScrollingUp` con `useState`.
2.  Usar `useEffect` para agregar un "escuchador de eventos" (`addEventListener`) al `scroll` de la ventana.
3.  En la función de `useEffect`, comparar la posición actual del scroll (`window.scrollY`) con la posición anterior para ver si el usuario está subiendo o bajando.
4.  Si el usuario está subiendo, actualizar el estado para mostrar el menú. Si está bajando, ocultarlo.

## `useRef` para guardar valores

Al principio, tenía un problema: necesitaba recordar la posición del scroll anterior, pero si la guardaba en el estado, se generaba un bucle infinito de re-renderizados. Aquí fue donde entendí el poder de `useRef`.

-   **`useRef`**: Me permite guardar una referencia a un valor que **persiste entre renderizados** sin causar que el componente se re-renderice cuando ese valor cambia.

Lo usé para almacenar la última posición del scroll, lo que me permitió hacer la comparación en cada evento de scroll sin afectar el rendimiento.

Estos Hooks, junto con los de `Recursos.jsx` (`useState` para el aside y `useRef` para el Swiper), me demostraron que son los pilares para hacer que una página estática se convierta en una aplicación dinámica.
