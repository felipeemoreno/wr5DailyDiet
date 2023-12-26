import React from 'react';

import {Container, Logo, ProfilePhoto} from './styles';

import logo from '@assets/Logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={logo} />
      <ProfilePhoto
        source={{uri: 'https://avatars.githubusercontent.com/u/27142586?v=4'}}
      />
    </Container>
  );
};

export default Header;
