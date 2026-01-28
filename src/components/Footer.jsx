import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="brand">Vercel</p>

        <ul className="footer-links">
          <li>Docs</li>
          <li>Pricing</li>
          <li>Support</li>
          <li>Privacy</li>
        </ul>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Vercel. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
