import React from 'react';
import { HeroContainer } from './Hero.styled';



const Hero = () => (
  <HeroContainer id="hero">
    <div>
      <h1>Transform Customer Service with AI Chatbots.</h1>
      <p>Seamless integration, tailored solutions, and 24/7 support.</p>
      <button onClick={() => {/* Logic to open chatbot widget goes here */}}>
        Ask Our Bot Anything
      </button>
    </div>
  </HeroContainer>
);

export default Hero;