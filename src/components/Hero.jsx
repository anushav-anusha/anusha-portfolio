export default function Home() {
  return (
    <section id="home">
      <div className="home-card">
        <h1>Anusha V</h1>
        <h3>Lead Frontend Developer</h3>

        <p>
          Front-end architect and team lead with 10+ years of experience delivering
          secure, scalable, and high-performance web applications in
          <strong> digital banking</strong>, <strong>e-commerce</strong>, and
          <strong> data-driven platforms</strong>.
        </p>

        <p>
          Specialized in building enterprise-grade UI systems, leading teams,
          modernizing legacy applications, and integrating secure backend services
          with a strong focus on performance, accessibility, and analytics.
        </p>

        {/* Tech Stack */}
        <div className="home-tech">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Angular</span>
          <span className="tech-tag">AngularJS</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">HTML5</span>
          <span className="tech-tag">CSS3</span>
        </div>
      </div>
    </section>
  );
}
