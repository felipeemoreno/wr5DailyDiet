import React from 'react';

import {Container, NewMealWrapper, NewMealTitle} from './styles';
import Header from '@components/Header';
import PercentCard from '@components/PercentCard';
import Button from '@components/Button';
import {SectionList, Text} from 'react-native';
import SectionMealCard from '@components/SectionMealCard';

const DATA = [
  {
    title: '12.02.23',
    data: [
      {hours: new Date().toString(), meal: 'Pizza', inTheDiet: false},
      {hours: new Date().toString(), meal: 'Burger', inTheDiet: false},
      {hours: new Date().toString(), meal: 'Risotto', inTheDiet: true},
    ],
  },
  {
    title: 'Sides',
    data: [
      {hours: new Date().toString(), meal: 'French Fries', inTheDiet: false},
      {hours: new Date().toString(), meal: 'Onion Rings', inTheDiet: false},
      {hours: new Date().toString(), meal: 'Fried Shrimps', inTheDiet: true},
    ],
  },
  {
    title: 'Drinks',
    data: [
      {hours: new Date().toString(), meal: 'Water', inTheDiet: true},
      {hours: new Date().toString(), meal: 'Coke', inTheDiet: false},
      {hours: new Date().toString(), meal: 'Beer', inTheDiet: false},
    ],
  },
  {
    title: 'Desserts',
    data: [
      {hours: new Date().toString(), meal: 'Cheese Cake', inTheDiet: true},
      {hours: new Date().toString(), meal: 'Ice Cream', inTheDiet: true},
    ],
  },
];

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
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.meal + index}
        renderItem={({item}) => <SectionMealCard data={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{color: '#000', fontSize: 18}}>{title}</Text>
        )}
      />
    </Container>
  );
};

export default Home;
