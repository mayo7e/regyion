import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  flex: 0 0 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f8f8;
  padding: 20px;
`;

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