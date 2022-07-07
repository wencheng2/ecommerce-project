import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer__logo">SHOP Shopping</div>
      
      <div className="footer__links">
        <div> STORE
          <ul className="footer__address1">
            <p><Link to="/categories"> Shop all</Link></p>
            <p><Link to="/product/:id"> Products</Link></p>
            <p><Link to="/cart">Cart</Link></p>
          </ul>
        </div>
      </div>
      <div className="footer__links">
        <p>ADDRESS</p>
        <p className="footer__address1">
          <ul>500 Bourke Street</ul>
          <ul>Melbourne, VIC, 3000</ul>
        </p>
      </div>
      <div className="footer__links">
      Follow us on
        <p className="social">
        <Link to="/" className="icon">
            <i className="icon ion-social-instagram"></i>
        </Link>
        <Link to="/" className="icon">
            <i className="icon ion-social-twitter"></i>
        </Link>
        <Link to="/" className="icon">
            <i className="icon ion-social-facebook"></i>
        </Link>
        </p>
      </div>
        
      
    </nav>
  );
};

            
export default Footer;