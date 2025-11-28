// ============================================
// src/components/Footer.jsx
// ============================================
// // src/components/Footer.jsx
// Footer simple — estilizado con su propio Footer.css
import Logo from '../assets/logo1.png'
function Footer() {
  return (
    <footer className="footer bg-primary text-center pt-5">
      <div>  
        <img src={Logo} alt='Zapashop' width='150' className='logo logo-luz'/> 
        <span className='fw-bold fs-5 text-warning'>    
          © {new Date().getFullYear()} — All rights reserved 
        </span>
      </div>
      {/* {new Date().getFullYear()} obtiene el año actual dinámicamente.
       Es un patrón estándar para footers de sitios web. 📅 */}
    </footer>
  );
};

export default Footer;
