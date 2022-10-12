import styled from 'styled-components';

const colorLightPurp = '#9277ff';
const colorWhite = '#fff';
const colorPurp = '#7c5dfa;';
const mainTransition = `all 0.3s linear`;

export const ButtonContainer = styled.div`
  margin-top: auto;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .discard {
    height: 3rem;
    width: 6rem;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.editColor};
    font-weight: 700;
    background: ${({ theme }) => theme.editBtnBackground};
    transition: ${mainTransition};

    &:hover {
      cursor: pointer;
      background: #dfe3fa;
      color: ${({ theme }) => theme.editHoverColor};
    }

    @media screen and (max-width: 410px) {
      height: 2.5rem;
      width: 5.5rem;
      font-size: 0.7rem;
    }
  }

  .draft {
    height: 3rem;
    width: 8.5rem;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    margin-left: auto;
    color: ${({ theme }) => theme.editColor};
    font-weight: 700;
    background: ${({ theme }) => theme.navBackground};
    transition: ${mainTransition};

    &:hover {
      cursor: pointer;
      background: #0c0e16;
    }
    @media screen and (max-width: 410px) {
      height: 2.5rem;
      width: 8rem;
      font-size: 0.7rem;
      margin-left: 1em;
    }
  }

  .saveBtn {
    height: 3rem;
    width: 8.5rem;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    font-weight: 700;
    margin-left: 1em;
    color: ${colorWhite};
    background: ${colorPurp};
    transition: ${mainTransition};
    transition: ${mainTransition};

    &:hover {
      cursor: pointer;
      background: ${colorLightPurp};
    }

    @media screen and (max-width: 410px) {
      height: 2.5rem;
      width: 8rem;
      font-size: 0.7rem;
      margin-left: 1em;
    }
  }
`;
