import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  margin-bottom: 24px;
  padding: 20px;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`;

export const PercentValue = styled.Text`
  font-size: 32px;
  font-weight: 700;
  line-height: 42px;

  text-align: center;

  color: ${({theme}) => theme.COLORS.GRAY_1};
`;
export const Description = styled.Text`
  text-align: center;

  color: ${({theme}) => theme.COLORS.GRAY_2};
`;
