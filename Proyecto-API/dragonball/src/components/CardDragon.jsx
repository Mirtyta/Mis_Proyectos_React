import "./CardDragon.css";

/**
 * Componente que recibe un personaje y lo muestra en forma de tarjeta
 */
function CharacterCard({ 
  id,
  image, 
  name, 
  description 
}) {


  return (
  <div className="card">
    <div className="imgBx">
      {/* <!--   image  --> */}
      <img src={image} alt={name}/>
    </div>
    <div className="content">
      <div className="name">
        {/* <!-- Name --> */}
        <h4>{name}</h4>        
      </div>       
      <div className="details">    
      {/* <!-- descripcion --> */}
        <h5>Descripcion</h5>
        <p>{description}</p>     
        <p>{id}</p>     
      </div>
    </div>
  </div>   
  );
};

export default CharacterCard;
