import React from 'react';
import {Container, Hours, InTheDiet, Meal} from './styles';
import convertDateToHours from '@utils/convertDateToHours';

interface Props {
  data: {
    hours: string;
    meal: string;
    inTheDiet: boolean;
  };
}

const SectionMealCard: React.FC<Props> = ({data}) => {
  return (
    <Container>
      <Hours>{convertDateToHours(new Date(data.hours))}</Hours>
      <Meal>{data.meal}</Meal>
      <InTheDiet>{String(data.inTheDiet)}</InTheDiet>
    </Container>
  );
};

export default SectionMealCard;
