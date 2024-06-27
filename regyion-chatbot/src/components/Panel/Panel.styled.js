import styled from 'styled-components';

export const PanelContainer = styled.div`
  flex: 0 0 100vw;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.surface.primary};
  border-right: 1px solid ${({ theme }) => theme.border.secondary};
  text-align: center;
`;
