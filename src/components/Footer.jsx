import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <h1>Footer</h1>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}
