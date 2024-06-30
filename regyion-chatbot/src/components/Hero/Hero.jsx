import React from 'react';
import { HeroContainer, HeroContent, HeroTitle, HeroSubtitle, HeroButton } from './Hero.styled';

const Hero = () => (
  <HeroContainer id="hero">
    <HeroContent>
      <HeroTitle>Reimagine conversations with your users.</HeroTitle>
      <HeroSubtitle>
        When companies emphasize 24/7 support, they're talking about seamless, human-like chats around the clock,
        enhanced by AI and driven by advanced NLU technology!
      </HeroSubtitle>
      <HeroSubtitle>
        We're currently in beta testing—stay tuned for more updates!
      </HeroSubtitle>
      <HeroButton onClick={() => {/* Logic to open chatbot widget goes here */}}>
        Join now
      </HeroButton>
    </HeroContent>
  </HeroContainer>
);

export default Hero;
