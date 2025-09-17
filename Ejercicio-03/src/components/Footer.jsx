import React, { useState } from "react";
import { Container, Row, Col, Form, Modal } from "react-bootstrap";
import Boton from "./Boton";
import imagelogo from "../assets/logo.png";
import "../App.css";
import "./Footer.css";

const Footer = () => {
	// States para los inputs del formulario
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [mensaje, setMensaje] = useState("");
	const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal

	// Función para mostrar modal al enviar
	const handleEnviar = (e) => {
		e.preventDefault(); // Evita que la página se recargue
		setShowModal(true); // Muestra el modal con los datos ingresados
	};

	// Función para cerrar modal y limpiar formulario
	const handleCerrarModal = () => {
		setShowModal(false);
		setNombre("");
		setEmail("");
		setMensaje("");
	};

	return (
		<footer id="contacto" className="bg-dark text-light pt-5">
			<Container>
				<Row className="text-center text-md-start justify-content-between">
					{/* Columna izquierda: identidad */}
					<Col md={3} className="mb-5">
						<h3 className="d-flex align-items-center gap-2">
							<hr />
							<img
								src={imagelogo}
								className="img-fluid rounded shadow logo-pequeno"
								alt="Logo"
								style={{ width: "50px", height: "50px" }}
							/>
							Mi Proyecto
						</h3>
						<p>
							Este es mi proyecto con React + Vite. <br />
							Podés ver más en mi perfil de GitHub{" "}
							<a
								href="https://github.com/Mirtyta/Mis_Proyectos_React"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={imagelogo}
									className="img-fluid logo-pequeno rounded shadow"
									alt="Mi logo"
									style={{ width: "25px", height: "25px" }}
								/>
							</a>
							<br />
							Mis apuntes, errores y soluciones en React 🚀
						</p>
					</Col>

					{/* Columna Centro: formulario */}
					<Col md={5} className="mb-3">
						<h3>📩 Contacto</h3>
						<hr />
						<Form>
							{/* Fila Nombre + Email */}
							<Row className="mb-3">
								<Col>
									<Form.Control
										type="text"
										placeholder="Nombre"
										name="nombre"         // <-- Agrega el atributo 'name'
        						id="inputNombre"       // <-- Agrega el atributo 'id'
										autoComplete="nombre"
										required
										value={nombre}
										onChange={(e) => setNombre(e.target.value)}
									/>
								</Col>
								<Col>
									<Form.Control
										type="email"
										placeholder="Tu email"
										name="email"         // <-- Agrega el atributo 'name'
        						id="inputEmail"       // <-- Agrega el atributo 'id'
										autoComplete="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Col>
							</Row>

							{/* Fila Mensaje */}
							<Row className="mb-3">
								<Col>
									<Form.Control
										as="textarea"
										rows={3}
										placeholder="Tu mensaje"
										name="mensaje"         // <-- Agrega el atributo 'name'
        						id="inputMensaje"       // <-- Agrega el atributo 'id'
										autoComplete="off"
										required
										value={mensaje}
										onChange={(e) => setMensaje(e.target.value)}
									/>
								</Col>
							</Row>

							{/* Fila Botón enviar */}
							<Row>
								<Col>
									<Boton texto="📡 Enviar" tipo="Azul" onClick={handleEnviar} />
								</Col>
							</Row>
						</Form>
					</Col>

					{/* Columna derecha: recursos */}
					<Col md={3} className="mb-3">
						<h3>📚 Recursos</h3>
						<hr />
						<ul className="list-unstyled">
							<li>
								<a href="/recursos?slide=0" className="text-light text-decoration-none">
									Arquitectura del proyecto
								</a>
							</li>
							<li>
								<a href="/recursos?slide=1" className="text-light text-decoration-none">
									Codigo Limpio
								</a>
							</li>
							<li>
								<a href="/recursos?slide=2" className="text-light text-decoration-none">
									Errores & Fixes
								</a>
							</li>
							<li>
								<a href="/recursos?slide=3" className="text-light text-decoration-none">
									Herramientas esenciales
								</a>
							</li>
						</ul>
					</Col>
				</Row>

				<hr className="border-light" />

				<div className="text-center py-3">
					<p className="mb-0">
						© 2025 MiProyecto | Compartiendo errores para no repetirlos 😅
					</p>
				</div>
			</Container>

			{/* Modal con React-Bootstrap */}
			<Modal show={showModal} onHide={handleCerrarModal}>
				<Modal.Header closeButton>
					<Modal.Title>¡Enviado!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						<strong>Nombre:</strong> {nombre}
					</p>
					<p>
						<strong>Email:</strong> {email}
					</p>
					<p>
						<strong>Mensaje:</strong> {mensaje}
					</p>
					<hr />
					<p>Tu mensaje ha sido enviado exitosamente!!</p>
				</Modal.Body>
				<Modal.Footer>
					<Boton texto="Cerrar" tipo="Gris" onClick={handleCerrarModal} />
				</Modal.Footer>
			</Modal>
		</footer>
	);
};

export default Footer;
