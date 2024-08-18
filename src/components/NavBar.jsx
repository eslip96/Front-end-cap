import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar-wrapper">
      <h1>JAKE & IANS CLOTHING CO</h1>

      <div className="nav-links-contianer">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/shopping-cart">Shopping Cart</NavLink>
      </div>
    </div>
  );
}
