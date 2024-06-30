import React from 'react';
import ModeToggle from '../ModeToggle/ModeToggle';
import { Nav, NavContainer, NavLogo, NavList, NavListItem } from './Navbar.styled';

function Navbar({ theme, toggleTheme }) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo>regyion</NavLogo>
        <NavList>
          <NavListItem onClick={() => scrollToSection('hero')}>Home</NavListItem>
          <NavListItem onClick={() => scrollToSection('scalability')}>Scalability</NavListItem>
          <NavListItem onClick={() => scrollToSection('affordability')}>Affordability</NavListItem>
          <NavListItem onClick={() => scrollToSection('integration')}>Integration</NavListItem>
          <NavListItem onClick={() => scrollToSection('success-stories')}>Success Stories</NavListItem>
          <NavListItem onClick={() => scrollToSection('call-to-action')}>Call to Action</NavListItem>
        </NavList>
        <ModeToggle theme={theme} toggleTheme={toggleTheme} />
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
