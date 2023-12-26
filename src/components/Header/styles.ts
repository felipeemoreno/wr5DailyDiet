import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Logo = styled.Image``;

export const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  border-color: ${({theme}) => theme.COLORS.GRAY_2};
  border-width: 2px;
`;
