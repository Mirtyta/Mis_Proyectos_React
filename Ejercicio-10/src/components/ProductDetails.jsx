// ============================================
// 📄 src/pages/ProductDetails.jsx - CON CONTEXT API
// ============================================

/**
 * 🛍️ ProductDetails
 * ------------------
 * Muestra la información detallada de un producto seleccionado.
 *
 * Características:
 * - Imagen principal, nombre, categoría, rating, stock
 * - Selector de color y tamaño
 * - Botón para agregar al carrito (AddToCartButton)
 * - Badge de descuento
 * - Descripción, SKU, tags, y nota de producto nuevo
 *
 * 🔑 CAMBIO CON CONTEXT:
 * ----------------------
 * ANTES: Recibía getProductById por props desde App.jsx
 * AHORA: Usa useProductos() del Context para obtener getProductById
 */

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import { useProducts } from '../context/ProductsContext';

import { Container, Row, Col } from "react-bootstrap";
import { formatearPrecio } from "../utils/calculos";
import AddToCartButton from "../components/AddToCartButton";
import ColorSizeSelector from "../components/ColorSizeSelector";
import Banner from "../components/Banner"
import Rating from "./Rating";
import "./ProductDetails.css";

export default function ProductDetailPage() {
  // ========================================
  // 🔍 OBTENEMOS EL ID DESDE LA URL
  // ========================================
  
  /**
   * useParams extrae parámetros de la URL.
   * Si la URL es /producto/5, entonces id = "5"
   */
  const { id } = useParams();
  
  // ========================================
  // 📡 USAMOS EL CONTEXT PARA OBTENER PRODUCTOS
  // ========================================
  
  /**
   * useProductos() nos da acceso a:
   * - productos: Array de todos los productos
   * - getProductById: Función para buscar un producto específico
   * - cargando, error, createProduct, updateProduct, deleteProduct
   * 
   * Solo necesitamos getProductById para esta página
   */
  const { getProductById } = useProducts();
  
  // ========================================
  // 🎯 BUSCAMOS EL PRODUCTO POR ID
  // ========================================
  
  /**
   * getProductById busca en el array de productos
   * el que tenga el ID que viene en la URL
   */
  const producto = getProductById(id);

  // contexto Theme
  const {contextTheme} = useThemeContext()

  // ========================================
  // 📊 ESTADOS LOCALES
  // ========================================
  
  // Color seleccionado por el usuario
  const [selectedColor, setSelectedColor] = useState("");
  
  // Tamaño seleccionado por el usuario
  const [selectedSize, setSelectedSize] = useState("");
  
  // Mensaje de error si no selecciona color/tamaño
  const [error, setError] = useState("");

  // ========================================
  // 🛒 FUNCIÓN PARA AGREGAR AL CARRITO
  // ========================================
  
  /**
   * handleAddToCart
   * ---------------
   * Valida que el usuario haya seleccionado color y tamaño
   * antes de permitir agregar el producto al carrito.
   */
  const handleAddToCart = () => {
    // Validación: ¿Seleccionó color Y tamaño?
    if (!selectedColor || !selectedSize) {
      setError("Elegí color y tamaño");
      return;
    }
    
    // Si está todo OK, limpiamos el error
    setError("");
    
    // AddToCartButton internamente maneja agregar al carrito
    // usando los valores de selectedColor y selectedSize
  };

  // ========================================
  // ⚠️ VALIDACIÓN: ¿EXISTE EL PRODUCTO?
  // ========================================
  
  /**
   * Si el ID no existe en el array de productos,
   * getProductById devuelve null.
   * 
   * Mostramos un mensaje en vez de romper la app.
   */
  if (!producto) {
    return (
      <Container className="py-5 text-center">
        <h2>❌ Producto no encontrado</h2>
        <p>El producto con ID "{id}" no existe.</p>
      </Container>
    );
  }

  // ========================================
  // 🎨 RENDER
  // ========================================

  return (
      <Container key={id} className="pb-5" id={contextTheme} >
      <Banner title="Detalles" description={'Información sobre el producto'} />
        <Row className="g-0 d-flex align-items-stretch p-5" style={{ minHeight: '400px' }}>
          {/* ========================================
              📋 COLUMNA: DETALLES
              ======================================== */}
          
          <Col md={6} className="pb-4 rounded-4" id={contextTheme}>
            <div className="p-4 rounded-4">
              
              {/* Información de categoría y reviews */}
              <div className="reviews mb-2 text-center text-secondary">
                📂 {producto.categoria} | ❤️ 24 likes | 3 reviews
              </div>

              {/* Rating (estrellas) */}
              <span className="d-flex align-items-center justify-content-center gap-2">
                <strong>Calificación:</strong>
                <Rating value={producto.rating} />
              </span>

              {/* Precio */}
              <div className="fs-2 fw-bolder mt-3 text-center">
                {formatearPrecio(producto.precio)}
                <sup>.00</sup>
              </div>

              {/* Stock disponible */}
              <div className="stock text-center fs-6">
                Stock: {producto.stock} unidades.
              </div>

              {/* ========================================
                  🎨 SELECTOR DE COLOR
                  ======================================== */}
              
              <h5 className="text-center mt-4">Elige color y tamaño:</h5>

              {/**
               * ColorSizeSelector para colores
               * --------------------------------
               * - opciones: Array de colores disponibles (ej: ["rojo", "azul"])
               * - value: Array con el color seleccionado (ej: ["rojo"])
               * - multiple: false → solo puede elegir un color
               * - tipo: "color" → para que se vea como selector de colores
               * - onChange: Recibe array, tomamos el primer elemento
               */}
              <ColorSizeSelector
                opciones={producto.colores}
                value={selectedColor ? [selectedColor] : []}
                multiple={false}
                tipo="color"
                onChange={(arr) => {
                  setSelectedColor(arr[0] || "");
                  setError(""); // Limpiamos error al seleccionar
                }}
              />

              {/* ========================================
                  👕 SELECTOR DE TAMAÑO
                  ======================================== */}
              
              {/**
               * ColorSizeSelector para tamaños
               * -------------------------------
               * - opciones: Array de tamaños disponibles (ej: ["S", "M", "L"])
               * - value: Array con el tamaño seleccionado (ej: ["M"])
               * - multiple: false → solo puede elegir un tamaño
               * - tipo: "size" → para que se vea como selector de tamaños
               * - onChange: Recibe array, tomamos el primer elemento
               */}
              <ColorSizeSelector
                opciones={producto.tamanos}
                value={selectedSize ? [selectedSize] : []}
                multiple={false}
                tipo="size"
                onChange={(arr) => {
                  setSelectedSize(arr[0] || "");
                  setError(""); // Limpiamos error al seleccionar
                }}
              />

              {/* ========================================
                  ⚠️ MENSAJE DE ERROR
                  ======================================== */}
              
              {/**
               * Si el usuario intenta agregar al carrito sin seleccionar
               * color o tamaño, mostramos este mensaje.
               */}
              {error && (
                <p className="text-danger fs-5 text-center mt-2">{error}</p>
              )}

              {/* ========================================
                  🛒 BOTÓN AGREGAR AL CARRITO
                  ======================================== */}
              
              {/**
               * AddToCartButton
               * ---------------
               * - producto: El producto completo
               * - selectedColor: Color elegido por el usuario
               * - selectedSize: Tamaño elegido por el usuario
               * - redirect: false → no redirige después de agregar
               * - iconOnly: false → muestra texto + ícono
               * - onClick: handleAddToCart valida antes de agregar
               */}
              <div className="d-flex justify-content-center py-3">
                <AddToCartButton
                  producto={producto}
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}
                  redirect={false}
                  iconOnly={false}
                  onClick={handleAddToCart}
                />
              </div>

              {/* ========================================
                  🧾 INFORMACIÓN ADICIONAL
                  ======================================== */}
              
              <div className="mt-3 text-center">
                
                {/* Descripción del producto */}
                <p>
                  <strong>Descripción:</strong> {producto.descripcion}
                </p>

                {/* SKU (código único del producto) */}
                <p>
                  <strong>🔖 SKU:</strong> {producto.sku}
                </p>

                {/* Badge "Producto Nuevo" (si aplica) */}
                {producto.nuevo === "true" && (
                  <p>
                    <strong>📦 Producto Nuevo!!!</strong>
                  </p>
                )}

                {/* Tags (etiquetas) del producto */}
                {producto.tags?.length > 0 && (
                  <p>
                    <strong>🏷️ Etiquetas:</strong>{" "}
                    {producto.tags.map((tag, i) => (
                      <span key={i}>#{tag} </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </Col>

            {/* ========================================
              🖼️ COLUMNA: IMAGEN
              ======================================== */}
          
          <Col className="w-100 h-100 object-fit-cover">
            <div>
              
              {/* Nombre del producto */}
              <div className="fs-1 mt-3 mb-3 text-center">
                {producto.nombre}
              </div>
              <div className="position-relative text-center">
              {/* Imagen principal */}
              <img
                src={producto.image}
                alt={producto.nombre}
              />

              {/* Badge de descuento (si tiene) */}
              {producto.descuento > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-50 p-2 m-2 fs-6">
                  {producto.descuento}%<sub className='fs-6'>off</sub>
                </span>
              )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  );
}

// ============================================
// 📚 RESUMEN DE CAMBIOS
// ============================================

/**
 * 🔄 ¿QUÉ CAMBIÓ CON CONTEXT?
 * ============================
 * 
 * ANTES (con props):
 * ------------------
 * // En App.jsx
 * <Route path="/producto/:id" element={<ProductoDetalle getProductById={getProductById} />} />
 * 
 * // En ProductoDetalle
 * function ProductoDetalle({ getProductById }) {
 *   const producto = getProductById(id);
 * }
 * 
 * 
 * AHORA (con Context):
 * --------------------
 * // En App.jsx
 * <Route path="/producto/:id" element={<ProductoDetalle />} />
 * 
 * // En ProductoDetalle
 * import { useProductos } from '../context/ProductosContext';
 * 
 * function ProductoDetalle() {
 *   const { getProductById } = useProductos();
 *   const producto = getProductById(id);
 * }
 * 
 * 
 * ✅ VENTAJAS:
 * ============
 * 
 * 1. ✅ No hay que pasar getProductById por props desde App
 * 2. ✅ El componente es más independiente
 * 3. ✅ Usa la misma fuente de datos que AdminPage y ProductosPage
 * 4. ✅ Si AdminPage modifica un producto, este detalle se actualiza automáticamente
 * 5. ✅ Código más limpio y fácil de mantener
 * 
 * 
 * 💡 CÓMO FUNCIONA EL FLUJO:
 * ==========================
 * 
 * 1. Usuario va a /producto/5
 *    ↓
 * 2. useParams() obtiene id = "5"
 *    ↓
 * 3. useProductos() accede al Context
 *    ↓
 * 4. getProductById(5) busca el producto en el array del Context
 *    ↓
 * 5. Se muestra la información del producto ✅
 * 
 * Si mientras tanto AdminPage modifica ese producto:
 * 1. AdminPage llama a updateProduct
 *    ↓
 * 2. El Context actualiza su estado interno
 *    ↓
 * 3. ProductoDetalle se re-renderiza automáticamente
 *    ↓
 * 4. Se muestra la información actualizada ✅
 */