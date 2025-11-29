// ============================================
// src/pages/ProfilePage.jsx
// ============================================
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";

import Swal from "sweetalert2";
import { Card, Container, Table } from "react-bootstrap";
import Banner from "../components/Banner";


export default function ProfilePage() {

  // contexto para Theme
  const {contextTheme} = useThemeContext()
  const [lastCheckout, setLastCheckout] = useState(null); 

  let emailAmostrar = "N/A";

    if (lastCheckout) {
        // 2. Acceder directamente a la propiedad del objeto
        emailAmostrar = lastCheckout.email;
    }
   // Recuperamos estado de autenticación y username, y su rol desde sessionStorage
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  useEffect(() => {
     // Traer último pago simulado
    const user = localStorage.getItem("username");
    const pago = localStorage.getItem(`ultimoPago_${user}`);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (pago) setLastCheckout(JSON.parse(pago));
  }, []);

    // Cerrar sesión: limpiar sessionStorage y volver al inicio
  const handleLogout = () => {
  Swal.fire({
    title: '¿Cerrar sesión?',
    text: "¿Estás seguro que querés salir?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, salir',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("auth");
      localStorage.removeItem("role");
      localStorage.removeItem("username");
      Swal.fire(
        'Sesión cerrada',
        'Has cerrado sesión correctamente',
        'success'
      );
      navigate("/");
    }
  });
};

  return (
    <Container id={contextTheme} className="p-1 p-md-3">
      <Banner title="Perfil Usuario" description={'Ver última Compra'} />
            <p className=" text-center">Nota: aquí podrás ver el historial de tus compras</p>

            <div className="row px-2 px-md-5 pb-5">
                <div className=" col-md-4 p-3">
                    <div className="card" id={contextTheme} >

                        {/* Avatar */}
                        <img 
                            src='https://api.dicebear.com/9.x/lorelei/svg?seed=Aneka'
                            alt="Avatar del Usuario"
                            className="rounded-circle border border-3 border-primary mx-auto mt-2 card-img"
                            style={{ width: '30%' }}
                        />
                        <span className=" text-center">Avatar del usuario</span>

                        <div className="card-body mx-2 my-5 text-center">
                            <h4 className="card-title">Username: {username}</h4>
                            <h6 className="my-2 text-center">Email: {emailAmostrar}</h6>

                            <span className={`badge bg-${role === 'admin' ? 'danger' : 'primary'} fs-6 mb-4`}>
                                Rol: {role.toUpperCase()}
                            </span>


                            <button 
                                onClick={handleLogout}
                                className="btn btn-danger text-center w-100"
                            >
                                <i className="bi bi-box-arrow-right me-2"></i> 
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>            
                </div>

                <div className="col-md-8 p-3">
                    <div className="card mx-auto" id={contextTheme} >
                        <h4 className="card-title my-4 border-bottom px-2">
                            🛒 Historial de Compras
                        </h4>

                        <div className="alert alert-info" role="alert">
                            La funcionalidad del historial de compras se habilitará en la próxima etapa.
                        </div>
                        <p className="px-3">Esta es una simulación de cómo aparecerá el historial de tus compras, por el momento sólo te da la última compra...</p>

                            {lastCheckout ? (
                            <Card className="shadow-sm detalles-internos">
                              <Card.Header className="bg-success text-white">Último Pago</Card.Header>
                              <Card.Body>
                                <Table borderless size="sm">
                                  <thead>
                                     <tr>
                                      <th>Fecha</th>
                                      <th>Total</th>
                                      <th>Método de pago</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>{new Date(lastCheckout.fecha).toLocaleString()}</td>
                                      <td>
                                        {lastCheckout.total.toLocaleString("es-AR", {
                                          style: "currency",
                                          currency: "ARS",
                                        })}
                                      </td>
                                      <td>{lastCheckout.metodoPago}</td>
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

                    </div>
                </div>
            </div>
        </Container>
  );
}
