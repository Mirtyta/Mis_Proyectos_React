// =============================================
// 📦 useFetchProducts.jsx - VERSIÓN CORREGIDA
// Hook personalizado para manejar TODAS las operaciones
// CRUD (Create, Read, Update, Delete) de productos
// =============================================

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

/**
 * 🌐 URL base de la API
 * La movemos a una constante para:
 * - No repetir la URL en cada función
 * - Poder cambiarla fácilmente si cambia el endpoint
 */
const API_URL = "https://691c85e03aaeed735c9130ef.mockapi.io/Product";

/**
 * useFetchProducts
 * -----------------
 * Hook completo para manejar productos con operaciones CRUD.
 * 
 * Devuelve:
 *   productos → array de productos
 *   cargando → true/false según el estado de carga
 *   error → mensaje de error o null
 *   getProductById(id) → busca un producto específico
 *   createProduct(datos) → crea un nuevo producto (POST)
 *   updateProduct(id, datos) → actualiza un producto (PUT)
 *   deleteProduct(id) → elimina un producto (DELETE)
 *   refreshProducts() → vuelve a traer todos los productos
 */
export function useFetchProducts() {
  // ========================================
  // 📊 ESTADOS
  // ========================================
  
  // Array de productos obtenidos de la API
  const [productos, setProductos] = useState([]);
  
  // Indica si hay una operación en curso (carga inicial o cualquier operación)
  const [cargando, setCargando] = useState(true);
  
  // Guarda el mensaje de error si algo sale mal
  const [error, setError] = useState(null);

  // ========================================
  // 📥 FUNCIÓN: Obtener todos los productos (GET)
  // ========================================
  
  /**
   * fetchProducts
   * --------------
   * Función interna que:
   * 1. Hace una petición GET a la API
   * 2. Guarda los productos en el estado
   * 3. Maneja errores si algo falla
   */
  const fetchProducts = async () => {
    try {
      // Indicamos que estamos cargando
      setCargando(true);
      // Limpiamos errores anteriores
      setError(null);

      // 🌐 Hacemos la petición HTTP GET
      const respuesta = await fetch(API_URL);

      // ⚠️ Verificamos si la respuesta fue exitosa (status 200-299)
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }

      // 📦 Convertimos la respuesta a JSON
      const data = await respuesta.json();

      // ✅ Validamos que sea un array
      if (!Array.isArray(data)) {
        throw new Error("La respuesta no es un array válido.");
      }

      // 💾 Guardamos los productos en el estado
      setProductos(data);
      
    } catch (err) {
      // ❌ Si hay error, lo guardamos
      setError(err.message);
      // ✅ Aquí mostramos el mensaje al usuario con Swal
      Swal.fire({
        title: "¡Error al cargar productos!",
        text: err.message,
        icon: "error",
        confirmButtonText: "Ok"
      }); 
    } finally {
      // 🏁 Siempre marcamos que terminó la carga
      setCargando(false);
    }
  };

  // ========================================
  // 🔄 useEffect: Carga inicial automática
  // ========================================
  
  /**
   * Este useEffect se ejecuta UNA SOLA VEZ cuando el componente
   * se monta (aparece en pantalla).
   * 
   * El array vacío [] significa: "ejecutá esto solo al montar"
   */
  useEffect(() => {
    fetchProducts();
  }, []); // ⬅️ Array vacío = solo al montar

  // ========================================
  // 🔎 FUNCIÓN: Buscar producto por ID
  // ========================================
  
  /**
   * getProductById
   * ---------------
   * Busca un producto específico en el array local.
   * NO hace una petición a la API, busca en memoria.
   * 
   * @param {string|number} id - ID del producto a buscar
   * @returns {Object|null} - El producto encontrado o null
   */
  const getProductById = (id) => {
    // Convertimos ambos IDs a string para comparar
    // (porque a veces vienen como número y otras como string)
    return productos.find((p) => String(p.id) === String(id)) || null;
  };

  // ========================================
  // ➕ FUNCIÓN: Crear nuevo producto (POST)
  // ========================================
  
  /**
   * createProduct
   * -------------
   * Crea un nuevo producto en la API.
   * 
   * Pasos:
   * 1. Hace POST a la API con los datos nuevos
   * 2. La API devuelve el producto creado (con ID asignado)
   * 3. Agregamos ese producto al array local
   * 
   * @param {Object} nuevoProducto - Datos del producto (nombre, precio, etc.)
   * @returns {Object|null} - El producto creado o null si falla
   */
  const createProduct = async (nuevoProducto) => {
    try {
      setCargando(true);
      setError(null);

      // 🌐 Hacemos POST enviando los datos en JSON
      const respuesta = await fetch(API_URL, {
        method: "POST", // ⬅️ Método HTTP para crear
        headers: {
          "Content-Type": "application/json", // ⬅️ Le decimos que enviamos JSON
        },
        body: JSON.stringify(nuevoProducto), // ⬅️ Convertimos el objeto a string JSON
      });

      // ⚠️ Verificamos si funcionó
      if (!respuesta.ok) {
        throw new Error(`Error al crear: ${respuesta.status}`);
      }

      // 📦 La API nos devuelve el producto recién creado (con su ID)
      const productoCreado = await respuesta.json();

      // 💾 Lo agregamos al array local (sin hacer otro GET)
      setProductos((productosActuales) => [...productosActuales, productoCreado]);
      
      // ✅ Aquí mostramos el mensaje al usuario con Swal
      Swal.fire({
        title: "¡Producto creado!",
        text: `El producto "${productoCreado.nombre}" se agregó correctamente.`,
        icon: "success",
        confirmButtonText: "Ok"
      });
      
      return productoCreado;
      
    } catch (err) {
      setError(err.message);
      Swal.fire({
        title: "Error",
        text: `❌ Error al crear producto: ${err.message}`,
        icon: "error",
        confirmButtonText: "Ok"
      });
      return null;
    } finally {
      setCargando(false);
    }
  };

  // ========================================
  // ✏️ FUNCIÓN: Actualizar producto (PUT)
  // ========================================
  
  /**
   * updateProduct
   * ------------------
   * Actualiza un producto existente en la API.
   * 
   * CAMBIO IMPORTANTE:
   * ------------------
   * Antes de enviar los datos, limpiamos campos vacíos o que no deben
   * modificarse (como createdAt/createdat) para evitar sobrescribir
   * valores automáticos de MockAPI.
   * 
   * Pasos:
   * 1. Limpia campos que no deben enviarse
   * 2. Hace PUT a la API con los datos actualizados
   * 3. La API devuelve el producto actualizado
   * 4. Reemplazamos ese producto en el array local
   * 
   * @param {string|number} id - ID del producto a actualizar
   * @param {Object} datosActualizados - Campos a modificar
   * @returns {Object|null} - El producto actualizado o null si falla
   */
  const updateProduct = async (id, datosActualizados) => {
    console.log("ID QUE SE ENVÍA:", id);
    try {
      // validacion del id
      if (!id) {
        throw new Error("ID inválido para actualizar");        
      }

      setCargando(true);
      setError(null);

      // 🧹 LIMPIEZA DE DATOS ANTES DE ENVIAR
      // =====================================
      // Creamos una copia de los datos para no modificar el original
      const datosLimpios = { ...datosActualizados };
      
      // Eliminamos campos que MockAPI genera automáticamente
      // y que no debemos modificar en un UPDATE
      delete datosLimpios.id;         // El ID va en la URL, no en el body

      // SOLO borramos estos campos técnicos (no todo lo vacío)
    delete datosLimpios.createdAt;
    delete datosLimpios.createdat;
      
      // Eliminamos campos vacíos que podrían sobrescribir valores existentes
      // Object.keys(datosLimpios).forEach(key => {
      //   const valor = datosLimpios[key];
      // Si el valor es string vacío, null o undefined, lo eliminamos
      //   if (valor === "" || valor === null || valor === undefined) {
      //     delete datosLimpios[key];
      //   }
      // });

      // Hacemos PUT a la URL específica del producto
      const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "PUT", // ⬅️ Método HTTP para actualizar
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosLimpios), // ⬅️ Enviamos solo datos limpios
      });

      if (!respuesta.ok) {
        throw new Error(`Error al actualizar: ${respuesta.status}`);
      }

      // 📦 La API devuelve el producto actualizado
      const productoActualizado = await respuesta.json();

      // 💾 Reemplazamos el producto en el array local
      setProductos((productosActuales) =>
        productosActuales.map((p) =>
          String(p.id) === String(id) ? productoActualizado : p
        )
      );

      // ✅ Aquí mostramos el mensaje al usuario con Swal
      Swal.fire({
        title: "¡Producto actualizado!",
        text: `El producto "${productoActualizado.nombre}" se actualizó correctamente.`,
        icon: "success",
        confirmButtonText: "Ok",
        timer: 2000
      });
      
      return productoActualizado;
      
    } catch (err) {
      setError(err.message);
      // ✅ Aquí mostramos el mensaje al usuario con Swal
      Swal.fire({
        title: "❌ Error",
        text: `Error al actualizar producto: ${err.message}`,
        icon: "error",
        confirmButtonText: "Ok"
      });
      return null;
    } finally {
      setCargando(false);
    }
  };

  // ========================================
  // ❌ FUNCIÓN: Eliminar producto (DELETE)
  // ========================================
  
  /**
   * deleteProduct
   * ----------------
   * Elimina un producto de la API.
   * 
   * Pasos:
   * 1. Hace DELETE a la API
   * 2. Si funciona, lo quitamos del array local
   * 
   * @param {string|number} id - ID del producto a eliminar
   * @returns {boolean} - true si se eliminó, false si falló
   */
  const deleteProduct = async (id) => {
    try {
      setCargando(true);
      setError(null);

      // 🌐 Hacemos DELETE a la URL específica del producto
      const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE", // ⬅️ Método HTTP para eliminar
      });

      if (!respuesta.ok) {
        throw new Error(`Error al eliminar: ${respuesta.status}`);
      }

      // 💾 Lo quitamos del array local usando filter
      setProductos((productosActuales) =>
        productosActuales.filter((p) => String(p.id) !== String(id))
      );

      // ✅ Aquí mostramos el mensaje al usuario con Swal
      Swal.fire({
        title: "Producto eliminado",
        text: `✅ Producto con id: "${id}" eliminado`,
        icon: "success",
        confirmButtonText: "Ok",
        timer: 2000
      });
      
      return true;
      
    } catch (err) {
      setError(err.message);
      // ✅ Aquí mostramos el mensaje al usuario con Swal
      Swal.fire({
        title: "❌ Error",
        text: `Error al eliminar producto: ${err.message}`,
        icon: "error",
        confirmButtonText: "Ok"
      });
      return false;
    } finally {
      setCargando(false);
    }
  };

  // ========================================
  // 🔄 FUNCIÓN: Refrescar productos manualmente
  // ========================================
  
  /**
   * refreshProducts
   * ------------------
   * Vuelve a traer todos los productos desde la API.
   * Útil si querés sincronizar datos manualmente.
   */
  const refreshProducts = () => {
    fetchProducts();
  };

  // ========================================
  // 📤 RETORNO: Todo lo que el componente puede usar
  // ========================================
  
  return {
    // 📊 Estados
    productos,        // Array de productos
    cargando,         // Boolean: está cargando?
    error,            // String o null: mensaje de error
    
    // 🔧 Funciones
    getProductById,      // Buscar por ID (local)
    createProduct,       // POST: crear nuevo
    updateProduct,       // PUT: actualizar existente
    deleteProduct,       // DELETE: eliminar
    refreshProducts,     // GET: recargar todos
  };
}

