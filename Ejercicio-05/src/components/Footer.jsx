// src/components/Footer.jsx
// Footer simple — estilizado con su propio Footer.css
import './Footer.css'
import Logo from '../assets/logo.png'
function Footer() {
  return (
    <footer className="footer bg-primary">
      <p>  <img src={Logo} alt='Zapashop' width='150' className='logo logo-luz'/>  
      <span>
        <a href="https://bootswatch.com/brite/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-primary"
        >
        Utilizando BootsWatch - Theme Brite
        </a>
        </span>
        <br /> © {new Date().getFullYear()} — All rights reserved</p>
      {/* {new Date().getFullYear()} obtiene el año actual dinámicamente.
       Es un patrón estándar para footers de sitios web. 📅 */}
    </footer>
  );
};

export default Footer;
