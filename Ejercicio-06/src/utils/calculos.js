// ============================================
// src/utils/calculos.js
// ============================================

/**
 * 🎓 Archivo central de cálculos
 * 
 * - Maneja precios, descuentos, impuestos y totales.
 * - Compatible con la página de Detalle y Carrito.
 */

const IVA = 0.21;          // 21% de IVA
const ENVIO_FIJO = 5000;   // costo fijo de transporte
const DESCUENTO_CUPON = 5000; // 💸 valor fijo del cupón de descuento

// ============================================================
// 1️⃣ CALCULAR DESCUENTO
// ============================================================
export function calcularPrecioConDescuento(precio, descuento = 0) {
  if (!descuento) return precio;
  return precio * (1 - descuento);
}


// ============================================================
// 2️⃣ CALCULAR IMPUESTO
// ============================================================
export function calcularImpuesto(precio) {
  return precio * IVA;
}


// ============================================================
// 3️⃣ CALCULAR DETALLE DE PRODUCTO
// ============================================================
export function calcularDetalleProducto({ precio, descuento = 0, cantidad = 1 }) {
  const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
  const subtotal = precioConDescuento * cantidad;
  const impuestos = calcularImpuesto(subtotal);
  const total = subtotal + impuestos;

  return {
    precioBase: precio,
    precioConDescuento,
    descuentoMonto: (precio - precioConDescuento) * cantidad,
    subtotal,
    impuestos,
    total,
    cantidad
  };
}


// ============================================================
// 4️⃣ CALCULAR RESUMEN DEL CARRITO
// ============================================================
export function calcularResumenCarrito(carrito, codigoDescuento = '') {
  let subtotal = 0;
  let impuestos = 0;
  let descuentoTotal = 0;
  let cantidadTotal = 0;

  carrito.forEach(item => {
    const d = calcularDetalleProducto({
      precio: item.precio,
      descuento: item.descuento || 0,
      cantidad: item.quantity
    });
    subtotal += d.subtotal;
    impuestos += d.impuestos;
    descuentoTotal += d.descuentoMonto;
    cantidadTotal += d.cantidad;
  });

  // 🚚 Envío base y posibles descuentos
  let envio = ENVIO_FIJO;
  let descuentoEnvio = 0;
  let descuentoCupon = 0;

  // 🎁 Código "ENVIOGRATIS" => descuento del envío (pero se sigue mostrando el valor original)
  if (codigoDescuento.toUpperCase() === 'ENVIOGRATIS') {
    descuentoEnvio = ENVIO_FIJO;
  }

  // 🎫 Código "DESCUENTO5000" => aplica $5000 menos al total
  if (codigoDescuento.toUpperCase() === 'DESCUENTO5000') {
    descuentoCupon = DESCUENTO_CUPON;
  }

  // 🧮 Total general
  const total = subtotal + impuestos + envio - descuentoEnvio - descuentoCupon;

  return {
    subtotal,
    impuestos,
    envio,
    descuentoTotal,
    descuentoEnvio,
    descuentoCupon,
    total,
    cantidadTotal
  };
}


// ============================================================
// 5️⃣ FORMATEAR PRECIO
// ============================================================
export function formatearPrecio(precio, moneda = '$') {
  return `${moneda}${Math.round(precio).toLocaleString('es-AR')}`;
}

// ============================================================
// 6️⃣ NORMALIZAR TEXTO PARA BUSQUEDA
// ============================================================

/**
 * Convierte un texto a minúsculas y elimina tildes/acento
 * para poder comparar sin errores por mayúsculas o acentos.
 * 
 * @param {string} text
 * @returns {string} texto normalizado
 */
export function normalizeText(text) {
  return text
    .toLowerCase() // minúsculas
    .normalize("NFD") // separa letras de acentos
    .replace(/[\u0300-\u036f]/g, ""); // quita los diacríticos
}
