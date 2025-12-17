
const coreSkills = [
  "React",
  "AngularJS",
  "Angular 2–10",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Redux",
  "NgRx",
  "RxJS",
  "Micro Frontends",
  "Secure Coding",
  "Jasmine",
  "Karma"
];

const workingKnowledge = [
  "Node.js",
  "Java",
  "REST APIs",
  "CI/CD",
  "Azure DevOps",
  "Checkmarx"
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <h3>Frontend / Core Expertise</h3>
        <div className="skills-container">
          {coreSkills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>

        <h3>Working Knowledge</h3>
        <div className="skills-container">
          {workingKnowledge.map(skill => (
            <span key={skill} className="skill-tag working">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
