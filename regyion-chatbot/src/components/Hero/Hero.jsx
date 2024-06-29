import React from 'react';
import { HeroContainer } from './Hero.styled';



const Hero = () => (
  <HeroContainer id="hero">
    <div>
      <h1>Reimagine conversations with your users.</h1>
      <p>When companies emphasize 24/7 support, they're talking about seamless, human-like chats around the clock,</p>
      <p> all powered by cutting-edge NLU technology!</p>
      <p> We're currently in beta testing—stay tuned for more updates!</p>
      <button onClick={() => {/* Logic to open chatbot widget goes here */}}>
        Join now
      </button>
    </div>
  </HeroContainer>
);

export default Hero;