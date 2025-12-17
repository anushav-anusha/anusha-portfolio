export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>

        <div className="grid">
          <div className="card" style={{ textAlign: "center" }}>
            <p>
              <strong>Email:</strong>{" "}
              <span className="plain-text">
                For privacy, please reach me via LinkedIn
              </span>
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/anusha-v-100265389"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/anusha-v-100265389
              </a>
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/anushav-anusha"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/anushav-anusha
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
