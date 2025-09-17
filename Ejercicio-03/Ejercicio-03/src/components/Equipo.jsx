import React from "react";
import "./Equipo.css";

const Equipo = () => {
  const equipo = [
    { nombre: "Silvia", rol: "Product Owner", imagen: "silvia.png" },
    { nombre: "Luis", rol: "Diseñador UX/UI", imagen: "luis.png" },
    { nombre: "Matías", rol: "Desarrollador", imagen: "matias.png" },
    { nombre: "Sabrina", rol: "Desarrolladora", imagen: "sabrina.png" },
  ];

  return (
    <section id="equipo" className="containerequipo">
      <h1 className="text-white">Equipo de Desarrollo</h1>
      <div className="containerequipo">
        
        {equipo.map((miembro, index) => (
          <div className="card" key={index}>
            {/* Imagen que ocupa toda la tarjeta */}
            <div className="imgbox">
              <img src={miembro.imagen} alt={miembro.nombre} />
            </div>

            {/* Contenido oculto por defecto */}
            <div className="content">
              <h2>{miembro.nombre}</h2>
              <p>{miembro.rol}</p>
              <a href="#">Ver más</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipo;
