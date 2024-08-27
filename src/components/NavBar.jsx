import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar-wrapper">
      <h1>JAKE & IANS CLOTHING CO</h1>

      <div className="nav-links-container">
        <NavLink className="nav-link-box" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-link-box" to="/products">
          Products
        </NavLink>
        <NavLink className="nav-link-box" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-link-box" to="/shopping-cart">
          Cart
        </NavLink>
      </div>
    </div>
  );
}
