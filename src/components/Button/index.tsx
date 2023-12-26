import React from 'react';

import {Container, Icon, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: string;
};
const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <Container {...rest}>
      <Icon source={icon} size={20} color="#fff" />
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
