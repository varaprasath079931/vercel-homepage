import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Vercel</div>

      {/* Hamburger menu (mobile) */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Docs</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
