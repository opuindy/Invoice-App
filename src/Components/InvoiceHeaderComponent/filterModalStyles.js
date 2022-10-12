import styled from 'styled-components';

const colorPurp = '#7c5dfa;';
const mainTransition = `all 0.3s linear`;

export const ModalContainer = styled.article`
  width: 180px;
  height: 120px;
  background: ${({ theme }) => theme.invoiceBackgroundColor};
  border-radius: 20px;
  position: absolute;
  top: 9vh;
  right: 6rem;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  padding: 1.5em;
  padding-left: 2.1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 5;
  @media screen and (min-width: 768px) {
    top: 11vh;
  }
`;

export const FormControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};

  &:hover {
    cursor: pointer;
  }

  input[type='radio'] {
    opacity: 0;
    margin-bottom: 0;
    font-size: 0.8rem;
    height: 0;
  }

  label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color};
    text-transform: capitalize;
    font-weight: 700;
    margin-left: 0.5em;
    position: relative;
    transition: ${mainTransition};
    &:hover {
      cursor: pointer;
    }
  }

  label::before {
    content: '';
    display: inline-block;
    height: 19px;
    width: 19px;
    background: ${({ theme }) => theme.checkbox};
    border-radius: 3px;
    transition: ${mainTransition};
  }

  label::after {
    content: '';
    display: inline-block;
    height: 6px;
    width: 11px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(-45deg);
    transition: ${mainTransition};
  }

  label::before,
  label::after {
    position: absolute;
  }

  label::before {
    top: 0.1px;
    left: -28px;
  }
  label::after {
    top: 5px;
    left: -25px;
  }

  input[type='radio'] + label::after {
    content: none;
  }

  input[type='radio']:checked + label::after {
    content: '';
  }

  input[type='radio']:checked + label::before {
    content: '';
    background: ${colorPurp};
  }
`;
