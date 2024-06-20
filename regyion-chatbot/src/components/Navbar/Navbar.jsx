import React from 'react';

function Navbar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <ul>
        <li onClick={() => scrollToSection('hero')}>Home</li>
        <li onClick={() => scrollToSection('scalability')}>Scalability</li>
        <li onClick={() => scrollToSection('affordability')}>Affordability</li>
        <li onClick={() => scrollToSection('integration')}>Integration</li>
        <li onClick={() => scrollToSection('success-stories')}>Success Stories</li>
        <li onClick={() => scrollToSection('call-to-action')}>Call to Action</li>
      </ul>
    </nav>
  );
}

export default Navbar;
