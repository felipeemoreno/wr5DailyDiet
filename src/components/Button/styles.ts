import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  background-color: ${({theme}) => theme.COLORS.GRAY_2};
`;

export const Icon = styled.Image``;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  text-align: center;

  padding: 16px 12px;
`;
