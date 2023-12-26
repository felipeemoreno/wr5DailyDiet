import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  padding: 24px;
`;

export const NewMealWrapper = styled.View``;

export const NewMealTitle = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_1};
  font-size: 16px;
  font-weight: 400;

  margin-bottom: 8px;
`;
