export default function Navbar({ activeSection, setActiveSection }) {
  const sections = ['home','about','skills','experience','projects','education','contact'];

  return (
    <nav>
      <div className="nav-container">
        <h1>Bossbaby</h1>
        <ul className="nav-links">
          {sections.map(sec => (
            <li key={sec}>
              <button 
                onClick={() => setActiveSection(sec)}
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
