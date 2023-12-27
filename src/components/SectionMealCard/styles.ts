import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;
export const Hours = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_1};
`;

export const Meal = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_1};
`;

export const InTheDiet = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_1};
`;
