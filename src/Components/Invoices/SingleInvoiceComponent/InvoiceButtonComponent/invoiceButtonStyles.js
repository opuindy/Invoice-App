import styled from 'styled-components';

const colorLightPurp = '#9277ff';
const colorWhite = '#fff';
const colorPurp = '#7c5dfa;';
const mainTransition = `all 0.3s linear`;
const deletebackground = '#ec5757';
const deletebackgroundhover = '#ff9797';

export const ButtonContainer = styled.div`
  min-height: 10vh;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditButton = styled.button`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.editColor};
  text-transform: capitalize;
  height: 2.7rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${({ theme }) => theme.editBtnBackground};
  outline: none;
  border: none;
  transition: ${mainTransition};
  &:hover {
    cursor: pointer;
    background: #dfe3fa;
    color: ${({ theme }) => theme.editHoverColor};
  }
  @media screen and (max-width: 410px) {
    height: 2.7rem;
    width: 4.9rem;
  }
`;

export const DeleteButton = styled.button`
  color: ${colorWhite};
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: capitalize;
  height: 2.9rem;
  width: 6rem;
  border-radius: 50px;
  background: ${deletebackground};
  outline: none;
  border: none;
  margin: 0 0.8em;
  transition: ${mainTransition};
  &:hover {
    cursor: pointer;
    background: ${deletebackgroundhover};
  }
  @media screen and (max-width: 410px) {
    height: 2.8rem;
    width: 5.9rem;
  }
`;

export const PaidButton = styled.button`
  color: ${colorWhite};
  background: ${(props) => (props.disabled ? 'gray' : `${colorPurp}`)};
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: capitalize;
  height: 3.2rem;
  width: 10rem;
  border-radius: 50px;
  outline: none;
  border: none;
  transition: ${mainTransition};
  pointer-events: ${(props) => props.disabled && 'none'};
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.disabled ? 'gray' : `${colorLightPurp}`)};
  }

  @media screen and (max-width: 410px) {
    height: 3.1rem;
    width: 9rem;
  }
`;
