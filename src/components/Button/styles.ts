import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  border-radius: 6px;

  background-color: ${({theme}) => theme.COLORS.GRAY_2};
`;

export const Icon = styled.Image``;
export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  text-align: center;

  padding: 16px;
`;
