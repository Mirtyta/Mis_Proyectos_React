// ============================================
// src/pages/LoginPage.jsx
// Login con personajes animados a la izquierda.
// Cambia imagen y sonido según foco/hover (idle, user, password).
// ============================================

import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Banner from "../components/Banner";
import { Container } from "react-bootstrap";
import "./LoginPage.css";

// IMPORTA tus imágenes (en src/assets)
import idleImg from "../assets/Iddle.png";     // estado idle
import userImg from "../assets/user.png";      // mirando al usuario
import passImg from "../assets/password.png";  // mirando hacia otro lado

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";

  // Estado del formulario
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Estado del personaje: "idle" | "user" | "password"
  const [charState, setCharState] = useState("idle");
  const lastStateRef = useRef(charState);

  // Refs para los sonidos
  const audioIdleRef = useRef(null);
  const audioUserRef = useRef(null);
  const audioPasswordRef = useRef(null);

  // Inicializar sonidos (colocar los archivos en public/sounds)
  useEffect(() => {
    audioIdleRef.current = new Audio("/sounds/idleA.mp3");          // sonido base cuando vuelve a idle
    audioUserRef.current = new Audio("/sounds/user_beep.mp3");      // al enfocar usuario
    audioPasswordRef.current = new Audio("/sounds/password_shush.mp3"); // al enfocar password

    // Volumen bajo por defecto
    [audioIdleRef, audioUserRef, audioPasswordRef].forEach(ref => {
      if (ref.current) ref.current.volume = 0.05;
    });

    return () => {
      [audioIdleRef, audioUserRef, audioPasswordRef].forEach(ref => {
        if (ref.current) {
          ref.current.pause();
          ref.current = null;
        }
      });
    };
  }, []);

  // Reproducir sonido cuando cambia de estado
  useEffect(() => {
    const last = lastStateRef.current;
    const curr = charState;
    lastStateRef.current = curr;

    if (last === curr) return; // no cambió

    try {
      if (curr === "idle") {
        audioIdleRef.current.currentTime = 0;
        audioIdleRef.current.play().catch(() => {});
      } else if (curr === "user") {
        audioUserRef.current.currentTime = 0;
        audioUserRef.current.play().catch(() => {});
      } else if (curr === "password") {
        audioPasswordRef.current.currentTime = 0;
        audioPasswordRef.current.play().catch(() => {});
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      // si el navegador bloquea autoplay, simplemente no suena
    }
  }, [charState]);

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

    if (username.toLowerCase() === "admin" && password === "1234") {
      sessionStorage.setItem("auth", "true");
      sessionStorage.setItem("role", "admin");
      sessionStorage.setItem("username", username);
      navigate("/admin");
      return;
    }

    sessionStorage.setItem("auth", "true");
    sessionStorage.setItem("role", "user");
    sessionStorage.setItem("username", username);
    navigate(redirectPath);
  };

  return (
    <Container className="py-5">
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
            Nota: para acceder como admin usa usuario <strong>admin</strong> y contraseña <strong>1234</strong>.
          </p>
        </form>
      </div>
    </Container>
  );
}
