import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const HeroContainer = styled.div`
  flex: 0 0 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.surface.page};
  padding: 20px;
`;

export const HeroContent = styled.div`
  max-width: 640px;
  width: 100%;
  color: ${({ theme }) => theme.text.primary};
`;

export const HeroTitle = styled.h1`
  font-size: 4.0rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text.primary};
  transform: translateX(-100%);
  opacity: 0;
  animation: ${slideInLeft} 1s ease-out forwards;
  animation-delay: 1.0s;
`;

export const HeroButton = styled.button`
  background-color: ${({ theme }) => theme.surface.primary};
  color: ${({ theme }) => theme.text.body};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transform: translateX(-100%);
  opacity: 0;
  animation: ${slideInLeft} 2s ease-out forwards;
  animation-delay: 1.5s;
  &:hover {
    background-color: ${({ theme }) => theme.surface.secondary};
    color: ${({ theme }) => theme.surface.action1Hover};
    border-color: ${({ theme }) => theme.border.hover};
  }
`;
