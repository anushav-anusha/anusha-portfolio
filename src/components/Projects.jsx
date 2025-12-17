const projects = [
  {
    name: "FIS Digital Banking – Account Opening",
    description: "Developed secure, scalable account opening workflows for the digital banking platform.",
    role: "Lead Front-End Developer",
    company: "FIS",
    bullets: [
      "Led front-end architecture and defined reusable Angular components.",
      "Championed security best practices including XSS prevention, CSP, and input sanitization.",
      "Integrated backend services via Java APIs and ensured SSO authentication.",
      "Ensured WCAG accessibility compliance and conducted accessibility audits.",
      "Mentored and guided a junior engineers, conducted code reviews, and drove coding standards."
    ],
    tech: "Angular 10, TypeScript, Java, Redux, REST APIs"
  },
  {
    name: "FIS Digital Banking – Online Banking (OLB)",
    description: "Enhanced online banking dashboards with high performance, security, and analytics integration.",
    role: "Lead Front-End Developer",
    company: "FIS",
    bullets: [
      "Architected modular Angular and React components (POC) and implemented state management with Redux.",
      "Integrated Medallia feedback, Google Tag Manager, and GA4 analytics for customer insights.",
      "Performed code reviews, production issue resolution, and performance optimizations.",
      "Ensured secure coding and accessibility (WCAG/ARIA) standards across the platform.",
      "Guided team in adoption of best practices for maintainability and performance."
    ],
    tech: "Angular 10, React (POC), TypeScript, Java, Node.js"
  },
  {
    name: "FIS Digital Banking – Enrollment",
    description: "Built the customer enrollment application with modern React workflows and secure architecture.",
    role: "Lead Front-End Developer",
    company: "FIS",
    bullets: [
      "Defined component architecture and reusable services for scalable enrollment workflows using React.",
      "Implemented SSO authentication and secure backend integration via Java services.",
      "Enforced accessibility compliance (WCAG) and comprehensive form validation.",
      "Mentored developers on coding standards, testing strategies, and performance optimization.",
      "Collaborated with UX and product teams to improve user experience and conversion rates."
    ],
    tech: "React, TypeScript, Java, REST APIs"
  },
  {
    name: "FIS Digital Banking – Banker App",
    description: "Developed banker-facing application to manage customer accounts and internal workflows.",
    role: "Lead Front-End Developer",
    company: "FIS",
    bullets: [
      "Led front-end design and architecture using Angular components for maintainable UI.",
      "Integrated multiple backend services and iframe-based systems securely and efficiently.",
      "Implemented analytics, performance monitoring, and accessibility best practices.",
      "Mentored a junior engineers, conducted code reviews, and enforced coding standards.",
      "Optimized modular architecture for maintainability and scalability of banker workflows."
    ],
    tech: "Angular 10, TypeScript, Java, Node.js"
  }
];

// Disney and GE projects remain as before
const otherProjects = [
  {
    name: "Disney – Build-A-Band Portal",
    description: "Developed a portal for building and managing music bands for events.",
    role: "Web Developer",
    company: "Walt Disney World",
    bullets: [
      "Created AngularJS components and integrated Node.js REST endpoints for real-time updates.",
      "Built reusable services to standardize UI components across modules.",
      "Implemented unit and integration tests using Jasmine/Karma.",
      "Optimized performance and maintained consistency with company UI standards."
    ],
    tech: "AngularJS, Node.js, TypeScript"
  },
  {
    name: "Disney – NDRE Event Booking Platform",
    description: "Built real-time event booking system for Disney events, supporting thousands of users.",
    role: "Web Developer",
    company: "Walt Disney World",
    bullets: [
      "Developed AngularJS and Angular 5 components for booking flows.",
      "Integrated Node.js backend endpoints for availability, pricing, and confirmation workflows.",
      "Improved performance and responsiveness for high-traffic events.",
      "Conducted modernization POCs to evaluate migrating components to Angular 5."
    ],
    tech: "AngularJS, Angular 5, Node.js, TypeScript"
  },
  {
    name: "Disney – Shop Disney Parks E-Commerce",
    description: "Enhanced e-commerce workflows for Disney park merchandise.",
    role: "Web Developer",
    company: "Walt Disney World",
    bullets: [
      "Developed modular AngularJS components and integrated REST APIs for shopping cart and checkout.",
      "Optimized frontend for performance and reusable services across pages.",
      "Implemented unit testing and maintained consistent UI architecture.",
      "Worked closely with product and UX teams for feature enhancements."
    ],
    tech: "AngularJS, Angular 5, TypeScript, Node.js"
  },
  {
    name: "GE Oil & Gas – Intelligent Pipeline Solutions",
    description: "Developed data-driven dashboards for pipeline risk analytics and monitoring.",
    role: "Application Developer",
    company: "GE Oil & Gas",
    bullets: [
      "Built AngularJS dashboards and interactive charts for pipeline risk analysis.",
      "Developed backend Java services and Spring Batch jobs for data processing.",
      "Implemented unit testing using Karma, Jasmine, and JUnit.",
      "Worked on AngularJS → Angular 2 migration proof-of-concepts."
    ],
    tech: "AngularJS, Angular 2, Java, Spring, Bootstrap"
  }
];

export default function Projects() {
  const allProjects = [...projects, ...otherProjects];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {allProjects.map(p => (
            <div key={p.name} className="card">
              <h3>{p.name}</h3>
              <p style={{fontStyle:'italic', marginBottom:'5px'}}>{p.role} – {p.company}</p>
              <p>{p.description}</p>
              <ul>
                {p.bullets.map((b,i) => <li key={i}>{b}</li>)}
              </ul>
              <p style={{fontSize:'0.8rem', color:'#555', marginTop:'10px'}}>Tech Stack: {p.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
