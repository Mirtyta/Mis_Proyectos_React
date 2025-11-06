// =============================================
// 📦 useFetchProductos.jsx
// Hook personalizado para traer productos desde una API
// =============================================

import { useEffect, useState } from "react";

/**
 * useFetchProductos
 * -----------------
 * Este hook se encarga de:
 *  - Traer los productos desde una API (fetch)
 *  - Guardarlos en un estado local
 *  - Mostrar si está cargando o si hay errores
 *
 * Devuelve:
 *   productos → array de productos
 *   cargando → true o false según el estado
 *   error → mensaje de error o null
 *   getProductoById(id) → función para buscar un producto específico
 */
export function useFetchProductos() {
  // Guardamos los datos que llegan desde la API
  const [productos, setProductos] = useState([]);
  // Estado de carga
  const [cargando, setCargando] = useState(true);
  // Estado de error
  const [error, setError] = useState(null);

  // 🔹 useEffect → se ejecuta una sola vez cuando el componente se monta
  useEffect(() => {
    // Creamos una función async interna para poder usar await
    const fetchProductos = async () => {
      try {
        // Antes de comenzar, indicamos que estamos cargando
        setCargando(true);
        setError(null);

        // Petición HTTP al endpoint (la URL de la API)
        const respuesta = await fetch(
          "https://68d892512144ea3f6da857f0.mockapi.io/api/v1/productocompleto"
        );

        // Si el servidor respondió con error (404, 500, etc.)
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        // Convertimos la respuesta en JSON (para obtener los datos reales)
        const data = await respuesta.json();

        // Validamos que la respuesta sea un array
        if (!Array.isArray(data)) {
          throw new Error("La respuesta no tiene el formato esperado.");
        }

        // Guardamos los productos en el estado
        setProductos(data);
      } catch (err) {
        // Si ocurre un error (de red o formato), lo guardamos
        setError(err.message);
      } finally {
        // Finalmente, marcamos que ya terminó de cargar
        setCargando(false);
      }
    };

    // Ejecutamos la función
    fetchProductos();
  }, []); // [] → solo se ejecuta al montar el componente

  // 🔹 Función auxiliar para obtener un producto por su id
  const getProductoById = (id) => {
    return productos.find((p) => String(p.id) === String(id)) || null;
  };

  // 🔹 Devolvemos todo lo que queremos usar fuera del hook
  return { productos, cargando, error, getProductoById };
}
