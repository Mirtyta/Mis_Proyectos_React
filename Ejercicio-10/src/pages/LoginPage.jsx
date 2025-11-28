// ============================================
// src/pages/LoginPage.jsx
// Login con personajes animados a la izquierda.
// Cambia imagen y sonido según foco/hover (idle, user, password).
// ============================================

import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";


import Banner from "../components/Banner";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import "./LoginPage.css";

// IMPORTA tus imágenes (en src/assets)
import idleImg from "../assets/Iddle.png";     // estado idle
import userImg from "../assets/user.png";      // mirando al usuario
import passImg from "../assets/password.png";  // mirando hacia otro lado

export default function LoginPage() {
  const {contextTheme} = useThemeContext()
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";

  // Estado del formulario
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Estado del personaje: "idle" | "user" | "password"
  const [charState, setCharState] = useState("idle");

  // Imagen actual según el estado
  const currentImage = () => {
    if (charState === "user") return userImg;
    if (charState === "password") return passImg;
    return idleImg;
  };

  // Handlers de foco y hover
  const handleUserFocus = () => setCharState("user");
  const handlePassFocus = () => setCharState("password");
  const handleBlurToIdle = () => setCharState("idle");

  const userInputRef = useRef(null);
  const passInputRef = useRef(null);

  const handleUserMouseEnter = () => setCharState("user");
  const handleUserMouseLeave = () => {
    if (document.activeElement !== userInputRef.current) setCharState("idle");
  };

  const handlePassMouseEnter = () => setCharState("password");
  const handlePassMouseLeave = () => {
    if (document.activeElement !== passInputRef.current) setCharState("idle");
  };

  // Lógica de login (igual que antes)
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (username.trim() === "" || password.trim() === "") {
      setError("Usuario y contraseña son obligatorios.");
      return;
    }

    if (username.toLowerCase() === "admin" && password === "admin1234") {
      sessionStorage.setItem("auth", "true");
      sessionStorage.setItem("role", "admin");
      sessionStorage.setItem("username", username);
      
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: `Estas Loguedo!, ${username}!`
      });
      navigate("/admin");
      return;
    }

    sessionStorage.setItem("auth", "true");
    sessionStorage.setItem("role", "user");
    sessionStorage.setItem("username", username);
    
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: `${username}!, ya puedes hacer tu checkout!`
      });
    navigate(redirectPath);
  };

  return (
    <Container className="py-5" id={contextTheme}>
      <Banner title="Login" description="Ingreso o nueva cuenta" />
      <h2 className="mb-4 text-center">Iniciar sesión</h2>

      <div className="login-flex-wrapper">
        {/* Personaje a la izquierda */}
        <div className="characters-wrapper">
          <img
            src={currentImage()}
            alt="personajes del login"
            className={`character-img ${charState} active`}
            draggable="false"
          />
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="login-form-right" style={{ maxWidth: 600 }}>
          <div className="mb-3">
            <input
              type="text"
              id="usuario"
              name="usuario"
              className="form-control"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={handleUserFocus}
              onBlur={handleBlurToIdle}
              onMouseEnter={handleUserMouseEnter}
              onMouseLeave={handleUserMouseLeave}
              ref={userInputRef}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handlePassFocus}
              onBlur={handleBlurToIdle}
              onMouseEnter={handlePassMouseEnter}
              onMouseLeave={handlePassMouseLeave}
              ref={passInputRef}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>

          {error && <div className="alert alert-danger mt-3">{error}</div>}

          <p className="mt-3 text-muted small">
            Nota: para acceder como admin usa usuario <strong>admin</strong> y contraseña <strong>admin1234</strong>.
          </p>
        </form>
      </div>
    </Container>
  );
}
