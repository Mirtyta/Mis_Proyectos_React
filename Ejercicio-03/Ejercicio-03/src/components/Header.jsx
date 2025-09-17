import React from "react";
import  {Container} from "react-bootstrap";
import "../App.css";


const Header = () =>{
    return(
        <header id="inicio" className="fondoheader espacio text-white" >            
        <h1>Ejercicio n°3</h1>                  
        <p>Creación de componentes reutilizables y manejo de props</p>        
        </header>
    );
};

export default Header;