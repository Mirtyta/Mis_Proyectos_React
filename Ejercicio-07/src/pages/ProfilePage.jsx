// ============================================
// src/pages/ProfilePage.jsx
// ============================================

import { useState, useEffect } from "react";
import { Container, Card, Table, Form, Button } from "react-bootstrap";
import Banner from "../components/Banner";


export default function ProfilePage() {
  const [lastCheckout, setLastCheckout] = useState(null); 
   // Recuperamos estado de autenticación y username, y su rol desde sessionStorage
  const username = sessionStorage.getItem("username");
  const role = sessionStorage.getItem("role");

  useEffect(() => {
     // Traer último pago simulado
    const pago = sessionStorage.getItem("ultimoPago");
    if (pago) setLastCheckout(JSON.parse(pago));
  }, []);



  return (
    <Container className="fondo-page py-5">
      <Banner
        title="👤 Mi Perfil"
        description="Datos del usuario y últimos pagos"
      />

      <Card className="mb-4 shadow-sm detalles-internos"  style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Card.Header className="bg-dark text-white">Datos del Usuario</Card.Header>
        <Card.Body>
          <Table borderless size="sm">
            <tbody>
              <tr>
                <td>Nombre:</td>
                <td>{username || "No registrado"}</td>
              </tr>

              <tr>
                <td>Rol:</td>
                <td>{role || "No asignado"}</td>
              </tr>
              <tr>
                <td>Contraseña:</td>
                <td>********</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {lastCheckout ? (
        <Card className="shadow-sm detalles-internos">
          <Card.Header className="bg-success text-white">Último Pago</Card.Header>
          <Card.Body>
            <Table borderless size="sm">
              <tbody>
                <tr>
                  <td>Método de pago:</td>
                  <td>{lastCheckout.metodoPago}</td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>
                    {lastCheckout.total.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>Fecha:</td>
                  <td>{new Date(lastCheckout.fecha).toLocaleString()}</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      ) : (
        <Card className="shadow-sm detalles-internos">
          <Card.Body className="text-center">
            <p>No has realizado ningún pago todavía.</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
