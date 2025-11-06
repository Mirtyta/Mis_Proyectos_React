// ============================================
// src/pages/ProductDetails.jsx
// ============================================

/**
 * 🛍️ ProductDetails
 * ------------------
 * Muestra la información detallada de un producto seleccionado:
 * - Imagen, nombre, categoría, calificación, stock, descripción.
 * - Selector de color y tamaño.
 * - Botón para agregar al carrito (usa AddToCartButton).
 *
 * ⚙️ Props requeridas:
 * - getProductoById(id): función que devuelve el producto según su ID.
 *
 * 🧩 Usa:
 * - useCarritoContext → para interactuar con el carrito.
 * - ColorSizeSelector → para elegir color y talle.
 * - AddToCartButton → para agregar productos al carrito.
 * - formatearPrecio → formato visual de precios.
 */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { formatearPrecio } from "../utils/calculos";
import AddToCartButton from "../components/AddToCartButton";
import ColorSizeSelector from "../components/ColorSizeSelector";
import Rating from "./Rating";
import Banner from "./Banner";
import "./ProductDetails.css";

export default function ProductDetailPage({ getProductoById }) {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState("");

  // 🔍 buscar producto por ID al montar o cambiar el id
  useEffect(() => {
    const p = getProductoById(id);
    setProducto(p || null);
    setSelectedSize("");
    setSelectedColor("");
    setError("");
  }, [id, getProductoById]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="product-details-page">
      <Container className="fondo-page py-5">
        <Banner title="Detalle" description="Detalles del producto" />

        <Row className="g-4 align-items-start">
          {/* 🖼️ IMAGEN DEL PRODUCTO */}
          <Col lg={6} className="text-center">
            <div className="position-relative">
              <div className="product-name fs-1 mt-3 mb-3 text-warning">
                {producto.nombre}
              </div>

              <img
                src={producto.image}
                alt={producto.nombre}
                className="product-image"
              />

              {/* Badge de descuento */}
              {producto.descuento > 0 && (
                <span className="image-badge-estrella fs-4 mt-5">
                  {producto.descuento * 100}%<sub className="fs-6">OFF</sub>
                </span>
              )}
            </div>
          </Col>

          {/* 📋 DETALLES DEL PRODUCTO */}
          <Col lg={6}>
            <div className="product-details">
              <div className="reviews mb-2 text-center text-secondary">
                📂 {producto.categoria} | ❤️ 24 likes | 3 reviews
              </div>

              <span className="d-flex align-items-center justify-content-center gap-2">
                <strong>Calificación:</strong>
                <Rating value={producto.rating} />
              </span>

              <div className="product-price fs-1 fw-bolder mt-3 text-center">
                {formatearPrecio(producto.precio)}
                <sup>.00</sup>
              </div>
              <div className="stock text-center fs-6">
                Stock: {producto.stock} unidades.
              </div>

              {/* 🎨 Selección de color/tamaño */}
              <h5 className="text-center mt-4">Elige color y tamaño:</h5>

              <ColorSizeSelector
                colores={producto.colores}
                tamanos={producto.tamanos}
                onSeleccion={({ color, talle }) => {
                  setSelectedColor(color);
                  setSelectedSize(talle);
                  setError("");
                }}
              />

              {/* ⚠️ Mensaje de error */}
              {error && (
                <p className="text-danger fs-5 text-center mt-2">{error}</p>
              )}

              {/* 🛒 Botón para agregar al carrito */}
              <div className="d-flex justify-content-center py-3">
                <AddToCartButton
                  producto={producto}
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}
                  redirect={false}
                  iconOnly={false}
                />
              </div>

              {/* 🧾 Descripción y detalles extra */}
              <div className="mt-3 text-center">
                <p>
                  <strong>Descripción:</strong> {producto.descripcion}
                </p>

                {producto.condicionesVenta &&
                  producto.condicionesVenta !== "Precio regular." && (
                    <p>
                      <strong>🎁 Promo:</strong> {producto.condicionesVenta}
                    </p>
                  )}

                <p>
                  <strong>🔖 SKU:</strong> {producto.sku}
                </p>

                {producto.nuevo === "true" && (
                  <p>
                    <strong>📦 Producto Nuevo!!!</strong>
                  </p>
                )}

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
        </Row>
      </Container>
    </div>
  );
}
