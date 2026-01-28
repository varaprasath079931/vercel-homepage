import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Develop. Preview. Ship.</h1>
      <p>
        Vercel provides the developer tools and cloud infrastructure
        to build, scale, and secure a faster web.
      </p>

      <div className="hero-buttons">
        <button className="primary">Start Deploying</button>
        <button className="secondary">Get a Demo</button>
      </div>
    </section>
  );
}

export default Hero;
