function Navbar() {
  return (
    <header style={{ padding: "20px 40px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
      <h1>Vercel</h1>
      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="#">Docs</a>
        <a href="#">Templates</a>
        <a href="#">Pricing</a>
      </nav>
    </header>
  );
}

export default Navbar;
