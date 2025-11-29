// ============================================
// src/pages/CartPage.jsx
// Página de carrito con layout responsive usando Row y Col
// Mobile: columnas en una sola fila (stack)
// Desktop: tabla a la izquierda / resumen a la derecha
// ============================================

import { useNavigate } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { useProducts } from "../context/ProductsContext";
import { useCart } from "../hooks/useCart";
import { useThemeContext } from "../context/ThemeContext";

import { formatearPrecio, calcularResumenCarrito } from "../utils/calculos";
import Boton from "../components/Boton";
import Banner from "../components/Banner";
import { Container, Table, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import "./CartPage.css";

export default function Carrito() {
  // 🌙 Tema
  const { contextTheme } = useThemeContext();

  // 🧭 Navegación
  const navigate = useNavigate();

  // 🛒 Productos y carrito
  const { productos } = useProducts();
  const productosNuevos = productos.filter((p) => p.nuevo);
  const { addToCart } = useCart();

  const { cart, removeFromCart, updateQuantity, clearCart, isEmpty } =
    useCartContext();

  // 📊 Resumen del carrito
  const resumen = calcularResumenCarrito(cart);

  // ============================================
  // 🧺 CARRITO VACÍO
  // ============================================
  if (isEmpty) {
    return (
      <Container className="min-vh-100" id={contextTheme}>
        <Banner
          title="Tu Carrito de Compras"
          description={
            <>
              <i className="bi bi-bag-x text-danger fs-2"></i> Tu carrito está
              vacío. ¡Explorá nuestra tienda!
            </>
          }
        />

        <div className="cart-image-promo bg-secondary mx-2 mx-md-5 p-2 p-md-5 rounded-5 bg-body-secondary">
          <h5 className="badge fs-3 fw-light bg-success rounded-4">¡Nuevos!</h5>
          <h5 className="ms-4 fs-5 fw-bolder text-danger fst-italic">
            Últimos lanzamientos
          </h5>
          <h5 className="ms-4 fs-3 fst-italic fw-light text-primary">
            Productos que podrían gustarte
          </h5>
        </div>

        <hr />

        <Row className="align-items-stretch pb-5 px-2 px-md-5">
          {productosNuevos.map((producto) => (
            <Col
              key={producto.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="h-100 p-3"
            >
              <ProductCard
                producto={producto}
                addToCart={addToCart}
                className="h-100"
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  // ============================================
  // 👉 Finalizar compra
  // ============================================
  const handleFinalizarCompra = () => {
    navigate("/checkout");
  };

  // ============================================
  // 🛍️ CARRITO CON PRODUCTOS
  // ============================================
  return (
    <Container id={contextTheme}>
      <Banner title="Carrito" description="Productos en tu carrito" />

      {/* ============================================ */}
      {/* 🧱 FILA PRINCIPAL: TABLA + RESUMEN */}
      {/* ============================================ */}
      <Row className="g-4 px-2 px-md-5 d-flex align-items-stretch">

        {/* 🧩 COLUMNA IZQUIERDA: TABLA DE PRODUCTOS */}
        <Col xs={12} md={7} className="order-2 order-md-1 d-flex flex-column">
         
          <div className=" p-2 p-md-4 rounded-4 flex-grow-1 h-100" id={contextTheme}>
            <h3 className="text-center fw-light">Detalle del Carrito</h3>
            <br /> <small> 👉 ↔ Deslizá la tabla para ver más columnas en pantallas pequeñas.</small>
            <Table
              size="sm"
              striped
              bordered
              hover
              responsive
              className="table-light text-primary"
            >
              <thead>
                <tr className="table-dark text-center">
                  <th>Producto</th>
                  <th>Imagen</th>
                  <th>Talle</th>
                  <th>Color</th>
                  <th>Cantidad</th>
                  <th>Precio x un.</th>
                  <th>Dto.</th>
                  <th>Borrar</th>
                </tr>
              </thead>

              {cart.map((item) => (
                <tbody
                  key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                >
                  <tr>
                    <td className="fw-medium">{item.nombre}</td>

                    <td>
                      <img
                        src={item.image}
                        alt={item.nombre}
                        className="item-thumbnail"
                      />
                    </td>

                    <td className="text-center">
                      {item.selectedSize || "N/A"}
                    </td>

                    <td className="text-center">
                      <div
                        className="color-badge selected"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                    </td>

                    {/* ➕➖ Cantidad */}
                    <td className="text-center">
                      <div className="btn-group bg-secondary">
                        <Boton
                          texto="-"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="btn-link bg-transparent border-0 fw-bold text-black"
                        />
                        <Boton
                          texto={item.quantity}
                          className="fw-bold border-0 text-black"
                          disabled
                        />
                        <Boton
                          texto="+"
                          onClick={() => updateQuantity(item.id, +1)}
                          className="btn-link bg-transparent border-0 fw-bold text-black"
                        />
                      </div>
                    </td>

                    {/* 💲 Precio */}
                    <td className="text-end">
                      {formatearPrecio(item.precio)}.<sup>00</sup>
                    </td>

                    {/* 🏷️ Descuento */}
                    <td className="text-center">{item.descuento}%</td>

                    {/* 🗑️ Eliminar */}
                    <td>
                      <Boton
                        texto="Eliminar"
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-danger me-2"
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </Col>

        {/* ============================================ */}
        {/* 💵 COLUMNA DERECHA: RESUMEN */}
        {/* ============================================ */}
        <Col xs={12} md={5} className="order-1 order-md-2 d-flex flex-column">
          <div className="  p-2 p-md-4 rounded-4 flex-grow-1 h-100" id={contextTheme}>
            <h3 className="text-center fw-light">Resumen del Pedido</h3>

            <Table
              size="sm"
              striped
              bordered
              hover
              responsive
              className="table-light text-primary"
            >
              <thead className="fondo-resumen text-primary">
                <tr className="table-light text-start">
                  <th>Detalle</th>
                  <th className="text-end">Importe</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>SubTotal ({resumen.cantidadTotal} items)</td>
                  <td className="text-end">
                    {formatearPrecio(
                      resumen.subtotal + resumen.descuentoTotal
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Descuento productos</td>
                  <td className="text-end">
                    {formatearPrecio(resumen.descuentoTotal)}
                  </td>
                </tr>

                <tr>
                  <td>Impuestos (IVA 21%)</td>
                  <td className="text-end">
                    {formatearPrecio(resumen.impuestos)}
                  </td>
                </tr>

                <tr>
                  <td>Cargo por envío</td>
                  <td className="text-end">
                    {formatearPrecio(resumen.envio)}
                  </td>
                </tr>

                <tr className="bg-secondary">
                  <td>
                    <b>Total</b>
                  </td>
                  <td className="text-end">
                    <b>{formatearPrecio(resumen.total)}</b>
                  </td>
                </tr>
              </tbody>
            </Table>

            {/* 🔘 BOTONES */}
            <div className="mt-3 d-flex justify-content-around">
              <Boton
                texto="Finalizar Compra"
                onClick={handleFinalizarCompra}
                className="btn btn-success"
              />

              <Boton
                texto="Cancelar Compra"
                onClick={clearCart}
                className="btn btn-secondary"
              />
            </div>

            {/* 🏷️ MENSAJE DE DESCUENTO */}
            {resumen.descuentoTotal > 0 && (
              <p className="item-line-total mt-3 text-center">
                Descuento aplicado:{" "}
                {formatearPrecio(
                  resumen.descuentoTotal + resumen.descuentoEnvio
                )}
                <br />
                Ahorrar así da gusto 😎
              </p>
            )}
          </div>
        </Col>
      </Row>

      {/* ============================================ */}
      {/* 💳 MÉTODOS DE PAGO */}
      {/* ============================================ */}
      <hr className="full-width-separator" />

      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2>Métodos de Pago</h2>
        <p>Aceptamos las siguientes formas de pago:</p>

        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <div>💳 Visa / Mastercard</div>
          <div>💵 Pago Fácil / Rapipago</div>
          <div>🏦 Transferencia Bancaria</div>
          <div>🛍️ Mercado Pago</div>
        </div>

        <p className="text-success">🔒 Pago seguro garantizado.</p>
      </div>
    </Container>
  );
}
