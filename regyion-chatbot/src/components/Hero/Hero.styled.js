import styled from 'styled-components';

export const HeroContainer = styled.div`
  flex: 0 0 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
  padding: 20px;
`;
