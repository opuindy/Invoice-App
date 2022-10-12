import styled from 'styled-components';

const colorViolet = '#5964e0';
const colorLightViolet = '#939bf4';
const colorVeryDarkBlue = '#0c0e16';
const colorMidnight = '#121721';
const colorWhite = '#fff';
const colorLightGrey = '#f4f6f8';
const colorGrey = '#9daec2';
const colorDarkGrey = '#6e8098';
const mainTransition = `all 0.3s linear`;
const borderRadius = `20px`;

export const Header = styled.header`
  width: 100%;
  height: 11vh;
  background: ${({ theme }) => theme.navBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: ${mainTransition};
  @media screen and (min-width: 1204px) {
    width: 100px;
    height: 100vh;
    flex-direction: column;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1204px) {
    flex-direction: column;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 100px;
  background: ${({ theme }) => theme.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  position: relative;
  z-index: 0;
  &::after {
    content: '';
    height: 50%;
    width: 100%;
    bottom: 0;
    background: ${colorLightViolet};
    border-top-left-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    position: absolute;
    transition: ${mainTransition};
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    &::after {
      content: '';
      height: 80%;
      width: 100%;
      bottom: 0;
      background: ${colorLightViolet};
      opacity: 0.5;
      border-top-left-radius: ${borderRadius};
      border-bottom-right-radius: ${borderRadius};
      pointer-events: none;
      position: absolute;
      transition: ${mainTransition};
    }
  }
  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: block;
    width: 35%;
    height: 35%;
    object-fit: contain;
  }

  @media screen and (min-width: 1204px) {
    height: 110px;
    width: 100%;
  }
`;

export const ButtonAvatarContainer = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1204px) {
    flex-direction: column;
    width: 100%;
    height: 200px;
  }
`;

export const ButtonContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 40%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background: none;
    img {
      display: block;
      width: 60%;
      height: 60%;
      object-fit: contain;
      @media screen and (min-width: 1204px) {
        width: 50%;
        height: 50%;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 1204px) {
    width: 100%;
    height: 50%;
  }
`;

export const AvatarContainer = styled(ButtonContainer)`
  border-left: 1px solid ${colorDarkGrey};
  img {
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 1204px) {
    height: 50%;
    width: 100%;
    border-left: none;
    border-top: 1px solid ${colorDarkGrey};
  }
`;