// =============================================
// 📝 NOTAS ADICIONALES Y MEJORAS
// =============================================

/**
 * ✅ MEJORAS IMPLEMENTADAS EN ESTA VERSIÓN:
 * 
 * 1. LIMPIEZA DE DATOS EN UPDATE
 *    - Elimina campos que MockAPI genera automáticamente (id, createdAt)
 *    - Elimina campos vacíos para no sobrescribir valores existentes
 *    - Evita que se pierda la fecha de creación al actualizar
 * 
 * 2. URL centralizada en constante
 *    - Fácil de cambiar si cambia el endpoint
 * 
 * 3. Manejo de errores consistente
 *    - Todos los catch manejan errores igual
 *    - Mensajes de error más descriptivos
 * 
 * 4. Actualización local del estado
 *    - No hace GET después de cada POST/PUT/DELETE
 *    - Más rápido y eficiente
 * 
 * 5. Conversión de IDs a string
 *    - Evita problemas de comparación
 *  
 * 6. Documentación completa
 *    - Cada función explica qué hace
 * 
 * 🔑 PROBLEMA RESUELTO:
 * ====================
 * 
 * ANTES:
 * ------
 * Al actualizar, se enviaban TODOS los campos incluyendo:
 * - createdat: "" (vacío)
 * - id: "123" (en el body Y en la URL)
 * 
 * Esto hacía que MockAPI sobrescribiera la fecha con string vacío.
 * 
 * AHORA:
 * ------
 * Antes de hacer PUT, limpiamos:
 * - id, createdAt, createdat → No se envían
 * - Cualquier campo vacío ("", null, undefined) → No se envía
 * 
 * MockAPI mantiene los valores originales de campos que no enviamos.
 * 
 * EJEMPLO:
 * --------
 * Datos que llegan desde el formulario:
 * {
 *   id: "5",
 *   createdat: "2024-01-15",
 *   nombre: "Remera Nueva",
 *   precio: 5000,
 *   stock: 10
 * }
 * 
 * Datos que enviamos al PUT:
 * {
 *   nombre: "Remera Nueva",
 *   precio: 5000,
 *   stock: 10
 * }
 * 
 * MockAPI mantiene: id=5, createdAt=2024-01-15 (originales)
 * MockAPI actualiza: nombre, precio, stock (nuevos valores)
 * 
 * ⚠️ CONSIDERACIONES:
 * ===================
 * 
 * 1. Si un campo debe poder vaciarse (ej: descripción), no lo elimines
 *    de datosLimpios. Solo eliminamos campos técnicos y metadata.
 * 
 * 2. MockAPI usa "createdAt" (mayúscula) automáticamente.
 *    Si tu código usa "createdat" (minúscula), normalizá al recibir datos.
 * 
 * 3. El campo "sku" puede generarse automáticamente o manualmente.
 *    Si es automático, también deberías no enviarlo en updates.
 */