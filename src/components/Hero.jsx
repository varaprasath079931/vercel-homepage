import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Develop. Preview. Ship.</h1>
      <p>
        Vercel provides the tools and infrastructure to build faster web
        experiences.
      </p>

      <div className="hero-buttons">
        <button className="primary">Start Deploying</button>
        <button className="secondary">Get a Demo</button>
      </div>
    </section>
  );
}

export default Hero;
