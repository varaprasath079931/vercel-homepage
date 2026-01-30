import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Vercel</div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Docs</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
