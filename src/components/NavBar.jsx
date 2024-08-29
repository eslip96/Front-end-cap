import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-bar-wrapper">
      <h1>JAKE & IANS CLOTHING CO</h1>

      <button
        className="hamburger-button"
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        MENU
      </button>

      <div className={menuOpen ? "menu-open links-wrapper" : "links-wrapper"}>
        <NavLink className="nav-link-box" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-link-box " to="/products">
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
