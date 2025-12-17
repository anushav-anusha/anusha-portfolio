import { useState } from "react";

export default function Navbar({ activeSection, setActiveSection }) {
  const [open, setOpen] = useState(false);
  const sections = ['home','about','skills','experience','projects','education','contact'];

  const handleClick = (sec) => {
    setActiveSection(sec);
    setOpen(false); // close menu on mobile after click
  };

  return (
    <nav>
      <div className="nav-container">
        <h1>Anusha</h1>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {sections.map(sec => (
            <li key={sec}>
              <button 
                onClick={() => handleClick(sec)}
                className={activeSection === sec ? 'active-link' : ''}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
