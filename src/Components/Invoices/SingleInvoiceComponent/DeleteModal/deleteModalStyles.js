import styled from 'styled-components';

const mainTransition = `all 0.3s linear`;

export const DeleteModalContainer = styled.section`
  width: 100%;
  min-height: 112vh;
  position: fixed;
  top: -11vh;
  left: 0;
  padding: 0 2em;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: ${mainTransition};
`;

export const InnerContainer = styled.div`
  height: 30vh;
  width: 60vh;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.invoiceBackgroundColor};
  box-shadow: 10px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5em 2em;

  h2 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color};
    margin-right: auto;
    @media screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    color: ${({ theme }) => theme.regularText};
    margin-right: auto;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding-left: 2.5em;
  }
`;

export const ButtonContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CancelButton = styled.button`
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
`;

export const DeleteButton = styled.button`
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: capitalize;
  height: 2.9rem;
  width: 6rem;
  border-radius: 50px;
  background: #ec5757;
  outline: none;
  border: none;
  margin: 0 0.8em;
  transition: ${mainTransition};
  &:hover {
    cursor: pointer;
    background: #ff9797;
  }
  @media screen and (max-width: 410px) {
    height: 2.8rem;
    width: 5.9rem;
  }
`;
