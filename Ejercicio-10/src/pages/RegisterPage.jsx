// src/pages/RegisterPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import { useThemeContext } from "../context/ThemeContext";

export default function RegisterPage() {
  const { contextTheme } = useThemeContext();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!nombre || !email || !username || !password || !telefono) {
      Swal.fire("Error", "Todos los campos son obligatorios.", "error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email || u.username === username)) {
      Swal.fire("Error", "Usuario o email ya existe.", "error");
      return;
    }

    const newUser = { nombre, email, username, password, telefono };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire("¡Registrado!", "Ya podés iniciar sesión.", "success");
    navigate("/login");
  };

  return (
    <Container className="py-5" id={contextTheme}>
      <Banner title="Registro" description="Crea tu cuenta" />
      <form onSubmit={handleRegister} className="text-center p-2 p-md-5" id={contextTheme} style={{ maxWidth: 600, margin: "0 auto" }}>
        <input
          type="text"
          id="Nombre"
          name="Nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
          autoComplete="off"
          required
        />
        <input
          type="text"
          id="telefono"
          name="telefono"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="text"
          id="usuario"
          name="usuario"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
          required
        />
        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
      </form>
    </Container>
  );
}
