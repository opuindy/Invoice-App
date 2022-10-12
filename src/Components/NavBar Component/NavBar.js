import React from 'react';
import { images } from '../../utils/images';
import { Link } from 'react-router-dom';
import {
  Header,
  Nav,
  LogoContainer,
  ButtonAvatarContainer,
  ButtonContainer,
  AvatarContainer,
} from './navBarStyles';

const NavBar = ({ colorTheme, toggleTheme, move }) => {
  return (
    <Header>
      <Nav>
        <LogoContainer>
          <Link to='/'>
            <img src={images.logo} alt='logo' />
          </Link>
        </LogoContainer>
        <ButtonAvatarContainer>
          <ButtonContainer>
            <button onClick={toggleTheme}>
              <img
                src={colorTheme === 'light' ? images.moon : images.sun}
                alt='theme_icon'
              />
            </button>
          </ButtonContainer>
          <AvatarContainer>
            <img src={images.avatar} alt='' />
          </AvatarContainer>
        </ButtonAvatarContainer>
      </Nav>
    </Header>
  );
};

export default NavBar;
