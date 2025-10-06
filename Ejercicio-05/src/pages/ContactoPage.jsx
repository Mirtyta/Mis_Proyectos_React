// ============================================
// src/pages/ContactoPage.jsx
// ============================================
import { Container } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'

export default function ContactoPage() {
  return (
    <Container className="py-4">
      <ContactForm />
    </Container>
  )
}