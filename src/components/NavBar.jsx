import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar-wrapper">
      <h1>Nav Bar LOGO</h1>
      <div className="nav-links-contianer">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/products">Contact</NavLink>
      </div>
    </div>
  );
}
