import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <Hero />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'education': return <Education />;
      case 'contact': return <Contact />;
      default: return <Hero />;
    }
  }

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
    </>
  );
}
