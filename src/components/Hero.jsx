function Hero() {
  return (
    <main style={{ textAlign: "center", padding: "80px 20px" }}>
      <h2>Develop. Preview. Ship.</h2>
      <p>Vercel enables developers to build fast, modern web applications.</p>

      <div style={{ marginTop: "30px", display: "flex", gap: "15px", justifyContent: "center" }}>
        <button style={{ padding: "12px 20px", backgroundColor: "#000", color: "#fff", border: "none" }}>Start Deploying</button>
        <button style={{ padding: "12px 20px", border: "1px solid #000", backgroundColor: "#fff", color: "#000" }}>View Documentation</button>
      </div>
    </main>
  );
}

export default Hero;
