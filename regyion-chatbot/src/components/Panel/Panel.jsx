import React from 'react';
import { PanelContainer } from './Panel.styled';

const Panel = ({ id, title, content }) => (
  <PanelContainer id={id}>
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </PanelContainer>
);

export default Panel;
