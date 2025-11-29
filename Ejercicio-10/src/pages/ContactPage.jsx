// ============================================
// src/pages/ContactPage.jsx
// Página de contacto responsive y centrada
// Layout corregido con Row + Col + gap de Bootstrap
// Sin márgenes manuales que rompan el centrado
// ============================================

import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { Container, Row, Col, Form, Modal } from "react-bootstrap";
import Boton from "../components/Boton";
import Banner from "../components/Banner";
import imagelogo from "../assets/favicon1.png";

const Contact = () => {
  const { contextTheme } = useThemeContext();

  // ==============================
  // Estados del formulario
  // ==============================
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ocontacts, setOcontacts] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showModal, setShowModal] = useState(false);

  // ==============================
  // Enviar formulario
  // ==============================
  const handleEnviar = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  // ==============================
  // Cerrar modal y limpiar
  // ==============================
  const handleCerrarModal = () => {
    setShowModal(false);
    setNombre("");
    setEmail("");
    setOcontacts("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <Container id={contextTheme} className="my-4 my-md-5">
      <Banner title="Contacto" description="Medios de comunicación" />

      {/* ============================================ */}
      {/* FILA PRINCIPAL - CENTRADA Y CON GAP */}
      {/* ============================================ */}
      <Row className="justify-content-center g-4">

        {/* ============================================ */}
        {/* COLUMNA IZQUIERDA - INFO DE CONTACTO */}
        {/* ============================================ */}
        <Col xs={12} md={5}>
          <div className="rounded-4 p-4 h-100" id={contextTheme}>
            <h3 className="d-flex align-items-center gap-3 fw-light">
              <img
                src={imagelogo}
                className="logo rounded logo-pequeno"
                alt="Logo"
                style={{ width: "80px", height: "80px" }}
              />
              Nuestros Contactos
            </h3>

            <p className="textoJustify py-3">
              No dudes en comunicarte con nosotros ante cualquier duda,
              consulta, opinión, idea, propuesta, comentario o queja sobre
              nuestros productos. Estamos aquí para ayudarte.
              <br /><br />
              <span className="text-warning">ZapaShop</span><br />
              <small className="text-info">
                Dto. Marketing y Comunicaciones
              </small>
            </p>

            {/* Redes */}
            <div className="d-flex justify-content-around flex-wrap gap-3 py-3">
              <span title="WhatsApp">
                <i className="bi bi-whatsapp text-success fs-1 icono-interactivo"></i>
              </span>
              <span title="Instagram">
                <i className="bi bi-instagram text-danger fs-1 icono-interactivo"></i>
              </span>
              <span title="X">
                <i className="bi bi-twitter-x text-secondary fs-1 icono-interactivo"></i>
              </span>
              <span title="Facebook">
                <i className="bi bi-facebook text-info fs-1 icono-interactivo"></i>
              </span>
              <span title="Teléfono">
                <i className="bi bi-phone text-secondary fs-1 icono-interactivo"></i>
              </span>
            </div>
          </div>
        </Col>

        {/* ============================================ */}
        {/* COLUMNA DERECHA - FORMULARIO */}
        {/* ============================================ */}
        <Col xs={12} md={5}>
          <div className="rounded-4 p-4 h-100" id={contextTheme}>
            <h3 className="text-center fw-light">✉ Contacto</h3>
            <hr />

            <Form onSubmit={handleEnviar}>
              {/* Nombre + Email */}
              <Row className="g-3 mb-3">
                <Col xs={12} md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Nombre completo"
                    name="nombre"
                    id="inputNombre"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </Col>

                <Col xs={12} md={6}>
                  <Form.Control
                    type="email"
                    placeholder="Tu email"
                    name="email"
                    id="inputEmail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>

              {/* Otros contactos + Asunto */}
              <Row className="g-3 mb-3">
                <Col xs={12} md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Otros contactos"
                    name="ocontacts"
                    id="inputOcontact"
                    value={ocontacts}
                    onChange={(e) => setOcontacts(e.target.value)}
                  />
                </Col>

                <Col xs={12} md={6}>
                  <Form.Select
                    name="asunto"
                    id="asunto"
                    required
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                  >
                    <option value="">Seleccionar</option>
                    <option value="devolucion">Devolución</option>
                    <option value="consulta">Consulta</option>
                    <option value="envios">Departamento de envíos</option>
                    <option value="facturacion">Facturación</option>
                    <option value="otro">Otro</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Mensaje */}
              <Row className="mb-3">
                <Col xs={12}>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tu mensaje"
                    name="mensaje"
                    id="inputMensaje"
                    required
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                  />
                </Col>
              </Row>

              {/* Botón */}
              <Row className="mt-3">
                <Col xs={12} className="d-grid">
                  <Boton
                    texto="📩 Enviar"
                    className="btn btn-primary"
                    type="submit"
                  />
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>

      {/* ============================================ */}
      {/* MODAL */}
      {/* ============================================ */}
      <Modal show={showModal} onHide={handleCerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Enviado!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Otros contactos:</strong> {ocontacts}</p>
          <p><strong>Asunto:</strong> {asunto}</p>
          <p><strong>Mensaje:</strong> {mensaje}</p>
          <hr />
          <p>Tu mensaje ha sido enviado exitosamente ✅ (Demo)</p>
        </Modal.Body>

        <Modal.Footer>
          <Boton
            texto="Cerrar"
            className="btn btn-primary"
            onClick={handleCerrarModal}
          />
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
