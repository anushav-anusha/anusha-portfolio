export default function Experience() {
  const experiences = [
    {
      role: "Lead Front-End Developer",
      company: "FIS",
      domain: "Digital Banking",
      duration: "Oct 2019 – Present",
      projects: "Account Opening, Online Banking (OLB), Enrollment, Banker App",
      bullets: [
        "Led a team of 5 front-end engineers, mentoring, code reviews, and performance tuning.",
        "Defined front-end architecture and reusable component libraries using Angular & React.",
        "Implemented secure coding practices, WCAG accessibility compliance, and analytics integration (GTM/GA4, Medallia).",
        "Integrated backend services via Java and Node.js, SSO, and iframe-based systems.",
        "Championed modernization efforts including AngularJS → Angular & React migrations, and performance optimizations."
      ],
      tech: "Angular 10, React, TypeScript, Java, Node.js, Redux, REST APIs"
    },
    {
      role: "Web Developer",
      company: "Walt Disney World, FL",
      domain: "E-Commerce / Event Booking",
      duration: "Mar 2017 – Sep 2019",
      projects: "Build-A-Band, NDRE, Shop Disney Parks",
      bullets: [
        "Developed modular AngularJS and Angular 5 components for e-commerce and event booking platforms.",
        "Integrated Node.js REST APIs for real-time updates and shopping workflows.",
        "Authored unit and integration tests using Jasmine/Karma to ensure code quality.",
        "Worked on modernization POCs, performance optimization, and reusable service libraries."
      ],
      tech: "AngularJS, Angular 5, Node.js, TypeScript, Jasmine, Karma"
    },
    {
      role: "Application Developer",
      company: "General Electric (GE Oil & Gas), KS",
      domain: "Oil & Gas / Data Analytics",
      duration: "Feb 2016 – Mar 2017",
      projects: "Intelligent Pipeline Solutions",
      bullets: [
        "Developed AngularJS dashboards and interactive charts for pipeline risk analytics.",
        "Built backend Java services and Spring Batch jobs for large-scale data processing.",
        "Performed unit testing using Karma, Jasmine, and JUnit.",
        "Worked on modernization initiatives: AngularJS → Angular 2 migration proof-of-concepts."
      ],
      tech: "AngularJS, Angular 2, Java, Spring, Bootstrap"
    },
    {
      role: "Research Assistant",
      company: "University of Tennessee at Chattanooga",
      domain: "Research / Education",
      duration: "Sep 2014 – Dec 2015",
      projects: "",
      bullets: [
        "Developed Java-based modules and UI components for secure multipath routing research.",
        "Built prototypes to evaluate multiple design approaches for efficiency and scalability."
      ],
      tech: "Java, HTML, CSS"
    },
    {
      role: "Application Developer",
      company: "Applied Cybernetics, Bangalore, India",
      domain: "Telecom / Billing Systems",
      duration: "May 2012 – Mar 2014",
      projects: "",
      bullets: [
        "Developed JSP/Servlet billing modules using Struts MVC, JavaBeans, and Oracle DB.",
        "Designed UI layouts and validation flows with Struts Validator.",
        "Deployed applications on IBM WebSphere with Log4j monitoring."
      ],
      tech: "Java, JSP, Servlets, Struts, Oracle"
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="grid">
          {experiences.map((exp, idx) => (
            <div key={idx} className="card">
              <h3>{exp.role}</h3>
              <p style={{ fontStyle: "italic", marginBottom: "5px" }}>
                {exp.company} – {exp.domain}
              </p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              {exp.projects && exp.projects.length > 0 && (
                <p><strong>Projects:</strong> {exp.projects}</p>
              )}
              <ul>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p style={{ fontSize: "0.8rem", color: "#555", marginTop: "10px" }}>
                Tech Stack: {exp.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
