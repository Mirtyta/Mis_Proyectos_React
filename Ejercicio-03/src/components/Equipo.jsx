import React from "react";
import Silvia from "../assets/silvia.png";
import Luis from "../assets/luis.png";
import Matias from "../assets/matias.png";
import Sabrina from "../assets/sabrina.png";
import "./Equipo.css";

const Equipo = () => {
  const equipo = [
    { nombre: "Silvia", rol: "Product Owner", imagen: Silvia },
    { nombre: "Luis", rol: "Diseñador UX/UI", imagen: Luis },
    { nombre: "Matías", rol: "Desarrollador", imagen: Matias },
    { nombre: "Sabrina", rol: "Desarrolladora", imagen: Sabrina },
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
