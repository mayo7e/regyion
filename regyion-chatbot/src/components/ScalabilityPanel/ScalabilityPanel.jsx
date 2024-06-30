import React from 'react';
import { PanelContainer } from '../Panel/Panel.styled';


import styled from 'styled-components';
// import { Line } from 'react-chartjs-2';

const ScalabilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
  background-color: ${({ theme }) => theme.surface.page};
  color: ${({ theme }) => theme.text.primary};
`;

const CardContainer = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  border: 2px solid ${({ theme }) => theme.border.primary};
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.surface.secondary};
`;

const GraphContainer = styled.div`
  flex: 0 0 55%;
`;

const Scalability = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Growth',
        data: [10, 20, 30, 40, 50, 60],
        fill: false,
        backgroundColor: '#fff',
        borderColor: '#000',
      },
    ],
  };

  return (
    <ScalabilityContainer>
      <CardContainer>
        
      </CardContainer>
      <GraphContainer>
       
      </GraphContainer>
    </ScalabilityContainer>
  );
};

export default Scalability;
