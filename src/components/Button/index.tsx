import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import glyphmap from 'react-native-vector-icons/glyphmaps/FontAwesome.json';

import {Container, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof glyphmap;
};
const Button: React.FC<ButtonProps> = ({title, icon, ...rest}) => {
  return (
    <Container {...rest}>
      {icon && <Icon name={icon} size={14} color="#fff" />}
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
