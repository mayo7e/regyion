


import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeConfig } from './theme';
import { GlobalStyles } from './global';
import ModeToggle from './components/ModeToggle/ModeToggle';
import Navbar from './components/Navbar/Navbar';
import Panel from './components/Panel/Panel';
import Hero from './components/Hero/Hero';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? themeConfig.lightTheme : themeConfig.darkTheme}>
      <GlobalStyles />
      <Navbar />
      <ModeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <Hero />
        <Panel id="scalability" title="Scalability" content="Grow with your business." />
        <Panel id="affordability" title="Affordability" content="Flexible plans for startups." />
        <Panel id="integration" title="Integration" content="Easy embed into any platform." />
        <Panel id="success-stories" title="Success Stories" content="See how startups benefit." />
        <Panel id="call-to-action" title="Call to Action" content="Experience our chatbot." />
      </div>
    </ThemeProvider>
  );
};

export default App;