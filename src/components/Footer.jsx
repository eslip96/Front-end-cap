import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-links-container">
        <NavLink className="footer-link" to="/about">
          About
        </NavLink>
        <NavLink className="footer-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}
