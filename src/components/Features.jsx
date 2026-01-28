import "./Features.css";

function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Everything you need to build faster</h2>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Frontend Frameworks</h3>
          <p>
            Deploy React, Vue, Svelte, and more with zero configuration.
          </p>
        </div>

        <div className="feature-card">
          <h3>Global Edge Network</h3>
          <p>
            Serve content instantly with our globally distributed edge network.
          </p>
        </div>

        <div className="feature-card">
          <h3>Instant Rollbacks</h3>
          <p>
            Go back to a previous deployment with a single click.
          </p>
        </div>

        <div className="feature-card">
          <h3>Preview Deployments</h3>
          <p>
            See every change live before it reaches production.
          </p>
        </div>

        <div className="feature-card">
          <h3>Analytics</h3>
          <p>
            Get real-time insights into performance and usage.
          </p>
        </div>

        <div className="feature-card">
          <h3>Secure by Default</h3>
          <p>
            HTTPS, DDoS protection, and security best practices built-in.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
