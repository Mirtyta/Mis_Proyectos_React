// ============================================
// src/components/ContactForm.jsx
// ============================================
import { useState } from 'react'
import { Card, Form, Container, Row, Col } from 'react-bootstrap'
import Boton from './MiBoton'
import Banner from './MiBanner'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      alert('¡Mensaje enviado! (esto es una demo)')
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
        <Banner
          title="Contáctanos"
          description="Dejanos tu comentario"
          />
          <Card className="shadow">
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="nameInput">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tu nombre"
                     // 2. El control DEBE tener un 'id' que coincida con 'htmlFor' 
                     // de la etiqueta.
                    id="nameInput" 
                    
                    // 3. (Opcional, pero recomendado) Asegúrate de que tenga el 'name'
                    //    para el envío de formularios.
                    name="name" 
                    // AÑADE ESTO: Le dice al navegador que este campo es el nombre completo del usuario
                    autoComplete="name"     
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="emailInput">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="tu@email.com"
                    id="emailInput"
                    name="email"
                    autoComplete="email"  
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="messageTextarea">Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Escribe tu mensaje..."
                    id="messageTextarea"
                    name='Textarea'
                    autoComplete="off"  
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    required
                  />
                </Form.Group>

                <Boton 
                  texto="Enviar Mensaje"
                  variant="primary" 
                  type="submit" 
                  className="w-100"/>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
