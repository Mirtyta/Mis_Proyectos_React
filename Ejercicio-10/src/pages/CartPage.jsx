// ============================================
// src/pages/CartPage.jsx
// Página de carrito: muestra items, resumen y botones.
// El botón "Finalizar Compra" ahora navega a /checkout.
// Si el usuario no está autenticado, la ruta /checkout lo redirigirá a /login
// y luego LoginPage lo devolverá al checkout automáticamente.
// ============================================
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../hooks/useCarritoContext";
import { useProducts } from "../context/ProductsContext";
import { useCart } from "../hooks/useCart";
import { useThemeContext } from "../context/ThemeContext";

import { formatearPrecio, calcularResumenCarrito } from "../utils/calculos";
import Boton from "../components/Boton";
import Banner from "../components/Banner";
import { Container, Table, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard"
import "./CartPage.css";

export default function Carrito() {

      // contexto para Theme
  const {contextTheme} = useThemeContext()
  // Navegación programática para ir a /checkout
  const navigate = useNavigate();

  const { productos } = useProducts();
  const productosNuevos = productos.filter((p) => p.nuevo);
  const { addToCart } = useCart();

  // Context del carrito: lista, funciones para modificar y flag isEmpty 
  const { cart, removeFromCart, updateQuantity, clearCart, isEmpty } =
    useCartContext();
  // Resumen del pedido: subtotal, impuestos, total, etc.
  const resumen = calcularResumenCarrito(cart);

  // Si el carrito está vacío, Muestra un banner
  if (isEmpty) {
    return (
      <Container className="min-vh-100" id={contextTheme}>
        <Banner
          title="Tu Carrito de Compras"
          description={
            <>
            <i className= "bi bi-bag-x text-danger fs-2"></i>  Tu carrito está vacío. ¡Explorá nuestras Tienda de productos!
            </>
          }
          
        />
        <div className="cart-image-promo bg-secondary mx-5 p-5 rounded-5 bg-body-secondary position-relative overflow-hidden">  
        <h5 className=" badge fs-3 fw-bolder bg-success rounded-4 z-n1">¡Nuevos!</h5>
        <h5 className="ms-4 fs-5 fw-bolder text-danger fst-italic">Mirá los últimos lanzamientos de nuestra tienda</h5>
        <h5 className="ms-4 fs-3 fst-italic text-primary">Productos que podrían gustarte</h5>
        </div>
        <hr />
        
        <Row className="align-items-stretch pb-5 px-5">
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
  // Maneja clic en "Finalizar Compra"
  // Simplemente navegamos a /checkout; RutaProtegida se encargará de
  // redirigir al login si no está autenticado.
  const handleFinalizarCompra = () => {
  // Navegamos a checkout
  navigate("/checkout");
};



  return (
    <Container id={contextTheme}>
      <Banner title="Carrito" description={'Productos en tu carritos'} />
      <div className="main-content d-flex justify-content-center gap-5">        
        {/* 🧩 Columna Izquierda: Detalles del Producto */}
        <div className="order-2 order-md-1 p-5 ms-5 rounded-4" id={contextTheme}>          
          <Table size="sm"  striped bordered hover responsive className="table-light p-4 text-primary">
            <thead>
              <tr  className="table-dark text-center">
                <th>Producto</th>
                <th>Imagen</th>
                <th>Talle</th>
                <th>color</th>
                <th>Cantidad</th>
                <th>Precioxun.</th>
                <th>Dto.</th>
                <th>Borrar</th>
              </tr>
            </thead>
            {cart.map((item) => (
            <tbody
            key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
            className=" text-primary"
            >
              <tr>
                {/* Nombre producto */}
                <td className=" fw-medium">{item.nombre}</td>
                {/* Imagen */}
                <td>
                  <img
                    src={item.image}
                    alt={item.nombre}
                    className="item-thumbnail"
                  />
                </td>
                {/* Talle */}
                <td className="text-center">
                  {item.selectedSize || "N/A"}
                </td>
                {/* Color */}
                <td className="text-center">
                  <div className="color-badge selected" style={{ backgroundColor: item.selectedColor }}>
                  </div>
                </td>
                {/* Cantidad */}
                <td className="text-center">
                  <div className="btn-group bg-secondary">
                  <Boton texto="-" onClick={() => updateQuantity(item.id, -1)} className="btn-link bg-transparent text-decoration-none me-1 fw-bold border-0  text-black"/>
                  <Boton texto= {item.quantity} className="fw-bold border-0 text-black" disabled/>
                  <Boton texto="+" onClick={() => updateQuantity(item.id, +1)} className="btn-link bg-transparent text-decoration-none me-1 fw-bold border-0  text-black"/>
                  </div>
                </td>
                {/* Precio */}
                <td className="text-end">
                  <span>{formatearPrecio(item.precio)}.<sup>00</sup></span>
                </td>
                {/* Descuento */}
                <td className="text-center">
                  {item.descuento}%
                </td>
                {/* Boton eliminar */}
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

        {/* 💵 Columna Derecha: Totales */}
        <div className="order-1 order-md-2 p-5 me-5 rounded-4" id={contextTheme}>
          <h3 className=" py-3 text-center">Resumen del Pedido</h3>
          <Table size="sm"  striped bordered hover responsive className="table-light p-5 text-primary">
            <thead className="fondo-resumen">
              <tr className="table-dark text-center">
                <th>Detalle</th>
                <th  className="text-end">Importe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SubTotal ({resumen.cantidadTotal} items):</td>
                <td className="text-end">
                  {formatearPrecio(resumen.subtotal + resumen.descuentoTotal)}.<sup>00</sup>
                </td>
              </tr>

              <tr>
                <td>Descuento productos:</td>
                <td className="text-end">
                  {formatearPrecio(resumen.descuentoTotal)}.<sup>00</sup>
                </td>
              </tr>

              <tr>
                <td>Impuestos (IVA 21%):</td>
                <td className="text-end">
                  {formatearPrecio(resumen.impuestos)}.<sup>00</sup>
                </td>
              </tr>

              <tr>
                <td>Cargo por envío:</td>
                <td className="text-end">{formatearPrecio(resumen.envio)}.<sup>00</sup></td>
              </tr>

              <tr>
                <td>Descuento envío:</td>
                <td className="text-end">
                  {formatearPrecio(resumen.descuentoEnvio)}.<sup>00</sup>
                </td>
              </tr>

              {/* Espacio visual */}
              <tr>
                <td colSpan="2" style={{ height: "10px" }}></td>
              </tr>

              <tr className="bg-secondary">
                <td>
                  <b>Importe Total:</b>
                </td>
                <td className="text-end">
                  <b>{formatearPrecio(resumen.total)}.<sup>00</sup></b>
                </td>
              </tr>
            </tbody>
          </Table>

          <div className="mt-3 d-flex justify-content-around">          
            <Boton
              texto="Finalizar Compra"
              onClick={handleFinalizarCompra}
              className="btn btn-success"
            />
              <Boton
              texto="Cancelar Compra"
              onClick={clearCart}
              className="btn btn-secondary me-2"
            />
          </div>
          <div>
            {/* 🏷️ Si hay descuento o condiciones */}
                {resumen.descuentoTotal > 0 && (
                  <>
                    <p className="item-line-total">
                      Descuento aplicado: {formatearPrecio(resumen.descuentoTotal + resumen.descuentoEnvio)}.<sup>00</sup> <br />
                      Ahorrar así da gusto. ¡Seguí chusmeando! 😎
                    </p>
                  </>
                )}
          </div>
        </div>
      </div>

      <hr className="full-width-separator" />

      {/* 💳 Footer: Métodos de pago */}
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2>Métodos de Pago</h2>
        <p>Aceptamos las siguientes formas de pago:</p>
        <div className=" d-flex justify-content-center align-items-center flex-wrap">
          <div>💳 Visa / Mastercard</div>
          <div>💵 Pago Fácil / Rapipago</div>
          <div>🏦 Transferencia Bancaria</div>
          <div>🛍️ Mercado Pago</div>
        </div>
        <p className=" text-success">🔒 Pago seguro garantizado.</p>
      </div>
    </Container>
  );
}
