// ============================================
// src/pages/LoginPage.jsx
// Form de login simple:
// - Si username === "admin" Y password === "1234" => role: 'admin'.
// - Si username y password no vacíos => role: 'user'.
// - Guarda auth, role y username en sessionStorage.
// - Redirige al origen (state.from) si existe, o a "/".
// ============================================

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Banner from '../components/Banner'
import { Container } from "react-bootstrap";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Si el usuario fue redirigido desde una ruta protegida, location.state?.from contiene la ruta
  // Ej: { from: "/checkout" }
  const redirectPath = location.state?.from || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validar campos obligatorios (ninguno puede quedar vacío)
    if (username.trim() === "" || password.trim() === "") {
      setError("Usuario y contraseña son obligatorios.");
      return;
    }

    // Admin único y seguro: usuario 'admin' + contraseña '1234'
    if (username.toLowerCase() === "admin" && password === "1234") {
      sessionStorage.setItem("auth", "true");
      sessionStorage.setItem("role", "admin");
      sessionStorage.setItem("username", username);
      // Si es admin, por seguridad lo mandamos al panel admin
      navigate("/admin");
      return;
    }

    // Usuario común (contraseña no puede ser vacía por la validación anterior)
    sessionStorage.setItem("auth", "true");
    sessionStorage.setItem("role", "user");
    sessionStorage.setItem("username", username);

    // Volvemos a la ruta de origen o al inicio
    navigate(redirectPath);
  };

  return (
    <Container className="py-5">
      <Banner 
      title="Login" 
      description="Ingreso o nueva cuenta" 
      />
      <h2 className="mb-4 text-center">Iniciar sesión</h2>

      <form onSubmit={handleLogin} style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="mb-3">
          <input
            type="text"
            id="usuario"
            name="usuario"
            className="form-control"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Usuario"
            autoComplete="usuario"  
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
            aria-label="Contraseña"
            autoComplete="contraseña"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>

      <p className="mt-3 text-muted small">
        Nota: para acceder como admin usa usuario <strong>admin</strong> y contraseña <strong>1234</strong>.
      </p>
    </Container>
  );
}
