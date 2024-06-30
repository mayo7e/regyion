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
`;


// import styled from 'styled-components';

// export const PanelContainer = styled.div`
//   padding: 20px;
//   margin: 20px 0;
//   background-color: ${({ theme }) => theme.surface.page};
//   color: ${({ theme }) => theme.text.primary};
//   border: 1px solid ${({ theme }) => theme.border.default};
// `;