import "./Features.css";

function Features() {
  return (
    <section className="features">
      <h2>Everything you need to build faster</h2>

      <div className="features-grid">
        {[
          "Frontend Frameworks",
          "Global Edge Network",
          "Instant Rollbacks",
          "Preview Deployments",
          "Analytics",
          "Secure by Default",
        ].map((item) => (
          <div className="feature-card" key={item}>
            <h3>{item}</h3>
            <p>Production-ready infrastructure for modern web apps.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
