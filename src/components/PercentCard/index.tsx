import React from 'react';

import {Container, PercentValue, Description} from './styles';

const PercentCard: React.FC = () => {
  return (
    <Container>
      <PercentValue>90,86%</PercentValue>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
};

export default PercentCard;
