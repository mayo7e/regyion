import styled from 'styled-components';

export const PanelContainer = styled.div`
  flex: 0 0 100vw;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.surface.page};
  border-right: 1px solid ${({ theme }) => theme.border.secondary};
  text-align: center;
  border: 2px solid lime;
`;
