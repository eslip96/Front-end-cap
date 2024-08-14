import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-links-container">
        <h1>Footer</h1>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}
