import "./Banner.css"
import Goku from "../assets/variosVolando.png"
import Fondo from "../assets/nubes.mp4"
import Logod from "../assets/logoDragonBall.png"


const Header = () =>{
    return(
        <div className="banner">
            <video className="banner-video" autoPlay muted loop>
                <source src={Fondo} type="video/mp4" />
                Tu navegador no soporta el video.
            </video>
            <img className="banner-img" src={Goku} alt="Frontal" />
            <img className="banner-logo" src={Logod} alt="Frontal" />
        </div>
    );
};

export default Header;