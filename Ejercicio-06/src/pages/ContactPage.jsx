// ============================================
// src/pages/ContactPage.jsx
// ============================================
import { useState } from "react";
import { Container, Row, Col, Form, Modal } from "react-bootstrap";
import Boton from "../components/Boton";
import Banner from "../components/Banner"
import imagelogo from "../assets/favicon1.png";

const Contact = () => {
	// States para los inputs del formulario
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [ocontacts, setOcontacts] = useState("");
	const [asunto, setAsunto] = useState("");
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
		setOcontacts("");
		setAsunto("");
		setMensaje("");
	};

	return (
		<div>
			
			<Container className="fondo-light">
				{/* Pasa el título y el párrafo como props */}
				<Banner 
					title="Contacto" 
					description="Opciones de comunicación." 
				/>
				<Row className="align-items-center py-5">
					{/* Columna izquierda: opciones de contacto */}
					<Col md={6} className="mb-5 mt-3">
						<h3 className="d-flex align-items-center gap-3">
							<hr />
							<img
								src={imagelogo}
								className="logo rounded logo-pequeno"
								alt="Logo"
								style={{ width: "80px", height: "80px" }}
							/>
							Nuestros Contactos
						</h3>
						<p className='textoJustify'>
							No dudes en comunicarte con nosotros ante cualquier duda, 
							consulta, opinión, idea, propuesta, comentario o queja 
							sobre nuestros productos, estamos aquí 
							para escucharte y solucionar cualquier tema que te surja, 
							esperamos tus mensajes. <br /><br />
							<span className="text-warning">ZapaShop</span><br />
							<small className="text-info">Dto.Marketing y Comunicaciones</small></p>
						<p className="d-flex justify-content-around">
							<span title="Comunicate por whatsapp" className="red"><i className="bi bi-whatsapp text-success fs-1 icono-interactivo"></i></span>
							<span title="Unete a nuestro Instagram" className="red"><i className="bi bi-instagram text-danger fs-1 icono-interactivo"></i></span>
							<span title="Comunicate por X" className="red"><i className="bi bi-twitter-x text-secondary fs-1 icono-interactivo"></i></span>
							<span title="Nuestra página de facebook" className="red"><i className="bi bi-facebook text-info fs-1 icono-interactivo"></i></span>
							<span title="Linea atencion a Clientes" className="red"><i className="bi bi-phone text-secondary fs-1 icono-interactivo"></i></span>
						</p>
					</Col>

					{/* Columna derecha: formulario */}
					<Col  md={6} className="mb-5 mt-3">
						<h3>✉ Contacto</h3>
						<hr />
						<Form>
							{/* Fila Nombre + Email */}
							<Row md={9} className="mb-3 me-1">
								<Col>
									<Form.Control
										type="text"
										placeholder="Nombre completo"
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
							{/* Fila Otros contactos y asunto select */}
							<Row md={9} className="mb-3  me-1">
								<Col>
									<Form.Control
										type="text"
										placeholder="Otros contactos"
										name="ocontacts"         // <-- Agrega el atributo 'name'
        						id="inputOcontact"       // <-- Agrega el atributo 'id'
										autoComplete="off"
										value={ocontacts}
										onChange={(e) => setOcontacts(e.target.value)}
									/>
								</Col>
								<Col>
									<Form.Control
										as="select"
										name="asunto"
										id="asunto"
										autoComplete="off"
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
									</Form.Control>
								</Col>

							</Row>

							{/* Fila Mensaje */}
							<Row md={9} className="mb-3  me-1">
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
							<Row className="mb-3  me-1">
								<Col>
									<Boton 
									texto="📩 Enviar" 
									className ="btn btn-primary" 
									onClick={handleEnviar} />
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>
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
						<strong>Otros contactos:</strong> {ocontacts}
					</p>
					<p>
						<strong>Asunto:</strong> {asunto}
					</p>
					<p>
						<strong>Mensaje:</strong> {mensaje}
					</p>
					<hr />
					<p>Tu mensaje ha sido enviado exitosamente!! (Esto es una Prueba)</p>
				</Modal.Body>
				<Modal.Footer>
					<Boton 
					texto="Cerrar" 
					className ="btn btn-primary"
					onClick={handleCerrarModal} />
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Contact;
