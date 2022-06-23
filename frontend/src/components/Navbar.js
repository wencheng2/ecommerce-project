import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
          <h2>SHOP Shopping cart</h2>
      </div>

      {/* links */}
      <ul className="navbar__links">
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              CartScreen
              <span className="cartlogo__badge">0</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              Shop
            </Link>
          </li>
      </ul>

      {/* menu */}
      <div className="clothes__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar