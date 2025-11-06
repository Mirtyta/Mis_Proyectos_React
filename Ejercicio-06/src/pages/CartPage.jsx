// ============================================
// src/pages/CartPage.jsx
// ============================================
import { useState } from "react";
import { useCarritoContext } from "../hooks/useCarritoContext";
import { formatearPrecio, calcularResumenCarrito } from "../utils/calculos";
import Boton from "../components/Boton";
import Banner from "../components/Banner";
import { Container, Table } from "react-bootstrap";
import "./CartPage.css";

export default function Carrito() {
  const { cart, removeFromCart, updateQuantity, clearCart, isEmpty } =
    useCarritoContext();
  const [codigo, setCodigo] = useState("");
  const resumen = calcularResumenCarrito(cart, codigo);

  if (isEmpty) {
    return (
      <Container className="fondo-page min-vh-100">
         <Banner
          title="Tu Carrito de Compras"
          description={
            <>
            <i className= "bi bi-bag-x text-danger fs-2"></i>  Tu carrito está vacío. ¡Explorá nuestros productos en la tienda!
            </>
          }
          
        />
        
      </Container>
    );
  }

  return (
    <Container className="fondo-page">
      <Banner
        title="Tu carrito de compras"
        description="Productos del carrito"
      />

      <div className="main-content">
        {/* 🧩 Columna Izquierda: Detalles del Producto */}
        <div className="detalles-internos product-details-column table-responsive">
          <Table hover size="sm">
            <thead>
              <tr>
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
            >
              <tr>
                <td>{item.nombre}</td>
                <td className="text-center">
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
                  <div className="color-badge selected" style={{ backgroundColor: item.selectedColor }}></div>
            
                </td>
                <td className="text-center">
                  <div className="btn-group bg-secondary">
                  <Boton texto="-" onClick={() => updateQuantity(item.id, -1)} className="btn-link bg-transparent text-decoration-none me-1 fw-bold border-0  text-black"/>
                  <Boton texto= {item.quantity} className="fw-bold border-0 text-black" disabled/>
                  <Boton texto="+" onClick={() => updateQuantity(item.id, +1)} className="btn-link bg-transparent text-decoration-none me-1 fw-bold border-0  text-black"/>
                  </div>
                </td>
                <td className="text-end">
                  <span>{formatearPrecio(item.precio)}.<sup>00</sup></span>
                </td>
                <td className="text-center">
                  {item.descuento * 100}%
                </td>
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
        <div className="detalles-internos totals-column fondo-resumen">
          <h2>Resumen del Pedido</h2>
          <Table hover size="sm" className="table-borderless fondo-light">
            <thead className="fondo-resumen">
              <tr>
                <th>Detalle</th>
                <th>Importe</th>
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
                <td>Descuentos:</td>
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
                <td>Costo envío:</td>
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

          {/* 🎫 Campo para código de descuento */}
          <div className="mt-3">
            <label htmlFor="codigo" className="form-label fw-bold">
              Ingrese el código "ENVIOGRATIS":
            </label>
            <input
              id="codigo"
              type="text"
              className="form-control mb-2 bg-warning opacity-75 text-black"
              placeholder="Tipea ENVIOGRATIS y recibí el Dto."
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>

          <div className="mt-3">
             <Boton
              texto="Ir a pagar"
              onClick={() => alert("Aquí iría el flujo de pago")}
              className="btn btn-success py-2 px-2"
            />
            <Boton
              texto="Cancelar Compra"
              onClick={clearCart}
              className="btn btn-warning py-2 px-2"
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
