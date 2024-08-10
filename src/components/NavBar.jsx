import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>Nav Bar</h1>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/products">Contact</NavLink>
    </div>
  );
}
