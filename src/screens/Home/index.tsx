import React from 'react';

import {Container, NewMealWrapper, NewMealTitle} from './styles';
import Header from '@components/Header';
import PercentCard from '@components/PercentCard';
import Button from '@components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <PercentCard />
      <NewMealWrapper>
        <NewMealTitle>Refeições</NewMealTitle>
        <Button
          icon="plus"
          onPress={() => console.log('Nova refeição')}
          title="Nova refeição"
        />
      </NewMealWrapper>
    </Container>
  );
};

export default Home;
