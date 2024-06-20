import React from 'react';
import styled from 'styled-components';

const PanelContainer = styled.div`
  flex: 0 0 100vw;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.panel};
  border-right: 1px solid ${({ theme }) => theme.border};
  text-align: center;
`;

const Panel = ({ id, title, content }) => (
  <PanelContainer id={id}>
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </PanelContainer>
);

export default Panel;
