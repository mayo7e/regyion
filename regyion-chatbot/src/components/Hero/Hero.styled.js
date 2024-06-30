import styled from 'styled-components';

export const HeroContainer = styled.div`
  flex: 0 0 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 2px solid tomato; */
  background-color: ${({ theme }) => theme.surface.page};
  padding: 20px;
`;
