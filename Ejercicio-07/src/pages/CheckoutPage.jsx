import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarritoContext } from "../hooks/useCarritoContext";
import { formatearPrecio, calcularResumenCarrito } from "../utils/calculos";
import { Container, Form, Button, Card, Table } from "react-bootstrap";
import Banner from "../components/Banner";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, clearCart, saveLastCheckout } = useCarritoContext();

  const [email, setEmail] = useState("");
  const [metodoPago, setMetodoPago] = useState("");

  const [codigo, setCodigo] = useState("");

 // Calculamos el resumen con todos los campos
  const resumen = calcularResumenCarrito(cart, codigo);

  const handlePagoSimulado = () => {
    if (!email || !metodoPago) {
      alert("Completa todos los campos antes de pagar.");
      return;
    }

    const pagoSimulado = {
      email,
      metodoPago,
      total: resumen.total,
      fecha: new Date().toISOString(),
    };

    // Guardamos en contexto y sessionStorage
    saveLastCheckout(pagoSimulado);

    clearCart();
    alert(`Pago simulado exitoso 💳\nTotal: ${formatearPrecio(resumen.total)}\nMétodo: ${metodoPago}`);
    navigate("/");
  };

  return (
    <Container className="fondo-page py-5">
      <Banner 
        title="💳 Checkout - Factura" 
        description="Abonar Productos" 
      />

      <Card className="mb-4 shadow-sm detalles-internos"  style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Card.Header className="bg-dark text-white">Resumen de Pago</Card.Header>
        <Card.Body>
          <Table borderless size="sm">
            <tbody>
              <tr>
                <td>Subtotal ({resumen.cantidadTotal} items):</td>
                <td className="text-end">{formatearPrecio(resumen.subtotal + resumen.descuentoTotal)}.<sup>00</sup></td>
              </tr>
              <tr>
                <td>Descuento productos:</td>
                <td className="text-end">-{formatearPrecio(resumen.descuentoTotal)}.<sup>00</sup></td>
              </tr>
              <tr>
                <td>Impuestos (IVA 21%):</td>
                <td className="text-end">{formatearPrecio(resumen.impuestos)}.<sup>00</sup></td>
              </tr>
              <tr>
                <td>Cargo por envío:</td>
                <td className="text-end">{formatearPrecio(resumen.envio)}.<sup>00</sup></td>
              </tr>
              <tr>
                <td>Descuento envío:</td>
                <td className="text-end">-{formatearPrecio(resumen.descuentoEnvio)}.<sup>00</sup></td>
              </tr>
              <tr>
                <td colSpan="2" style={{ height: "10px" }}></td>
              </tr>
              <tr className="bg-secondary fw-bold">
                <td>Total a pagar:</td>
                <td className="text-end">{formatearPrecio(resumen.total)}.<sup>00</sup></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Form style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
            id="email"
            autoComplete="email"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Método de pago</Form.Label>
          <Form.Select
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
            required
            name="metodoPago"
            id="metodoPago"
            autoComplete="off"
          >
            <option value="">Selecciona un método</option>
            <option value="visa">💳 Visa / Mastercard</option>
            <option value="pagoFacil">💵 Pago Fácil / Rapipago</option>
            <option value="transferencia">🏦 Transferencia Bancaria</option>
            <option value="mercadoPago">🛍️ Mercado Pago</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Código de descuento</Form.Label>
          <Form.Control
            type="text"
            placeholder='Escribe "enviogratis"'
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </Form.Group>

        <Button className="w-100 mb-3" variant="success" onClick={handlePagoSimulado}>
          Finalizar Pago
        </Button>
      </Form>

      <Card className="shadow-sm">
        <Card.Body className="text-center">
          <p>Métodos de pago aceptados:</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <div>💳 Visa / Mastercard</div>
            <div>💵 Pago Fácil / Rapipago</div>
            <div>🏦 Transferencia Bancaria</div>
            <div>🛍️ Mercado Pago</div>
          </div>
          <p className="text-success mt-2">🔒 Pago seguro garantizado</p>
        </Card.Body>
      </Card>
    </Container>
  );
}
