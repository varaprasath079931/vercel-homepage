function Features() {
  return (
    <section style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "40px", flexWrap: "wrap" }}>
      <div style={{ padding: "20px", border: "1px solid #eee", borderRadius: "6px", textAlign: "center" }}>
        <h3>Fast Performance</h3>
        <p>Build and deploy applications with optimized performance out of the box.</p>
      </div>

      <div style={{ padding: "20px", border: "1px solid #eee", borderRadius: "6px", textAlign: "center" }}>
        <h3>Seamless Deployment</h3>
        <p>Deploy instantly to a global edge network with zero configuration.</p>
      </div>

      <div style={{ padding: "20px", border: "1px solid #eee", borderRadius: "6px", textAlign: "center" }}>
        <h3>Scalable</h3>
        <p>Your app scales automatically as traffic grows.</p>
      </div>
    </section>
  );
}

export default Features;
